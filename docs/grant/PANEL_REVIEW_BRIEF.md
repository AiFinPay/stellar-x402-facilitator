# SCF #45 panel review brief

This page is the fastest route through the AiFinPay Stellar x402 Facilitator submission for reviewers evaluating **ecosystem value, technical implementation, team, budget feasibility and deliverables**.

## Review snapshot

| Evaluation area | AiFinPay position | Primary evidence |
| --- | --- | --- |
| **Ecosystem value** | Open-source, self-hostable Stellar x402 facilitator plus Bazaar discovery, MCP tooling and reusable conformance evidence | [`SCF45_APPLICATION.md`](SCF45_APPLICATION.md) · [`RFP_COMPLIANCE_MATRIX.md`](RFP_COMPLIANCE_MATRIX.md) |
| **Technical implementation** | Canonical `@x402/stellar` integration, explicit testnet/pubnet profiles, isolated signer boundary, durable idempotency, Bazaar/MCP/SDK layer, production observability and security controls | [`../ARCHITECTURE.md`](../ARCHITECTURE.md) · [`../SECURITY_MODEL.md`](../SECURITY_MODEL.md) · [`../THREAT_MODEL.md`](../THREAT_MODEL.md) |
| **Team** | Four named delivery owners with explicit responsibilities plus finance governance; 32 award-funded person-weeks | [`TEAM.md`](TEAM.md) · [`../../MAINTAINERS.md`](../../MAINTAINERS.md) |
| **Budget feasibility** | Fixed **USD 90,000** request; USD 82,000 labor + capped USD 8,000 direct infrastructure; no marketing, incorporation, past-work reimbursement or separate Audit Bank fees | [`BUDGET.md`](BUDGET.md) |
| **Deliverables** | Four objective gates from setup through pubnet, each tied to reproducible evidence instead of narrative completion claims | [`MILESTONES.md`](MILESTONES.md) · [`EVIDENCE_REGISTER.md`](EVIDENCE_REGISTER.md) |
| **Execution risk** | Named owner and observable trigger for each material technical, security, schedule and budget risk | [`RISK_REGISTER.md`](RISK_REGISTER.md) |

## What will actually be built

The award funds future Stellar-specific implementation of:

- hosted and self-hostable `/supported`, `/verify`, `/settle` facilitator APIs;
- canonical Stellar x402 verification and settlement through `@x402/stellar`;
- safe signing/sequencing boundary, idempotency and transaction evidence;
- Bazaar-compatible resource catalog, provenance controls and natural-language discovery;
- MCP discovery/payment interface and TypeScript SDK helpers;
- two runnable end-to-end integrations;
- Stellar `upto` specification/implementation contribution proposed upstream;
- testnet/pubnet conformance, replay/negative tests, load/failover evidence and public transaction hashes;
- production monitoring, SLO/degraded-mode/rollback runbooks, SBOM/license controls and Audit Bank remediation.

Batch settlement, authorization-capture, unrelated AiFinPay protocol expansion and marketing are outside this award.

## Why the implementation is credible

AiFinPay already operates public agent-payment engineering surfaces, including SDK/MCP tooling and smart-contract infrastructure. The SCF project does not ask Stellar to reimburse that prior work; it uses the existing engineering base as execution evidence and builds a new Stellar-specific facilitator and discovery stack against explicit acceptance gates.

Public execution evidence:

- <https://github.com/AiFinPay/sdk>
- <https://github.com/AiFinPay/evm-contract>
- <https://aifinpay.io>

The project remains deliberately dependent on canonical Stellar/x402 packages rather than reimplementing solved settlement logic.

## Team and capacity

| Owner | Delivery responsibility | Allocation |
| --- | --- | ---: |
| Pavlo Bolhar | Facilitator/backend, deployment, observability, load/failover validation and production release | 8 person-weeks |
| Syed Hassan | Stellar/x402 integration, conformance, payment-security logic, transaction evidence and `upto` contribution | 10 person-weeks |
| Pavel Svizinskiy | Bazaar discovery/search, provenance controls, MCP, SDK helpers, abuse/relevance evaluation and reference integrations | 9 person-weeks |
| Dmitry Buhaienko | Product acceptance, technical documentation, release evidence and SCF reporting | 5 person-weeks |

**Total: 32 person-weeks over eight weeks = four FTE on average.**

Iryna Zavorotnia provides budget governance as internal support and is not charged as technical labor.

## USD 90,000 budget logic

| Workstream | Amount |
| --- | ---: |
| Facilitator/backend/production operations and reliability | USD 22,000 |
| Stellar/x402 integration, conformance and transaction evidence | USD 25,000 |
| Bazaar discovery/search, MCP/SDK and reference integrations | USD 22,500 |
| Product/docs/release/SCF evidence | USD 12,500 |
| Direct development and validation infrastructure, capped | USD 8,000 |
| **Total** | **USD 90,000** |

The schedule and budget are intentionally coupled: 32 named person-weeks fund the labor plan, infrastructure is separately capped, and 90% of the award is attached to working MVP/testnet/pubnet evidence rather than proposal documents.

## Delivery gates

1. **Award setup — USD 9,000:** final implementation baseline, CI, interfaces, backlog and controls.
2. **MVP — USD 18,000:** canonical endpoints, first testnet payment, initial Bazaar/MCP/SDK flow and reproducible example.
3. **Testnet — USD 27,000:** full testnet conformance, discovery/search controls, negative/replay/load evidence, two integrations and reviewable `upto` contribution.
4. **Mainnet — USD 36,000:** controlled pubnet release, self-host package, production monitoring/runbooks, audit remediation and final evidence register.

## Reviewer verification principle

AiFinPay will treat **evidence as part of the product**. A milestone is not complete solely because code exists. Required proof includes exact software revisions, CI/test outputs, public Stellar transaction hashes, negative/replay matrices, search/abuse evaluations, load/failover reports, release artifacts, SBOM/license evidence, runbook exercises and audit-remediation records where applicable.

**Official project contact:** `contact@aifinpay.company`
