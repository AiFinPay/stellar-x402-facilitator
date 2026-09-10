import { mkdir, writeFile } from "node:fs/promises";
import { Keypair } from "@stellar/stellar-sdk";
import { x402Client } from "@x402/core/client";
import { x402Facilitator } from "@x402/core/facilitator";
import {
  type FacilitatorClient,
  x402ResourceServer,
} from "@x402/core/server";
import type {
  Network,
  PaymentPayload,
  PaymentRequirements,
  SettleResponse,
  SupportedResponse,
  VerifyResponse,
} from "@x402/core/types";
import {
  createEd25519Signer,
  STELLAR_TESTNET_CAIP2,
} from "@x402/stellar";
import { ExactStellarScheme as ExactStellarClient } from "@x402/stellar/exact/client";
import { ExactStellarScheme as ExactStellarFacilitator } from "@x402/stellar/exact/facilitator";
import { ExactStellarScheme as ExactStellarServer } from "@x402/stellar/exact/server";

const HORIZON_TESTNET = "https://horizon-testnet.stellar.org";
const FRIENDBOT_URL = "https://friendbot.stellar.org";
const XLM_TESTNET_ASSET =
  "CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC";
const STELLAR_EXPERT_TESTNET_TX =
  "https://stellar.expert/explorer/testnet/tx";

class DirectFacilitatorClient implements FacilitatorClient {
  readonly scheme = "exact";
  readonly network = STELLAR_TESTNET_CAIP2;
  readonly x402Version = 2;

  constructor(private readonly facilitator: x402Facilitator) {}

  verify(
    paymentPayload: PaymentPayload,
    paymentRequirements: PaymentRequirements,
  ): Promise<VerifyResponse> {
    return this.facilitator.verify(paymentPayload, paymentRequirements);
  }

  settle(
    paymentPayload: PaymentPayload,
    paymentRequirements: PaymentRequirements,
  ): Promise<SettleResponse> {
    return this.facilitator.settle(paymentPayload, paymentRequirements);
  }

  getSupported(): Promise<SupportedResponse> {
    return Promise.resolve(this.facilitator.getSupported() as SupportedResponse);
  }
}

async function ensureFunded(address: string): Promise<void> {
  const account = await fetch(`${HORIZON_TESTNET}/accounts/${address}`);
  if (account.ok) return;

  if (account.status !== 404) {
    throw new Error(
      `Horizon account check failed for ${address}: ${account.status}`,
    );
  }

  const friendbot = await fetch(
    `${FRIENDBOT_URL}?addr=${encodeURIComponent(address)}`,
  );
  if (!friendbot.ok) {
    throw new Error(
      `Friendbot funding failed for ${address}: ${friendbot.status} ${await friendbot.text()}`,
    );
  }
}

async function main(): Promise<void> {
  const client = Keypair.random();
  const facilitatorAccount = Keypair.random();
  const resourceServer = Keypair.random();

  await Promise.all([
    ensureFunded(client.publicKey()),
    ensureFunded(facilitatorAccount.publicKey()),
    ensureFunded(resourceServer.publicKey()),
  ]);

  const clientSigner = createEd25519Signer(
    client.secret(),
    STELLAR_TESTNET_CAIP2,
  );
  const facilitatorSigner = createEd25519Signer(
    facilitatorAccount.secret(),
    STELLAR_TESTNET_CAIP2,
  );

  const paymentClient = new x402Client()
    .setSpendControls(false)
    .register(
      STELLAR_TESTNET_CAIP2,
      new ExactStellarClient(clientSigner),
    );

  const facilitator = new x402Facilitator().register(
    STELLAR_TESTNET_CAIP2,
    new ExactStellarFacilitator([facilitatorSigner]),
  );

  const resource = new x402ResourceServer(
    new DirectFacilitatorClient(facilitator),
  );
  resource.register(
    STELLAR_TESTNET_CAIP2,
    new ExactStellarServer(),
  );
  await resource.initialize();

  const requirements: PaymentRequirements = {
    scheme: "exact",
    network: STELLAR_TESTNET_CAIP2 as Network,
    asset: XLM_TESTNET_ASSET,
    amount: "1000",
    payTo: resourceServer.publicKey(),
    maxTimeoutSeconds: 120,
    extra: { areFeesSponsored: true },
  };

  const paymentRequired = await resource.createPaymentRequiredResponse(
    [requirements],
    {
      url: "https://aifinpay.io/stellar-x402-conformance",
      description: "AiFinPay Stellar x402 conformance settlement",
      mimeType: "application/json",
    },
  );

  const paymentPayload =
    await paymentClient.createPaymentPayload(paymentRequired);

  const accepted = resource.findMatchingRequirements(
    [requirements],
    paymentPayload,
  );
  if (!accepted) {
    throw new Error("No matching Stellar payment requirements");
  }

  const verification = await resource.verifyPayment(
    paymentPayload,
    accepted,
  );
  if (!verification.isValid) {
    throw new Error(
      `Verification failed: ${verification.invalidReason ?? "unknown"}`,
    );
  }

  const settlement = await resource.settlePayment(
    paymentPayload,
    accepted,
  );
  if (!settlement.success || !settlement.transaction) {
    throw new Error(
      `Settlement failed: ${settlement.errorReason ?? "unknown"}`,
    );
  }

  const horizonResponse = await fetch(
    `${HORIZON_TESTNET}/transactions/${settlement.transaction}`,
  );
  if (!horizonResponse.ok) {
    throw new Error(
      `Settled transaction not visible in Horizon: ${horizonResponse.status}`,
    );
  }

  const horizon = (await horizonResponse.json()) as {
    hash: string;
    ledger: number;
    successful: boolean;
    created_at: string;
  };

  if (!horizon.successful) {
    throw new Error("Horizon reports the settlement transaction as unsuccessful");
  }

  const evidence = {
    generatedAt: new Date().toISOString(),
    x402PackageVersion: "2.25.0",
    network: STELLAR_TESTNET_CAIP2,
    scheme: "exact",
    asset: XLM_TESTNET_ASSET,
    amountAtomic: requirements.amount,
    payer: verification.payer,
    payTo: requirements.payTo,
    facilitatorAddress: facilitatorAccount.publicKey(),
    transactionHash: settlement.transaction,
    ledger: horizon.ledger,
    successful: horizon.successful,
    ledgerCreatedAt: horizon.created_at,
    explorerUrl: `${STELLAR_EXPERT_TESTNET_TX}/${settlement.transaction}`,
  };

  await mkdir("artifacts", { recursive: true });
  await writeFile(
    "artifacts/stellar-testnet-settlement.json",
    JSON.stringify(evidence, null, 2) + "\n",
  );

  console.log(JSON.stringify(evidence));
}

await main();
