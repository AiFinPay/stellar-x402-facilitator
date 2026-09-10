# SCF resubmission milestones

The previous application relied too heavily on completion reports authored by the delivery team. These milestones use reproducible or independently inspectable gates.

## Milestones

| Milestone | Deliverables | Completion gate |
| --- | --- | --- |
| Discovery MVP | Deterministic ranking, filters, benchmark, evaluation harness | Public CI passes Recall@5 >= 0.90 and NDCG@5 >= 0.85 on the committed held-out set |
| Stellar testnet integration | Runnable facilitator, canonical exact flow, transaction evidence | CI creates a real testnet settlement and publishes the transaction hash, ledger and exact commit |
| Bazaar integration | Catalog registration, ownership/provenance validation, HTTP/MCP identity equivalence | Automated spoofing/provenance tests plus reproducible integration fixtures |
| Conformance and resilience | Negative/replay cases, rate limits, load/failover targets, security checks | Public CI results with fixed thresholds; security-sensitive findings block release |
| Clean-room onboarding | Operator and seller quickstarts | A person who did not implement the feature follows the tagged instructions; start/end timestamps and exact revision are recorded |
| Pubnet release | Controlled mainnet deployment and self-hostable release | Public pubnet transaction, tagged release, deployment/rollback evidence and final security disposition |

## Current pre-award evidence

Already implemented in this repository:

- runnable Stellar facilitator;
- live ephemeral-account Stellar testnet E2E test;
- deterministic Bazaar ranking;
- held-out search benchmark and numeric quality floors;
- CI jobs that publish machine-readable evidence artifacts.

These items are prior-to-award evidence and must not be billed again.

## Ownership

| Area | Accountable owner |
| --- | --- |
| Facilitator, Stellar correctness and production operations | Pavlo Bolhar |
| Bazaar, MCP, SDK and search-quality implementation | Pavel Svizinskiy |
| Product acceptance, RFP alignment and evidence package | Dmitry Buhaienko |
| Budget governance | Iryna Zavorotnia |

Security-sensitive payment changes require a technical reviewer other than the author.
