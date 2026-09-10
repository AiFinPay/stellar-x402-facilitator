# RFP compliance matrix for resubmission

This matrix maps the prior x402 Facilitator with Bazaar Discovery feedback to the corrected implementation baseline. The final application must be checked against the exact future-round RFP before submission.

| Requirement / panel concern | Corrected implementation | Evidence | Status |
| --- | --- | --- | --- |
| Working Stellar prototype | Runnable Node.js facilitator using canonical Stellar exact scheme | `packages/facilitator/src/` | Implemented |
| Real Stellar delivery evidence | Live testnet x402 settlement in CI using ephemeral funded accounts | `tests/e2e/stellar-testnet.ts` | CI-gated |
| Use canonical `@x402/stellar` | Pinned `@x402/stellar@2.25.0` | `package.json` | Implemented |
| Canonical endpoints | `/supported`, `/verify`, `/settle`, `/health` | Facilitator source + integration test | Implemented |
| Fee sponsorship semantics | Delegated to canonical Stellar scheme | `@x402/stellar` supported response | Implemented |
| Bazaar is the largest funded workstream | USD 34,000 / 37.8% | `BUDGET.md` | Corrected |
| Defined ranking algorithm | Deterministic BM25-style lexical ranking | `packages/bazaar/src/search.ts` | Implemented |
| Defined benchmark | Published held-out corpus/query set | `packages/bazaar/src/benchmark.ts` | Implemented |
| Metric floor | Recall@5 >= 0.90, NDCG@5 >= 0.85 | `packages/bazaar/src/evaluate.ts` | CI-gated |
| Objective tranche gates | CI, public transaction, tagged artifact or independent reviewer evidence | `MILESTONES.md`, `EVIDENCE_REGISTER.md` | Corrected |
| Static security analysis | GitHub CodeQL | `.github/workflows/codeql.yml` | CI-gated |
| Persistent catalog and provenance | Ownership verification, spoofing controls and durable storage | Future implementation | Planned |
| MCP discovery server | Versioned deterministic MCP surface | Future implementation | Planned |
| Pubnet evidence | Controlled mainnet settlement tied to tagged revision | Future implementation | Planned |
| Reliability evidence | Reproducible load/failover scenario with numeric thresholds | Future implementation | Planned |
| External security review | Independent reviewer and remediation record | Future implementation | Planned |

## Explicit exclusions

- reimbursement for work already committed before award;
- company formation and general legal costs;
- marketing and paid promotion;
- unrelated AiFinPay protocol development;
- proprietary settlement behavior that breaks canonical x402 compatibility.
