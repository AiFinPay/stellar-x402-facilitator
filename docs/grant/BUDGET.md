# SCF #45 budget and feasibility

**Requested amount: USD 90,000.**

The budget covers only future Stellar-specific delivery work required by the SCF #45 x402 Facilitator with Bazaar Discovery RFP. It excludes reimbursement for prior AiFinPay development, general marketing, legal/entity setup, token issuance/liquidity, unrelated product work, and Audit Bank costs covered through SCF's separate mechanism.

## Cost model

The eight-week implementation plan contains **32 award-funded person-weeks** across five named delivery owners. That equals an average of four full-time-equivalent contributors during the build window. The named team has additional non-award capacity for SCF sessions, reviews, company operations and unexpected coordination overhead, so the plan does not require every contributor to be 100% allocated to grant work simultaneously.

| Workstream | Owner | Person-weeks | Effective weekly rate | Amount | Deliverable mapping |
| --- | --- | ---: | ---: | ---: | --- |
| Facilitator backend, state, signer boundary, deployment and observability | Pavlo Bolhar | 8 | USD 2,750 | **USD 22,000** | MVP, Testnet, Mainnet |
| Stellar/x402 adapter, asset/auth handling, conformance and `upto` contribution | Syed Hassan | 8 | USD 2,500 | **USD 20,000** | MVP, Testnet, Mainnet |
| Bazaar discovery, MCP interface, SDK helpers and reference integrations | Pavel Svizinskiy | 7 | USD 2,500 | **USD 17,500** | MVP, Testnet |
| Search quality, abuse/relevance evaluation, reliability and evidence reporting | Nick Staetskiy | 5 | USD 2,500 | **USD 12,500** | Testnet, Mainnet |
| Product acceptance, technical documentation, release evidence and SCF reporting | Dmitry Buhaienko | 4 | USD 2,500 | **USD 10,000** | All gates |
| Direct development/test infrastructure: RPC, database, hosting, observability, CI/load-test resources and controlled production validation | Project infrastructure | n/a | documented actual costs, capped | **USD 8,000** | Testnet, Mainnet |
| **Total** |  | **32** |  | **USD 90,000** |  |

Iryna Zavorotnia, Head of Finance, provides budget governance and supporting-document control as internal company support and is not charged as technical labor in the table above.

## Milestone payment mapping

The requested amount maps directly to the SCF delivery gates:

| Gate | Share | Amount | Payment basis |
| --- | ---: | ---: | --- |
| Award setup | 10% | **USD 9,000** | Public implementation baseline, final interfaces, CI, backlog and delivery controls |
| MVP | 20% | **USD 18,000** | Working canonical endpoints on testnet, initial discovery/MCP/SDK flow and reproducible example |
| Testnet | 30% | **USD 27,000** | Complete testnet conformance, search/discovery, negative/security/reliability tests and public transaction evidence |
| Mainnet | 40% | **USD 36,000** | Controlled pubnet release, self-hostable package, production runbooks/monitoring, audit remediation and final evidence package |
| **Total** | **100%** | **USD 90,000** |  |

Payments remain subject to the official SCF award terms and any applicable XLM conversion mechanics in the executed award agreement.

## Why the budget is feasible

1. **Bounded scope.** The project builds the facilitator, discovery layer, MCP/SDK integration, conformance suite and production operations described by the RFP. Batch settlement, authorization-capture and unrelated protocol expansion are outside this award.
2. **No double payment for prior work.** Existing AiFinPay SDK and smart-contract infrastructure is used only as execution evidence and engineering experience; the award is allocated to future Stellar-specific work.
3. **Capacity matches schedule.** 32 person-weeks over eight weeks is four FTE on average. Five named delivery owners distribute the workload without requiring unrealistic parallel allocation from one person.
4. **Rates are blended delivery rates.** Effective rates cover engineering time directly attributable to the workstream; infrastructure is separately capped so compute/hosting is not hidden inside labor.
5. **Evidence gates prevent front-loading.** 90% of the requested award is tied to working MVP, testnet and mainnet evidence rather than planning documents.
6. **Security costs are not duplicated.** Audit Bank review costs are excluded; team time for preparing the scope, fixing findings and proving remediation is included inside the relevant engineering workstreams.
7. **Infrastructure is capped.** The USD 8,000 infrastructure line is a maximum reimbursement envelope for directly attributable development and validation services and should be supported by invoices or provider records where required.

## Budget controls

- Every charged item must map to a milestone acceptance artifact.
- Weekly burn is reviewed against remaining person-weeks and deliverables.
- Scope changes require a written impact on cost, schedule and acceptance evidence before work is reallocated.
- General marketing, paid promotion, incorporation, fundraising and unrelated AiFinPay development are prohibited uses of this budget.
- Infrastructure spend above the stated cap requires scope reallocation or SCF approval; it does not automatically increase the award request.
- Public budget claims are reconciled to the signed award terms before milestone reporting.
