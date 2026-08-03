# ADR 0002: No On-Chain Discovery Registry in v1

- Status: Accepted for proposal
- Date: 2026-08-03

## Context

The SCF RFP requests a Bazaar discovery layer but does not require an on-chain registry. A registry adds Soroban resource, TTL, rent, governance, and audit complexity.

## Decision

The v1 catalog is off-chain, self-hostable, provenance-preserving, and exportable. Seller ownership is verified through origin or signed challenges. No persistent discovery registry is deployed on Soroban.

## Consequences

- operators remain responsible for catalog availability and moderation;
- independent catalogs can coexist and exchange portable records;
- no TTL/rent contract strategy is required in v1;
- an on-chain registry requires a new ADR and separate audit scope.
