# Milestones and acceptance gates

The target is a controlled production release in eight weeks. Stabilization, upstream coordination, audit remediation, and maintenance continue through the award period. Dates begin after award activation and access dependencies are resolved.

| Gate        | Target window                | Share | Deliverables                                                                                                                                                                                   | Objective acceptance evidence                                                                                                                                 |
| ----------- | ---------------------------- | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Award setup | Week 0                       |   10% | Final architecture, backlog, public repo, CI baseline, package/version pins, test plan, network and signer threat review                                                                       | Public documents, green docs CI, reviewed backlog, dependency lock                                                                                            |
| MVP         | Weeks 1–3                    |   20% | Canonical facilitator adapter; `/supported`, `/verify`, `/settle`; testnet flow; basic Bazaar catalog; MCP discovery alpha; SDK helpers; first example                                         | Automated endpoint tests, successful canonical testnet payment, transaction hash, MCP schema tests, reproducible quickstart                                   |
| Testnet     | Weeks 4–6                    |   30% | Complete testnet conformance; auto-registration; natural-language search; provenance controls; both examples; negative/replay tests; load and failover tests; draft `upto` spec/implementation | Upstream-suite logs, public hashes, non-null rejection matrix, security/load reports, clean-room onboarding under one hour, TSC coordination link             |
| Mainnet     | Weeks 7–8 plus stabilization |   40% | Controlled pubnet release; self-host package; monitoring/SLOs; degraded modes; conformance report; Audit Bank review and remediation; role-based docs contribution; maintenance handoff        | Pubnet transaction evidence, release artifacts/SBOM, deployment/runbook exercise, measured service metrics, audit/remediation record, documentation PR/status |

## Completion rules

- A milestone is complete only when its evidence is reproducible and linked in the [evidence register](EVIDENCE_REGISTER.md).
- Transaction evidence must not expose secrets or personal data.
- An upstream proposal is accepted when the team submits a reviewable spec, implementation and tests and responds to maintainers. Acceptance or merge by an external body is not represented as team-controlled.
- Mainnet starts with conservative limits, allowlists where appropriate, minimized hot-wallet balances and explicit rollback criteria.
- Scope changes require a documented decision, impact on acceptance criteria and approval through the applicable SCF process.

## Eight-week delivery staffing assumption

The working model assumes four contributors with complementary responsibilities across protocol/backend engineering, discovery/MCP and SDK work, reliability/security/testing, and technical documentation/product delivery. Names, allocation and rates remain subject to internal confirmation and must match [TEAM.md](TEAM.md) and [BUDGET.md](BUDGET.md).
