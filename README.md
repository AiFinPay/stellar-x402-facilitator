# AiFinPay Stellar x402 Facilitator

Open-source, self-hostable x402 infrastructure for Stellar: a conformant facilitator, Bazaar discovery, MCP agent tools, SDK helpers, and production operations for `stellar:testnet` and `stellar:pubnet`.

> **Status: SCF #45 panel review / implementation-ready design.** The repository contains the architecture, security model, named delivery team, USD 90,000 budget, milestones and acceptance evidence plan. The Stellar facilitator implementation and production release are grant deliverables and are not represented as already complete.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Security Policy](https://img.shields.io/badge/security-policy-green.svg)](SECURITY.md)
[![SCF #45](https://img.shields.io/badge/SCF-%2345-purple.svg)](docs/grant/SCF45_APPLICATION.md)

## SCF panel reviewers

Start with the concise **[Panel Review Brief](docs/grant/PANEL_REVIEW_BRIEF.md)**. It links the four areas most relevant to panel evaluation:

- [technical implementation and RFP coverage](docs/grant/SCF45_APPLICATION.md);
- [named implementation team and accountability](docs/grant/TEAM.md);
- [USD 90,000 budget and feasibility](docs/grant/BUDGET.md);
- [deliverables, owners and objective evidence gates](docs/grant/MILESTONES.md).

Supporting evidence is indexed in [EVIDENCE_REGISTER.md](docs/grant/EVIDENCE_REGISTER.md), and material execution risks have named owners in [RISK_REGISTER.md](docs/grant/RISK_REGISTER.md).

## Why this exists

Stellar already has conformant `exact` settlement through [`@x402/stellar`](https://www.npmjs.com/package/@x402/stellar) and reference tooling in [`stellar/x402-stellar`](https://github.com/stellar/x402-stellar). The SCF #45 RFP requires a broader operational layer:

- a production-grade hosted and self-hosted facilitator;
- a Stellar-native Bazaar catalog and natural-language search service;
- automatic discovery of HTTP and MCP resources;
- an MCP interface for agent runtimes;
- a Stellar design and upstream contribution for the x402 `upto` scheme;
- wire-level conformance, security review, documentation, monitoring and maintenance.

This project builds on canonical packages instead of reimplementing solved settlement logic.

## Planned product surface

| Component   | Responsibility                                                         | SCF completion evidence                                        |
| ----------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| Facilitator | `/supported`, `/verify`, `/settle` on testnet and pubnet               | API tests, canonical E2E runs, transaction hashes              |
| Bazaar      | `/discovery/resources`, `/discovery/search`, safe automatic cataloging | Integration, provenance/spoofing and relevance tests           |
| MCP server  | Resource search and paid-call workflow with deterministic errors       | MCP schema/inspector tests and reference integration           |
| `exact`     | Canonical Stellar exact scheme via `@x402/stellar`                     | Upstream-compatible conformance results                        |
| `upto`      | Stellar network spec and implementation proposed upstream              | Reviewable spec, implementation, tests and upstream discussion |
| SDK helpers | Seller metadata and buyer/agent integration helpers                    | Runnable quickstart and automated tests                        |
| Examples    | Paid discoverable API and MCP-driven paying agent                      | Two end-to-end examples                                        |
| Operations  | Monitoring, SLOs, degraded modes, rollback and maintenance             | Load/failover report, runbook exercise, release evidence       |

## Architecture

```mermaid
flowchart TD
    A["AI agent or client"] --> M["MCP and SDK helpers"]
    M --> B["Bazaar catalog and search"]
    M --> R["x402 resource server"]
    R --> F["Facilitator API"]
    F --> X["@x402/stellar schemes"]
    F --> Q["Signer / sequencing boundary"]
    X --> S["Stellar testnet or pubnet"]
    Q --> S
    B --> D["Catalog database and index"]
    F --> O["Logs, metrics and traces"]
    B --> O
```

The facilitator validates canonical x402 v2 payloads, applies operational/idempotency controls, delegates Stellar-specific verification and settlement to canonical packages, and returns deterministic machine-readable results. Bazaar indexes verified public resource metadata without becoming the authority over seller pricing. MCP and SDK helpers expose discovery/payment workflows to agent runtimes without storing agent private keys.

See [Architecture](docs/ARCHITECTURE.md), [Security Model](docs/SECURITY_MODEL.md), [Threat Model](docs/THREAT_MODEL.md), and [Plain-English System Overview](docs/SYSTEM_OVERVIEW.md).

## Hard acceptance gates

The project is not considered production-ready until all of the following are independently verifiable:

- an unmodified canonical x402 client completes an end-to-end payment on `stellar:testnet` and `stellar:pubnet`;
- `/supported` emits required Stellar metadata, including accurate `areFeesSponsored` behavior;
- canonical inputs are accepted without proprietary required fields;
- settlement evidence includes public transaction hashes and the exact software revision;
- every rejection contains a non-null machine-readable reason;
- upstream-compatible E2E/conformance tests pass on both networks where applicable;
- discovery tests seller, endpoint and price spoofing and exposes provenance;
- a security review is completed and fund-safety findings are remediated or formally dispositioned;
- two end-to-end reference integrations and role-based developer documentation are available;
- production runbooks, monitoring, degraded-mode behavior and maintenance ownership are documented.

## Repository map

```text
packages/              Facilitator, Bazaar, MCP, and SDK implementation home
examples/              End-to-end reference integrations
specs/                 Stellar `upto` network specification work
tests/conformance/     Wire, network, discovery, and MCP acceptance suite
docs/                  Architecture, security, operations, and developer docs
docs/grant/            SCF #45 panel-review, budget, team, milestone and evidence materials
.github/               CI, issue forms, and pull request controls
```

## Existing AiFinPay execution foundation

The Stellar facilitator is new SCF work. Relevant prior engineering is public and is not billed as a grant deliverable:

- <https://github.com/AiFinPay/sdk> — agent payment SDK and MCP tooling;
- <https://github.com/AiFinPay/evm-contract> — public smart-contract infrastructure;
- <https://aifinpay.io> — current product/protocol surface.

## Development baseline

The implementation baseline is:

- Node.js 22+
- TypeScript
- `@x402/core` and `@x402/stellar` from a pinned stable x402 v2 release
- `@stellar/stellar-sdk`
- PostgreSQL with a documented retrieval/index strategy for the catalog
- OpenTelemetry-compatible logs, metrics and traces

No AGPL or strong-copyleft dependency may enter the runtime/network-service dependency path. See [Dependency Policy](DEPENDENCY_POLICY.md).

## Security

This software will handle payment authorizations. Do not report vulnerabilities in public issues. Follow [SECURITY.md](SECURITY.md). Never commit private keys, seed phrases, signer secrets, API keys, reusable authorization payloads or production credentials.

## Contributing

Contributions are welcome under the [Apache License 2.0](LICENSE). Read [CONTRIBUTING.md](CONTRIBUTING.md), the [Code of Conduct](CODE_OF_CONDUCT.md), [Governance](GOVERNANCE.md), and [Maintainers](MAINTAINERS.md) before opening a pull request.

## License and trademarks

Copyright 2026 AiFinPay. Licensed under Apache-2.0. See [LICENSE](LICENSE), [NOTICE](NOTICE), and [TRADEMARKS.md](TRADEMARKS.md). Third-party marks belong to their respective owners. This project is not represented as endorsed by SDF or the x402 Foundation.
