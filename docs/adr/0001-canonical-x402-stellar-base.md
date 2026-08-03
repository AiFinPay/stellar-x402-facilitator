# ADR 0001: Build on Canonical `@x402/stellar`

- Status: Accepted for proposal
- Date: 2026-08-03

## Context

Canonical Stellar `exact` settlement already exists. Reimplementing it would increase drift and security risk while failing the SCF #45 RFP's stated direction.

## Decision

Use the latest stable Apache-2.0 `@x402/stellar` and `@x402/core` as the protocol base. Add production orchestration, Bazaar discovery, MCP tools, SDK helpers, conformance, and the coordinated Stellar `upto` contribution around it.

## Consequences

- upstream compatibility is a release gate;
- local changes to canonical behavior are contributed upstream or isolated as optional extensions;
- version changes require conformance evidence;
- the project does not claim ownership of the underlying x402 or Stellar specifications.
