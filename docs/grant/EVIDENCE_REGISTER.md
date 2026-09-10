# Evidence register

This register separates evidence that already exists before an award from evidence that remains a future milestone.

| ID | Claim | Reproducible evidence | Status |
| --- | --- | --- | --- |
| E-001 | Runnable Stellar facilitator exists | `packages/facilitator/src/index.ts` and `packages/facilitator/src/cli.ts` | Implemented |
| E-002 | Canonical x402 Stellar package is used | Pinned `@x402/core@2.25.0` and `@x402/stellar@2.25.0` in `package.json` | Implemented |
| E-003 | A real testnet settlement can be generated without repository secrets | `tests/e2e/stellar-testnet.ts` creates ephemeral accounts, uses Friendbot, verifies and settles | Implemented; CI-gated |
| E-004 | Settlement evidence is independently checkable | CI writes transaction hash, ledger and Stellar Expert URL to `artifacts/stellar-testnet-settlement.json` | CI-gated |
| E-005 | Discovery ranking is implemented | `packages/bazaar/src/search.ts` | Implemented |
| E-006 | Search quality has a defined benchmark and floors | `benchmark.ts`, `evaluate.ts`; Recall@5 >= 0.90 and NDCG@5 >= 0.85 | CI-gated |
| E-007 | Search behavior is unit tested | `packages/bazaar/src/search.test.ts` | CI-gated |
| E-008 | Public static security analysis runs | `.github/workflows/codeql.yml` | CI-gated |
| E-009 | Revised budget makes Bazaar the largest workstream | `docs/grant/BUDGET.md` | Available |
| E-010 | Milestones use reproducible acceptance gates | `docs/grant/MILESTONES.md` | Available |
| E-100 | Persistent Bazaar registration and provenance controls | Integration and spoofing tests | Future deliverable |
| E-101 | MCP discovery/payment interface | MCP inspector output and automated tests | Future deliverable |
| E-102 | Load/failover production thresholds | Reproducible load scenario, fixed pass/fail thresholds and public CI/report output | Future deliverable |
| E-103 | Independent clean-room onboarding | Third-party timer/log against a tagged release | Future deliverable |
| E-104 | External security review | Reviewer record and remediation disposition | Future deliverable |
| E-105 | Stellar pubnet settlement | Public transaction hash tied to exact tagged revision | Future deliverable |
| E-106 | Self-hostable production release | Tagged artifact, SBOM, deployment and rollback evidence | Future deliverable |

## Evidence rules

- A transaction hash must include the exact network and source revision.
- A benchmark must include the committed query set, metric definition and numeric floor.
- A load/security/onboarding claim cannot pass only because the implementation team wrote a report saying it passed.
- Future items remain marked future until their linked evidence exists.
- Pre-award work is never billed again as a grant deliverable.
- Secrets, reusable authorizations and confidential partner data never appear in public evidence.
