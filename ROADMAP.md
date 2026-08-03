# Roadmap

Dates begin when an SCF award is accepted and the implementation team is available. The controlled mainnet deployment target is eight weeks; production acceptance includes a stabilization period.

## Tranche 1 — MVP, weeks 1–3

- monorepo, CI, release, and license gates;
- canonical `/supported`, `/verify`, and `/settle` service skeleton;
- `exact` integration on Stellar testnet using `@x402/stellar`;
- deterministic error taxonomy and redacted observability;
- first canonical-client payment evidence.

## Tranche 2 — Testnet, weeks 4–6

- Bazaar resource catalog, filters, search, and safe automatic cataloging;
- MCP search and paid-call tools;
- draft `scheme_upto_stellar.md` and reference implementation path;
- channel-account throughput mode and trustline onboarding;
- required testnet E2E examples and conformance report.

## Tranche 3 — Mainnet and production acceptance, weeks 7–16

- controlled `stellar:pubnet` deployment by the end of week 8;
- exact and approved `upto` behavior on supported networks;
- security review and remediation;
- role-based developer guide and upstream contributions;
- two production-grade examples;
- monitoring, operational runbooks, 99%+ availability target, and degraded modes;
- stabilization evidence and final conformance report by week 16.

See [Milestones](docs/grant/MILESTONES.md) for grant acceptance evidence.
