# ADR 0003: Contract-Free `upto` Proposal for v1

- Status: Proposed; requires x402 TSC review before implementation
- Date: 2026-08-03

## Context

SEP-41 allowances alone cannot enforce recipient binding and single settlement as strongly as a dedicated Soroban contract. The SCF #45 RFP nevertheless states that v1 costing assumes no new Soroban contract and requires contract-free designs to disclose their weaker trust model.

## Decision

Propose a contract-free v1 using bounded Stellar authorizations, strict signed binding, short ledger expiration, atomic facilitator idempotency, immutable audit evidence, and smart-account spending policies. Do not represent these controls as equivalent to contract-enforced guarantees.

## Consequences

- residual facilitator trust is documented in the scheme and security review;
- x402 TSC feedback may change this decision before submission or implementation;
- a contract-backed version expands scope, cost, and audit requirements;
- `exact` remains the baseline while `upto` is standardized.
