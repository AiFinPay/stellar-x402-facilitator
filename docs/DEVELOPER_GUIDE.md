# Developer Guide Plan

The final guide is role-based and must take a developer from documentation to a paid, discoverable testnet endpoint in well under one hour.

## Seller path

1. Create or select a Stellar account.
2. Add the required asset trustline.
3. Protect an HTTP or MCP resource with canonical x402 middleware.
4. Add Bazaar discovery metadata.
5. Prove ownership and verify the catalog listing.
6. Receive a testnet payment and inspect the transaction.

## Buyer and agent path

1. Create or connect a non-custodial Stellar wallet.
2. Fund testnet XLM and USDC and establish the required trustline.
3. Query structured or natural-language discovery.
4. Inspect canonical payment requirements.
5. Sign the Stellar auth entry locally.
6. Pay, retry, and validate the settlement response.

## Operator path

1. Deploy PostgreSQL and service containers.
2. Configure Stellar testnet RPC.
3. Generate facilitator, fee-bump, and channel accounts.
4. Store secrets outside the repository.
5. Run conformance tests and synthetic payments.
6. Configure telemetry, rate limits, backups, and alerts.
7. Complete the mainnet readiness checklist before enabling pubnet.

Live commands and URLs will replace this plan when the corresponding implementation exists. Documentation must never present placeholders as working quickstarts.
