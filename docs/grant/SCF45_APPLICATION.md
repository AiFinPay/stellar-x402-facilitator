# SCF #45 Build Award application draft

> Submission draft. Replace every `TO_BE_CONFIRMED` field with verified information before copying this document into the SCF portal. This repository describes future work; it does not claim that the Stellar implementation is already production-ready.

## Project

**Name:** Stellar x402 Facilitator  
**Organization:** AiFinPay  
**Track:** SCF #45 Build Award — x402 Facilitator with Bazaar Discovery RFP  
**Requested amount:** TO_BE_CONFIRMED after milestone costing  
**Expected delivery window:** eight weeks to controlled production, followed by stabilization and maintenance through the award period

## One-sentence summary

An Apache-2.0, production-oriented x402 facilitator for Stellar testnet and mainnet that uses the canonical `@x402/stellar` settlement library and adds Bazaar-compatible discovery, an MCP discovery interface, operational tooling, conformance evidence, and developer examples.

## Problem

Stellar has canonical x402 settlement support, but developers still need an operational facilitator that can be deployed or consumed as a service, exposes reliable discovery, works with AI agents through MCP, and provides verifiable testnet and mainnet conformance. Without that layer, every integrator must assemble settlement, discovery, infrastructure, monitoring, and security controls independently.

## Proposed solution

AiFinPay will build and release:

1. a hosted and self-hostable Stellar facilitator for testnet and mainnet;
2. canonical x402 endpoints, including `/supported`, `/verify`, and `/settle`;
3. Bazaar-compatible automatic resource registration, catalog APIs, and natural-language search;
4. an MCP discovery server with stable schemas and deterministic errors;
5. a Stellar `upto` scheme specification and implementation proposed upstream through the x402 TSC process;
6. SDK helpers, two end-to-end examples, a conformance suite, transaction evidence, operational runbooks, and a role-based Stellar developer guide;
7. security review preparation and remediation through the SCF Audit Bank process.

The implementation will build on the Apache-2.0 `@x402/stellar` package. It will not reimplement Stellar settlement or use the AGPL OpenZeppelin Relayer/plugin/SDK path.

## Why Stellar

The project is Stellar-specific at the settlement and operations layers. It will support Stellar testnet and pubnet network identifiers, SEP-41 assets, Stellar authorization entries, ledger-bound validity, trustline checks, Soroban resource constraints, fee sponsorship reporting, and channel-account/fee-bump strategies for throughput. The deliverable is intended to make Stellar payments easier to integrate into paid HTTP APIs and agent-driven commerce.

## Users

- API providers that want to charge for HTTP resources on Stellar;
- AI-agent and MCP developers that need machine-discoverable paid tools;
- wallet and payment SDK developers integrating canonical x402 clients;
- operators that want a self-hosted facilitator with production runbooks;
- ecosystem teams that need reusable conformance tests and examples.

## Existing foundation and build readiness

AiFinPay already has experience with x402-oriented payment infrastructure, SDK and MCP concepts, and multi-chain product architecture. The Stellar facilitator itself is new work. Before submission, the team has defined the proposed system boundaries, data flows, trust model, threat model, API contracts, testing strategy, and milestone acceptance gates in this repository.

Implementation readiness evidence:

- [Architecture](../ARCHITECTURE.md)
- [Security model](../SECURITY_MODEL.md)
- [Threat model](../THREAT_MODEL.md)
- [Conformance plan](../CONFORMANCE.md)
- [Milestones](MILESTONES.md)
- [RFP compliance matrix](RFP_COMPLIANCE_MATRIX.md)

## Differentiation and ecosystem value

The work joins four capabilities in one permissively licensed package: canonical Stellar settlement, operational facilitator infrastructure, Bazaar-compatible discovery, and MCP-native discovery. The repository will provide reusable tests and documentation rather than a closed hosted endpoint only. This lowers integration time for new Stellar x402 applications and creates public compatibility evidence that other implementations can reuse.

## Architecture summary

The edge API validates canonical x402 requests and delegates Stellar-specific verification and settlement to `@x402/stellar`. A network-isolated signer protects facilitator credentials. A discovery index derives public resource metadata from registered HTTP and MCP services. Bazaar APIs and the MCP server query the same normalized catalog. Durable state stores idempotency keys, settlement status, transaction hashes, and discovery metadata; secrets and raw authorization material are excluded from logs.

The first production version will avoid a custom on-chain registry. If registry requirements change, Soroban contract state and TTL restoration will be designed and costed separately. Batch settlement and authorization-capture are outside the RFP scope.

## Open source

The project will be released under Apache License 2.0 in a public GitHub repository. Dependencies will be reviewed under the published dependency policy. Public issues, security reporting, governance, maintenance, and contribution processes are included. Security vulnerabilities will follow coordinated disclosure rather than public issue reporting.

## Delivery plan

The work is divided into the SCF payment gates:

- **Award / 10%:** final technical plan, validated interfaces, implementation backlog, baseline CI, and public project setup;
- **MVP / 20%:** canonical facilitator endpoints, testnet settlement, initial Bazaar catalog, MCP discovery, SDK helpers, and first example;
- **Testnet / 30%:** complete testnet conformance, natural-language search, both examples, security controls, load/reliability testing, and documented transaction evidence;
- **Mainnet / 40%:** controlled mainnet release, published conformance report, production monitoring/runbooks, Audit Bank review and remediation, upstream `upto` contribution status, and role-based documentation contribution.

Detailed deliverables and acceptance evidence are in [MILESTONES.md](MILESTONES.md).

## Budget

The final request will cover only future Stellar development and eligible delivery work. It will not request reimbursement for prior AiFinPay work, general marketing/advertising, legal incorporation, token activity, or unsupported overhead. The amount will be derived from person-weeks and milestone outputs before submission; see [BUDGET.md](BUDGET.md).

## Success metrics

- unmodified canonical clients complete paid flows on Stellar testnet and pubnet;
- `/supported` correctly reports networks, schemes, assets, and `areFeesSponsored`;
- successful settlement responses contain canonical payload shape and public transaction hashes;
- rejected requests return non-null, actionable rejection reasons;
- upstream end-to-end suite passes on both networks;
- developers can move from documentation to a paid, discoverable endpoint in under one hour;
- production target is at least 99% measured monthly availability, with documented degraded modes;
- Bazaar and MCP discovery return equivalent normalized resource metadata;
- all milestone evidence is public except secrets and coordinated security findings.

## Risks and mitigations

- **Specification drift:** pin supported package versions, run upstream compatibility tests, and maintain a release compatibility matrix.
- **Mainnet signing risk:** isolate signing, minimize balances, apply allowlists and limits, and rehearse incident response.
- **Replay/front-running:** bind verification to network, resource, amount, payer/payee, nonce, and ledger validity; enforce idempotency.
- **Discovery spoofing:** verify ownership, sign or attest metadata where appropriate, moderate registrations, and expose provenance.
- **Throughput limits:** load-test channel-account and fee-bump strategies and publish capacity limits.
- **`upto` review uncertainty:** treat TSC acceptance as an external dependency; provide a draft, implementation, tests, and review evidence without claiming control over upstream approval.

## Team

The final portal submission will list verified contributors, roles, relevant experience, availability, and GitHub/LinkedIn profiles. At least two eligible team representatives will be designated for required SCF program sessions. No unverified names or credentials are included in this draft; see [TEAM.md](TEAM.md).

## Links and evidence

- Repository: <https://github.com/AiFinPay/stellar-x402-facilitator>
- Evidence register: [EVIDENCE_REGISTER.md](EVIDENCE_REGISTER.md)
- Official references: [../REFERENCES.md](../REFERENCES.md)

## Pre-submission confirmations

- [ ] Requested amount and person-week calculation approved internally.
- [ ] Contributor identities, eligibility, availability, and profiles verified.
- [ ] Repository visibility changed from internal/private to public.
- [ ] Every `TO_BE_CONFIRMED` marker removed.
- [ ] Portal answer is self-contained and does not depend on attachments alone.
- [ ] No past work, marketing, legal, token, or ineligible costs included.
- [ ] KYC/KYB path and two program representatives confirmed.
- [ ] All claims linked to public evidence or clearly labeled as planned work.
