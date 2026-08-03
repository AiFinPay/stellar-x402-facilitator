# Governance

## Principles

The project is developed in the open, favors canonical x402 and Stellar standards, and avoids proprietary lock-in. Decisions prioritize security, wire compatibility, self-hostability, and ecosystem reuse.

## Decision process

- Small implementation and documentation changes use normal pull request review.
- Architecture, protocol, dependency-policy, security-boundary, or breaking changes require an ADR.
- Maintainers seek rough consensus and document dissent where tradeoffs remain.
- Upstream specifications and canonical compatibility take precedence over local convenience.
- Security emergencies may be fixed privately and documented after coordinated disclosure.

## Roles

- **Maintainers:** merge changes, manage releases, and enforce security and license gates.
- **Reviewers:** provide domain review without merge authority unless also maintainers.
- **Contributors:** propose and implement changes under the contribution policy.

The initial maintainer roster will be finalized before the SCF submission and listed in [MAINTAINERS.md](MAINTAINERS.md). No individual may approve their own security-sensitive change.

## Releases

Releases require passing tests, conformance evidence, dependency and license review, signed provenance where available, a changelog, rollback notes, and security approval for fund-touching changes.

## Long-term stewardship

AiFinPay intends to maintain the hosted service and public code after the grant. Upstreamable scheme and conformance work will be contributed to the x402 Foundation repositories so the ecosystem is not dependent on one operator.
