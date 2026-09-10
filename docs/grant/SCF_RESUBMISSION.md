# SCF resubmission draft

## Project

**Name:** AiFinPay Stellar x402 Facilitator & Bazaar Discovery  
**Organization:** AiFinPay  
**Requested amount:** **USD 90,000**  
**License:** Apache-2.0

## One-sentence summary

AiFinPay is building a self-hostable Stellar x402 facilitator and Bazaar discovery layer with a working canonical testnet settlement path, measurable search-quality benchmarks, MCP integration, provenance controls and production evidence gates.

## What changed after SCF #45 feedback

The prior submission was rejected before panel advancement for five concrete reasons. This revision addresses each one directly.

### 1. Stellar implementation evidence

The previous repository was mostly an implementation-ready design and did not prove Stellar delivery.

The repository now contains:

- a runnable facilitator built on `@x402/stellar@2.25.0`;
- canonical `/supported`, `/verify` and `/settle` behavior;
- a live end-to-end Stellar testnet settlement test;
- ephemeral test accounts funded through Friendbot;
- Horizon verification of the resulting settlement;
- a machine-readable evidence artifact with transaction hash, ledger, network and exact code revision context.

No production pubnet completion is claimed yet.

### 2. Working prototype before grant

The baseline is no longer documentation-only.

Pre-award implementation now includes:

- Stellar facilitator service;
- canonical exact-scheme integration;
- deterministic Bazaar search;
- unit tests;
- held-out discovery benchmark;
- live testnet settlement CI.

This pre-award work is not included as future reimbursable grant work.

### 3. Bazaar is the largest budget share

The revised USD 90,000 budget allocates **USD 34,000 / 37.8%** to Bazaar discovery, ranking, benchmark/evaluation, provenance, registration, MCP and SDK integration.

This is the largest single workstream.

### 4. Search quality is measurable

The discovery layer now has a committed benchmark and explicit pass/fail metrics:

- **Recall@5 floor: 0.90**
- **NDCG@5 floor: 0.85**

CI fails when either metric falls below the floor.

The next grant stage expands the held-out set, adds adversarial/spoofing cases and keeps the metric contract versioned.

### 5. Milestones are objectively gated

Completion is not based on a report written by the implementation team.

Examples of acceptable evidence:

- public GitHub CI results;
- public Stellar transaction hashes;
- committed benchmark fixtures with numeric thresholds;
- tagged release artifacts;
- CodeQL/static analysis;
- independent clean-room onboarding records;
- external security review/remediation records;
- reproducible load/failover scenarios with fixed thresholds.

## Technical architecture

The payment path intentionally does not reimplement Stellar settlement logic.

```text
AI client / resource server
        |
        v
AiFinPay facilitator API
        |
        v
@x402/core + @x402/stellar
        |
        v
Stellar testnet / pubnet
```

The facilitator is responsible for operational boundaries, deployment, observability and evidence. Canonical Stellar authorization, simulation and settlement semantics remain in the upstream x402 Stellar implementation.

The discovery path is separate:

```text
Paid HTTP / MCP resources
        |
        v
Normalized Bazaar catalog
        |
        +--> ownership / provenance
        +--> deterministic ranking
        +--> benchmark / evaluation
        +--> MCP + SDK exposure
```

## Current implementation baseline

| Component | Current state |
| --- | --- |
| Stellar exact facilitator | Implemented |
| Live testnet settlement test | Implemented |
| Testnet evidence artifact | Automated in CI |
| Bazaar lexical ranking | Implemented |
| Held-out search benchmark | Implemented |
| Recall@5 / NDCG@5 gates | Automated in CI |
| Static security analysis | Automated with CodeQL |
| Persistent catalog/provenance | Grant deliverable |
| MCP server | Grant deliverable |
| Load/failover production validation | Grant deliverable |
| Pubnet controlled release | Grant deliverable |
| External security review | Grant deliverable |

## Grant-funded scope

The requested award funds work after the current baseline:

1. production Bazaar catalog storage, registration and ownership/provenance verification;
2. larger versioned search benchmark, adversarial cases and ranking improvements;
3. MCP discovery/payment interface and SDK integration;
4. facilitator production hardening, deployment and operational controls;
5. conformance, replay, negative-case and abuse testing;
6. reproducible load/failover tests with numeric thresholds;
7. independent onboarding and security evidence;
8. controlled Stellar pubnet release and final self-hostable package.

## Budget

| Workstream | Amount | Share |
| --- | ---: | ---: |
| Bazaar discovery, search/evaluation, provenance, MCP and SDK | **USD 34,000** | **37.8%** |
| Stellar facilitator hardening and production deployment | USD 21,000 | 23.3% |
| Conformance, negative/security and reliability engineering | USD 14,000 | 15.6% |
| Documentation, onboarding, release and evidence | USD 11,000 | 12.2% |
| Direct infrastructure | USD 10,000 | 11.1% |
| **Total** | **USD 90,000** | **100%** |

## Milestone evidence

### Discovery MVP

Required evidence:

- committed benchmark version;
- Recall@5 >= 0.90;
- NDCG@5 >= 0.85;
- deterministic search tests;
- network/scheme filtering;
- ownership/provenance test plan.

### Integrated testnet release

Required evidence:

- canonical x402 testnet settlement transaction;
- exact source revision;
- deterministic rejection cases;
- Bazaar registration/provenance integration tests;
- MCP alpha and HTTP/MCP resource identity equivalence.

### Production candidate

Required evidence:

- negative/replay suite;
- abuse/spoofing suite;
- reproducible load/failover thresholds;
- static security analysis;
- independent clean-room onboarding result.

### Pubnet release

Required evidence:

- public Stellar pubnet transaction;
- tagged source revision;
- self-hostable artifact;
- deployment and rollback evidence;
- external security findings disposition;
- final evidence register.

## Team

- **Dmitry Buhaienko** - Founder & CEO; product scope, acceptance and SCF evidence.
- **Pavlo Bolhar** - CTO; facilitator, Stellar/x402 correctness and production operations.
- **Pavel Svizinskiy** - Full-Stack Developer & Co-Founder; Bazaar, MCP, SDK and discovery quality.
- **Iryna Zavorotnia** - budget governance and cost evidence.

Security-sensitive payment changes require technical review by someone other than the author.

## Reviewer entry points

- `README.md`
- `docs/grant/RFP_COMPLIANCE_MATRIX.md`
- `docs/grant/EVIDENCE_REGISTER.md`
- `docs/grant/BUDGET.md`
- `docs/grant/MILESTONES.md`
- `tests/e2e/stellar-testnet.ts`
- `packages/bazaar/src/evaluate.ts`

Before submission to a future SCF round, only the round number, exact RFP wording and any changed budget constraints should be updated. The implementation/evidence baseline should remain independently reproducible.
