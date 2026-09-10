# AiFinPay Stellar x402 Facilitator

Open-source Stellar x402 facilitator and Bazaar discovery prototype built on the canonical `@x402/stellar` implementation.

## Current status

The repository now contains runnable code, automated search-quality evaluation, and a live Stellar testnet settlement test. It no longer presents the Stellar work as documentation-only.

Implemented now:

- `/supported`, `/verify`, `/settle`, and `/health` facilitator endpoints;
- canonical x402 v2 `exact` settlement through `@x402/stellar`;
- explicit `stellar:testnet` and configurable Stellar network support;
- deterministic Bazaar search using BM25-style ranking;
- a published held-out discovery benchmark;
- CI gates for type checking, unit tests, Recall@5, NDCG@5, and a real Stellar testnet settlement;
- a public evidence artifact containing the settlement transaction hash and ledger.

Not claimed complete yet:

- production pubnet deployment;
- production-grade persistent catalog storage and provenance verification;
- MCP server implementation;
- load/failover production validation;
- external security review;
- Stellar `upto` upstream implementation.

## Quick start

Requirements: Node.js 22+.

```bash
npm install
cp .env.example .env
npm run dev:facilitator
```

The facilitator requires at least one Stellar private key in
`STELLAR_FACILITATOR_PRIVATE_KEY` or a comma-separated set in
`STELLAR_FACILITATOR_PRIVATE_KEYS`.

## Verification

Run the deterministic test suite and discovery benchmark:

```bash
npm run typecheck
npm run test
npm run evaluate:discovery
```

Run a real end-to-end payment on Stellar testnet:

```bash
npm run test:e2e:stellar
```

The test creates ephemeral Stellar accounts, funds them through Friendbot, builds a canonical x402 payment payload, verifies it, settles it, verifies the resulting transaction through Horizon, and writes:

```text
artifacts/stellar-testnet-settlement.json
```

No private keys are written to the evidence artifact or repository.

## Discovery quality gate

The initial public benchmark is in:

- `packages/bazaar/src/benchmark.ts`
- `packages/bazaar/src/evaluate.ts`

The CI floor is:

| Metric | Required floor |
| --- | ---: |
| Recall@5 | 0.90 |
| NDCG@5 | 0.85 |

A failing floor fails CI. This replaces subjective statements such as "search quality is good" with a reproducible benchmark and explicit threshold.

## Repository map

```text
packages/facilitator/   Runnable Stellar facilitator
packages/bazaar/        Search/ranking implementation and benchmark
tests/e2e/              Live Stellar testnet settlement test
docs/                   Architecture, security and operating design
docs/grant/             SCF resubmission package and evidence model
.github/workflows/      CI and public acceptance gates
```

## SCF resubmission package

The original SCF #45 submission is retained as historical material. The corrected resubmission package is:

- [Resubmission draft](docs/grant/SCF_RESUBMISSION.md)
- [Budget](docs/grant/BUDGET.md)
- [Milestones](docs/grant/MILESTONES.md)
- [Evidence register](docs/grant/EVIDENCE_REGISTER.md)
- [RFP compliance matrix](docs/grant/RFP_COMPLIANCE_MATRIX.md)
- [Team](docs/grant/TEAM.md)

The corrected plan gives Bazaar/Discovery the largest budget share and uses externally inspectable or reproducible acceptance evidence.

## Security

Never commit production private keys, seed phrases, reusable payment authorizations, API keys, or confidential partner data. See [SECURITY.md](SECURITY.md).

## License

Apache-2.0. See [LICENSE](LICENSE).
