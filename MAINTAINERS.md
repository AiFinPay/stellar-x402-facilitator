# Maintainers and review ownership

This repository is maintained by AiFinPay for the SCF #45 Stellar x402 Facilitator with Bazaar Discovery delivery.

**Security and grant contact:** `contact@aifinpay.company`

## Maintainer roster

| Maintainer | Role | Repository authority / responsibility | Public profile |
| --- | --- | --- | --- |
| **Pavlo Bolhar** | CTO; Protocol & Backend Lead | Facilitator architecture, backend, deployment, observability, production release gate | <https://www.linkedin.com/in/pavlo-b-847376131> |
| **Syed Hassan** | Web3 Lead & Smart Contract Engineer | Stellar/x402 correctness, network integration, conformance, payment security review, upstream `upto` work | <https://www.linkedin.com/in/syedhassan125/> |
| **Pavel Svizinskiy** | Full-Stack Developer; MCP/SDK & Discovery Owner | Bazaar APIs, natural-language discovery, MCP interface, SDK helpers, examples, abuse/relevance testing and developer integration surfaces | <https://www.linkedin.com/in/pavel-sv-684039354/> |
| **Dmitry Buhaienko** | Founder & CEO; Product/SCF Owner | Scope, milestone acceptance, public evidence completeness, SCF reporting and release coordination | <https://www.linkedin.com/in/dmitry-bugaenko-9b9114378> |

**Budget governance:** Iryna Zavorotnia, Head of Finance — <https://www.linkedin.com/in/iryna-zavorotnia-881713340/>

## Review rules

- Security-sensitive payment, signing, authorization, asset-handling or settlement changes require at least one technical reviewer other than the author.
- Protocol/wire-format changes require conformance fixtures and an ADR when they affect compatibility or trust boundaries.
- Canonical x402 and Stellar compatibility has precedence over AiFinPay-specific convenience.
- Dependency changes must comply with `DEPENDENCY_POLICY.md` before merge.
- Fund-touching releases require passing tests, release evidence, rollback notes and explicit review of signer/secrets handling.
- No maintainer may approve their own security-sensitive change as the sole reviewer.
- Vulnerabilities are reported privately under `SECURITY.md`, not through public issues.

## Stewardship

AiFinPay intends to maintain the hosted and self-hostable Stellar facilitator after the award. Reusable conformance work and the Stellar `upto` contribution will be proposed upstream where appropriate so ecosystem compatibility does not depend on a proprietary AiFinPay fork.
