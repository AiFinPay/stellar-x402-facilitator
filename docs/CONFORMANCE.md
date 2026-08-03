# Conformance Plan

Conformance is a hard acceptance criterion, not a documentation claim.

## Required wire checks

- x402 protocol version 2;
- canonical HTTP signaling and payload schemas;
- canonical `/verify`, `/settle`, and `/supported` behavior;
- `stellar:testnet` and `stellar:pubnet` CAIP-2 identifiers;
- required Stellar `extra`, including `areFeesSponsored`;
- verbatim acceptance of the specified `payload: { transaction }` shape;
- deterministic invalid and settlement reasons;
- no required AiFinPay-specific extension.

## Network matrix

| Scheme  | Testnet verify                   | Testnet settle | Pubnet verify | Pubnet settle |
| ------- | -------------------------------- | -------------- | ------------- | ------------- |
| `exact` | Planned                          | Planned        | Planned       | Planned       |
| `upto`  | Planned after upstream agreement | Planned        | Planned       | Planned       |

## Evidence produced per release

- upstream x402 E2E suite output;
- canonical unmodified client version and command;
- facilitator commit and release digest;
- network, scheme, asset, payer, recipient, and transaction hash;
- negative fixture results for every rejection family;
- `/supported` snapshot;
- dependency lock and SBOM;
- known deviations, with no silent waivers.

No real private keys, raw authorization secrets, or protected response data may appear in evidence.

## Discovery conformance

The catalog and search APIs track current Bazaar conventions for endpoint shapes, filters, metadata, route templates, and catalog behavior. A scheduled compatibility job monitors upstream changes and runs fixtures against the release candidate.

See [tests/conformance](../tests/conformance/README.md).
