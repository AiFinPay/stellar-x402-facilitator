# Technical implementation team

This roster is the public delivery plan for AiFinPay's SCF #45 Build Award submission. It identifies the people accountable for implementation, verification, release, and grant reporting without publishing private contact details.

**Official project contact:** `contact@aifinpay.company`  
**Website:** <https://aifinpay.io>  
**GitHub:** <https://github.com/AiFinPay>  
**Public project repository:** <https://github.com/AiFinPay/stellar-x402-facilitator>

## Delivery owners

| Contributor | SCF #45 role | Primary responsibility | Planned allocation | Public profile / evidence |
| --- | --- | --- | ---: | --- |
| **Dmitry Buhaienko** | Founder & CEO; Product and SCF delivery owner | Product scope, RFP alignment, acceptance criteria, milestone sign-off, panel/reporting coordination, release evidence | **4 person-weeks** | [LinkedIn](https://www.linkedin.com/in/dmitry-bugaenko-9b9114378) · [AiFinPay](https://aifinpay.io) |
| **Pavlo Bolhar** | CTO; Protocol & Backend Lead | Facilitator service architecture, API implementation, signer boundary, idempotency/state, production deployment, observability and operational readiness | **8 person-weeks** | [LinkedIn](https://www.linkedin.com/in/pavlo-b-847376131) · [AiFinPay GitHub](https://github.com/AiFinPay) |
| **Syed Hassan** | Web3 Lead & Smart Contract Engineer | Stellar/x402 adapter, Stellar authorization and asset handling, conformance, transaction evidence, security-sensitive payment logic, `upto` technical contribution | **8 person-weeks** | [LinkedIn](https://www.linkedin.com/in/syedhassan125/) · [AiFinPay EVM contracts](https://github.com/AiFinPay/evm-contract) |
| **Pavel Svizinskiy** | Full-Stack Developer; MCP/SDK Integration Owner | Bazaar API surface, MCP interface, SDK helpers, paid-resource examples, developer quickstart and integration UX | **7 person-weeks** | [LinkedIn](https://www.linkedin.com/in/pavel-sv-684039354/) · [AiFinPay SDK](https://github.com/AiFinPay/sdk) |
| **Nick Staetskiy** | Data Analyst / Data Scientist; Discovery & Quality Owner | Bazaar search quality, natural-language retrieval evaluation, abuse/relevance tests, reliability evidence and data-driven acceptance reports | **5 person-weeks** | [LinkedIn](https://www.linkedin.com/in/nick-staetskiy-b25384277/) · [AiFinPay GitHub](https://github.com/AiFinPay) |
| **Iryna Zavorotnia** | Head of Finance; Budget Governance | Budget controls, cost evidence, milestone financial tracking, invoice/supporting-document readiness and internal spend review | **Internal support; not charged as technical labor** | [LinkedIn](https://www.linkedin.com/in/iryna-zavorotnia-881713340/) |

**Award-funded delivery capacity:** 32 person-weeks across the eight-week build window. The staffing plan averages four full-time-equivalent contributors while preserving additional team capacity for SCF sessions, reviews, incident response and normal company operations.

## Accountability by workstream

| Workstream | Accountable owner | Required reviewers |
| --- | --- | --- |
| Facilitator API and production service | Pavlo Bolhar | Syed Hassan; Pavel Svizinskiy |
| Stellar/x402 correctness and conformance | Syed Hassan | Pavlo Bolhar |
| Bazaar discovery, MCP and SDK | Pavel Svizinskiy | Nick Staetskiy; Pavlo Bolhar |
| Search quality, abuse resistance and evidence | Nick Staetskiy | Pavel Svizinskiy |
| Security-sensitive release gate | Pavlo Bolhar | Syed Hassan; external Audit Bank reviewer when engaged |
| Product acceptance and SCF evidence | Dmitry Buhaienko | Workstream owner for the relevant milestone |
| Budget and cost evidence | Iryna Zavorotnia | Dmitry Buhaienko |

## Working model

- Every milestone has one accountable owner and reproducible acceptance evidence.
- Security-sensitive payment changes require a second technical reviewer; authors do not self-approve those changes.
- Canonical x402/Stellar compatibility takes precedence over proprietary convenience.
- Public claims are limited to shipped or independently reproducible evidence; future items remain labeled as deliverables until complete.
- Private keys, authorization payloads, production secrets and confidential partner data never enter public issues, CI logs or grant evidence.
- KYC/KYB, contributor eligibility and any personal documents are handled through the official SCF process rather than this public repository.

## Existing engineering foundation

The Stellar facilitator is new SCF work, but the delivery team is not starting from a blank product stack. AiFinPay already maintains public agent-payment SDK/MCP code and multi-chain smart-contract infrastructure that provide reusable experience in HTTP 402 flows, agent-side payment tooling, non-custodial signing boundaries and on-chain settlement patterns:

- <https://github.com/AiFinPay/sdk>
- <https://github.com/AiFinPay/evm-contract>
- <https://aifinpay.io>

The SCF deliverable remains Stellar-specific and must pass the Stellar acceptance gates in this repository; prior AiFinPay work is evidence of execution capability, not a substitute for the grant deliverables.
