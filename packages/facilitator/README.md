# Facilitator package

Runnable Stellar x402 v2 facilitator using the canonical `@x402/stellar` exact scheme.

## Endpoints

- `GET /health`
- `GET /supported`
- `POST /verify`
- `POST /settle`

Start it from the repository root:

```bash
npm install
cp .env.example .env
npm run dev:facilitator
```

The service supports a single signer or a comma-separated signer pool. Private keys are read only from environment variables and are never included in logs or evidence artifacts.

The live integration test in `tests/e2e/stellar-testnet.ts` proves the canonical client -> resource server -> facilitator -> Stellar settlement path with a public testnet transaction.
