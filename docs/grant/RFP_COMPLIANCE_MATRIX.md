# SCF #45 RFP compliance matrix

This matrix maps the x402 Facilitator with Bazaar Discovery RFP to planned implementation and evidence. “Planned” is not a completion claim.

| Requirement                     | Planned implementation                                                                | Acceptance evidence                                       | Status                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------- |
| Production-ready facilitator    | Hosted and self-hostable Node.js service with isolated signer and durable idempotency | Deployment artifacts, runbook, health metrics             | Planned                             |
| Testnet and mainnet             | Explicit `stellar:testnet` and `stellar:pubnet` profiles                              | Canonical E2E runs and public transaction hashes for both | Planned                             |
| Permissive OSI license          | Apache-2.0 repository and compatible dependency policy                                | `LICENSE`, dependency report                              | Ready at repository level           |
| Use `@x402/stellar`             | Adapter delegates verification and settlement to canonical package                    | Dependency lock, adapter tests, ADR 0001                  | Planned                             |
| No settlement reimplementation  | No custom signing/settlement protocol outside the canonical adapter                   | Architecture review and code audit                        | Planned                             |
| Canonical endpoints             | `/supported`, `/verify`, `/settle`                                                    | Contract tests and OpenAPI schema                         | Planned                             |
| Fee sponsorship field           | Accurate `areFeesSponsored` response per configured mode                              | Endpoint tests                                            | Planned                             |
| Canonical payload               | Settlement response includes `payload: { transaction }` as required                   | Conformance report                                        | Planned                             |
| Rejection reasons               | Stable non-null machine-readable reason and human-safe detail                         | Negative test matrix                                      | Planned                             |
| Bazaar discovery                | Auto-registration, catalog, search, provenance, HTTP/MCP metadata                     | Bazaar integration tests and demo                         | Planned                             |
| Natural-language search         | Deterministic retrieval pipeline over normalized catalog                              | Relevance and abuse test report                           | Planned                             |
| MCP discovery server            | Versioned tools/resources, structured schemas, deterministic errors                   | MCP inspector output and tests                            | Planned                             |
| `upto` scheme                   | Stellar draft spec, implementation and upstream proposal                              | Draft, tests, x402 TSC issue/PR links                     | Planned; upstream decision external |
| Do not build batch/auth-capture | Explicitly excluded from scope                                                        | Roadmap and architecture review                           | In scope boundary                   |
| Authorization entries           | Treat Stellar auth entries correctly; no presigned-transaction assumption             | Unit and integration tests                                | Planned                             |
| Ledger expiration               | Validate ledger/time bounds and return explicit expiration reasons                    | Boundary tests                                            | Planned                             |
| Trustlines and assets           | SEP-41 asset validation, trustline and balance preflight                              | Asset test matrix                                         | Planned                             |
| Soroban limits/TTL              | Avoid on-chain registry in v1; document limits if introduced                          | ADR 0002                                                  | Designed                            |
| Throughput strategy             | Channel accounts and fee-bump option with capacity tests                              | Load report                                               | Planned                             |
| Replay/front-running            | Network/resource/value/party/nonce binding and idempotency                            | Threat-model tests                                        | Planned                             |
| Discovery spoofing              | Ownership checks, provenance, moderation and rate limits                              | Abuse test report                                         | Planned                             |
| Upstream E2E suite              | Run unmodified official tests where applicable                                        | CI logs and pinned upstream revision                      | Planned                             |
| Audit Bank                      | Prepare scope, engage approved reviewer, remediate findings                           | Review/remediation record                                 | Planned                             |
| Under-one-hour onboarding       | Quickstart and two runnable examples                                                  | Timed clean-room onboarding record                        | Planned                             |
| 99%+ availability               | SLO metrics, alerts, redundancy and degraded-mode behavior                            | Dashboard export and incident exercise                    | Planned                             |
| Maintenance/spec drift          | Compatibility matrix, scheduled dependency review, deprecation policy                 | Maintenance log and releases                              | Planned                             |
| Role-based Stellar guide        | Operator, API seller, client and agent guidance                                       | Documentation contribution/PR                             | Planned                             |

## Explicit exclusions

- general-purpose marketing or paid advertising;
- reimbursement for previous AiFinPay development;
- batch settlement;
- authorization-capture;
- token issuance or token-only utility;
- a custom settlement implementation competing with `@x402/stellar`;
- AGPL components in the deployable service path.
