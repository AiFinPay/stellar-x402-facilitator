# SCF resubmission budget

**Requested amount: USD 90,000.**

This revision addresses the SCF #45 panel feedback that the prior request did not make Bazaar/Discovery the largest budget share.

## Allocation

| Workstream | Amount | Share | Acceptance basis |
| --- | ---: | ---: | --- |
| Bazaar discovery, ranking, evaluation, provenance, registration, MCP and SDK integration | **USD 34,000** | **37.8%** | Search benchmark, provenance/ownership tests, MCP/HTTP equivalence, abuse tests |
| Stellar facilitator hardening, exact settlement, signer isolation and deployment | USD 21,000 | 23.3% | Canonical API tests, testnet/pubnet settlement evidence, deployment artifacts |
| Conformance, negative/replay/security and reliability engineering | USD 14,000 | 15.6% | Reproducible conformance matrix, CodeQL/static checks, replay tests, load/failover thresholds |
| Documentation, clean-room onboarding, release and evidence package | USD 11,000 | 12.2% | Independent timed onboarding, tagged docs, evidence register |
| Direct test/production infrastructure | USD 10,000 | 11.1% | Provider invoices/records and deployment evidence |
| **Total** | **USD 90,000** | **100%** | |

Bazaar/Discovery is the single largest workstream.

## What is not funded

- prior AiFinPay development;
- company incorporation or legal setup;
- general marketing or paid promotion;
- unrelated AiFinPay protocols;
- token issuance or liquidity;
- work already completed in this repository before award activation.

## Payment gates

| Gate | Amount | Objective completion condition |
| --- | ---: | --- |
| Discovery MVP | USD 18,000 | Search API, published benchmark, Recall@5 >= 0.90, NDCG@5 >= 0.85 |
| Testnet integrated release | USD 24,000 | Canonical x402 testnet settlement, discovery registration/provenance tests, MCP alpha |
| Conformance and production candidate | USD 22,000 | Negative/replay suite, load/failover thresholds, clean-room onboarding evidence |
| Pubnet and final release | USD 26,000 | Public pubnet transaction, tagged self-hostable release, external security disposition and final evidence register |
| **Total** | **USD 90,000** | |

No tranche is released on a self-authored narrative report alone. Each gate must link to CI output, public network evidence, a reproducible benchmark, a tagged artifact, an independent reviewer record, or a combination of those artifacts.
