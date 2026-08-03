# Dependency and License Policy

## Goal

The hosted and self-hosted service must remain redistributable under a permissive OSI-approved license. Every runtime, build, test, and documentation dependency is reviewed before adoption.

## Allowed by default

- Apache-2.0
- MIT
- BSD-2-Clause and BSD-3-Clause
- ISC
- CC0-1.0 for non-code assets

Other licenses require a documented review.

## Prohibited in the service dependency path

- AGPL and other strong network copyleft licenses
- dependencies that restrict commercial use, hosting, modification, or redistribution
- source-available licenses that are not OSI approved
- packages without a discoverable license

The OpenZeppelin Relayer, its x402 plugin, and its relayer SDK are not permitted as the implementation base because their AGPL network obligations conflict with this RFP's permissive self-hosting requirement.

## Release gate

Every release must include:

1. a software bill of materials;
2. automated license scanning;
3. `THIRD_PARTY_NOTICES` generated from the locked dependency graph;
4. a human review of unknown or changed licenses;
5. no unapproved exception.

Exceptions require a public ADR and maintainer approval before merge.
