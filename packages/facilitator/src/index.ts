import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { x402Facilitator } from "@x402/core/facilitator";
import type { Network, PaymentPayload, PaymentRequirements } from "@x402/core/types";
import {
  createEd25519Signer,
  STELLAR_TESTNET_CAIP2,
} from "@x402/stellar";
import { ExactStellarScheme } from "@x402/stellar/exact/facilitator";

export interface FacilitatorConfig {
  privateKeys: string[];
  network?: Network;
  rpcUrl?: string;
  feeBumpPrivateKey?: string;
  maxTransactionFeeStroops?: number;
}

export function createStellarFacilitator(config: FacilitatorConfig): x402Facilitator {
  if (config.privateKeys.length === 0) {
    throw new Error("At least one Stellar facilitator private key is required");
  }

  const network = config.network ?? (STELLAR_TESTNET_CAIP2 as Network);
  const signers = config.privateKeys.map(key => createEd25519Signer(key, network));
  const feeBumpSigner = config.feeBumpPrivateKey
    ? createEd25519Signer(config.feeBumpPrivateKey, network)
    : undefined;

  const scheme = new ExactStellarScheme(signers, {
    rpcConfig: config.rpcUrl ? { url: config.rpcUrl } : undefined,
    feeBumpSigner,
    maxTransactionFeeStroops: config.maxTransactionFeeStroops,
  });

  return new x402Facilitator().register(network, scheme);
}

function splitKeys(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map(key => key.trim())
    .filter(Boolean);
}

export function createStellarFacilitatorFromEnv(): {
  facilitator: x402Facilitator;
  network: Network;
} {
  const keys = splitKeys(
    process.env.STELLAR_FACILITATOR_PRIVATE_KEYS ??
      process.env.STELLAR_FACILITATOR_PRIVATE_KEY,
  );
  const network = (process.env.STELLAR_NETWORK ?? STELLAR_TESTNET_CAIP2) as Network;

  return {
    facilitator: createStellarFacilitator({
      privateKeys: keys,
      network,
      rpcUrl: process.env.STELLAR_RPC_URL,
      feeBumpPrivateKey: process.env.STELLAR_FEE_BUMP_PRIVATE_KEY,
      maxTransactionFeeStroops: process.env.STELLAR_MAX_TX_FEE_STROOPS
        ? Number(process.env.STELLAR_MAX_TX_FEE_STROOPS)
        : undefined,
    }),
    network,
  };
}

async function readJson(req: IncomingMessage, maxBytes = 1_000_000): Promise<unknown> {
  let total = 0;
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buffer.length;
    if (total > maxBytes) {
      throw new Error("request_body_too_large");
    }
    chunks.push(buffer);
  }
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(payload),
    "cache-control": "no-store",
  });
  res.end(payload);
}

export function startFacilitatorHttpServer(
  facilitator: x402Facilitator,
  options: { port?: number; host?: string } = {},
) {
  const port = options.port ?? Number(process.env.PORT ?? 4022);
  const host = options.host ?? process.env.HOST ?? "0.0.0.0";

  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", "http://localhost");

      if (req.method === "GET" && url.pathname === "/health") {
        return sendJson(res, 200, { status: "ok" });
      }

      if (req.method === "GET" && url.pathname === "/supported") {
        return sendJson(res, 200, facilitator.getSupported());
      }

      if (
        req.method === "POST" &&
        (url.pathname === "/verify" || url.pathname === "/settle")
      ) {
        const body = (await readJson(req)) as {
          paymentPayload?: PaymentPayload;
          paymentRequirements?: PaymentRequirements;
        };

        if (!body.paymentPayload || !body.paymentRequirements) {
          return sendJson(res, 400, {
            error: "missing_payment_payload_or_requirements",
          });
        }

        const result =
          url.pathname === "/verify"
            ? await facilitator.verify(body.paymentPayload, body.paymentRequirements)
            : await facilitator.settle(body.paymentPayload, body.paymentRequirements);

        return sendJson(res, 200, result);
      }

      return sendJson(res, 404, { error: "not_found" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "unknown_error";
      return sendJson(res, message === "request_body_too_large" ? 413 : 400, {
        error: message,
      });
    }
  });

  server.listen(port, host);
  return server;
}
