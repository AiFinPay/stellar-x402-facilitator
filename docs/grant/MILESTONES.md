# Milestones, owners and acceptance gates

The target is a controlled production release in eight weeks after award activation and required access dependencies are available. Stabilization, upstream coordination, Audit Bank remediation and maintenance continue through the award period.

A milestone is complete only when the claimed result is reproducible from public artifacts or independently verifiable network evidence. Planning documents alone do not satisfy an implementation milestone.

| Gate | Target window | Share / amount | Accountable owner | Deliverables | Objective acceptance evidence |
| --- | --- | ---: | --- | --- | --- |
| **Award setup** | Week 0 | **10% / USD 9,000** | Dmitry Buhaienko | Final interfaces and architecture; implementation backlog; public repository controls; dependency/version pins; CI baseline; network/signer threat review; milestone issue map | Green CI; reviewed architecture/ADRs; locked dependency baseline; public issue/backlog map; named owners; repository accessible without authentication |
| **MVP** | Weeks 1–3 | **20% / USD 18,000** | Pavlo Bolhar | Canonical `/supported`, `/verify`, `/settle`; isolated signer boundary; durable idempotency; first successful Stellar testnet flow; initial Bazaar catalog; MCP discovery alpha; SDK helpers; first paid-resource example | Automated API tests; successful canonical testnet transaction hash; deterministic rejection examples; MCP schema tests; reproducible quickstart from a clean environment |
| **Testnet** | Weeks 4–6 | **30% / USD 27,000** | Syed Hassan | Complete testnet conformance; Stellar asset/auth/ledger edge cases; automatic resource registration; natural-language search; provenance/ownership controls; second end-to-end example; replay/negative tests; load/failover testing; reviewable Stellar `upto` draft and implementation contribution | Upstream-suite logs; public testnet transaction hashes; rejection matrix; search/relevance and abuse report; replay/security test evidence; capacity/failover report; clean-room onboarding under one hour; upstream `upto` issue/PR or equivalent review record |
| **Mainnet** | Weeks 7–8 plus stabilization | **40% / USD 36,000** | Pavlo Bolhar | Controlled Stellar pubnet release; self-hostable package; production configuration; monitoring/SLOs; degraded modes and rollback; final conformance report; Audit Bank review/remediation workflow; role-based operator/seller/client/agent docs; maintenance handoff | Pubnet transaction evidence; tagged release and reproducible self-host deployment; SBOM/license report; monitoring evidence; deployment/rollback exercise; audit/remediation record; documentation PR/status; final evidence register complete |

## Workstream ownership

| Workstream | Primary owner | Supporting reviewers |
| --- | --- | --- |
| Facilitator backend and production operations | Pavlo Bolhar | Syed Hassan; Pavel Svizinskiy |
| Stellar/x402 correctness, conformance and `upto` | Syed Hassan | Pavlo Bolhar |
| Bazaar discovery/search, MCP, SDK and examples | Pavel Svizinskiy | Pavlo Bolhar; Syed Hassan where payment semantics are affected |
| Search quality, abuse resistance and relevance evidence | Pavel Svizinskiy | Dmitry Buhaienko; Pavlo Bolhar for reliability evidence |
| Product acceptance, release evidence and SCF reporting | Dmitry Buhaienko | Relevant workstream owner |
| Budget governance | Iryna Zavorotnia | Dmitry Buhaienko |

## Hard completion rules

- A milestone is not complete because code was merged; the acceptance evidence listed above must also exist.
- Testnet and pubnet settlement claims require public transaction hashes and the exact software revision used to produce them.
- Canonical x402 inputs must be accepted without AiFinPay-only required fields.
- Every rejection path exposed to clients must include a stable, non-null machine-readable reason.
- Discovery evidence must test seller, endpoint and price spoofing as well as ordinary happy paths.
- Security-sensitive releases require review by someone other than the author of the change.
- Mainnet starts with conservative limits, minimized signer balances, explicit rollback criteria and documented degraded behavior.
- Audit findings that materially affect fund safety block production completion until remediated or formally dispositioned through the applicable SCF/Audit Bank process.
- An upstream contribution is considered delivered when the team provides a reviewable specification, implementation, tests and responds to maintainers; merge/acceptance by an external project is not represented as team-controlled.
- Scope changes require a documented effect on budget, schedule, dependencies and acceptance evidence.

## Delivery capacity

The award budget funds **32 person-weeks** across the eight-week implementation window:

- Pavlo Bolhar — 8 person-weeks
- Syed Hassan — 10 person-weeks
- Pavel Svizinskiy — 9 person-weeks
- Dmitry Buhaienko — 5 person-weeks

This is four FTE on average across four named delivery owners. Finance and budget governance by Iryna Zavorotnia is internal support and is not charged as technical labor.

## Evidence chain

Each completed gate must update [`EVIDENCE_REGISTER.md`](EVIDENCE_REGISTER.md) with links to the exact release, CI run, test report, transaction hash, deployment record, security artifact or upstream contribution that proves completion.
