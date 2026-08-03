# Budget framework

The final request amount is intentionally not fixed in this draft. It will be calculated from verified future person-weeks and eligible direct costs, then checked against milestone scope. An internal working range of USD 80,000–90,000 is not a submission commitment.

## Eligibility principles

Include only future work required to deliver the Stellar RFP:

- protocol and backend engineering;
- Bazaar discovery, MCP and SDK integration;
- testing, reliability, monitoring and mainnet deployment;
- developer documentation and eligible technical delivery work;
- directly attributable infrastructure used for development and validation, if permitted and evidenced.

Exclude:

- prior AiFinPay development;
- general marketing, advertising, user acquisition or promotion;
- legal/entity setup;
- token issuance or liquidity;
- unrelated product work;
- contingency padding without a defined deliverable;
- Audit Bank costs that SCF covers through its separate mechanism.

## Costing worksheet

Complete this table before submission. Use loaded rates only where the composition is documented.

| Workstream                          | Owner           |    Person-weeks | Rate basis                 |              Amount | Deliverable mapping   |
| ----------------------------------- | --------------- | --------------: | -------------------------- | ------------------: | --------------------- |
| Facilitator and Stellar adapter     | TO_BE_CONFIRMED | TO_BE_CONFIRMED | TO_BE_CONFIRMED            |     TO_BE_CONFIRMED | MVP, Testnet, Mainnet |
| Bazaar discovery and search         | TO_BE_CONFIRMED | TO_BE_CONFIRMED | TO_BE_CONFIRMED            |     TO_BE_CONFIRMED | MVP, Testnet          |
| MCP, SDK and examples               | TO_BE_CONFIRMED | TO_BE_CONFIRMED | TO_BE_CONFIRMED            |     TO_BE_CONFIRMED | MVP, Testnet          |
| Security, QA and reliability        | TO_BE_CONFIRMED | TO_BE_CONFIRMED | TO_BE_CONFIRMED            |     TO_BE_CONFIRMED | Testnet, Mainnet      |
| Technical documentation and release | TO_BE_CONFIRMED | TO_BE_CONFIRMED | TO_BE_CONFIRMED            |     TO_BE_CONFIRMED | All gates             |
| Eligible direct infrastructure      | TO_BE_CONFIRMED |             n/a | documented invoices/quotes |     TO_BE_CONFIRMED | Testnet, Mainnet      |
| **Total**                           |                 |                 |                            | **TO_BE_CONFIRMED** |                       |

## Payment schedule calculator

After choosing the request amount `T`, the expected award gates are:

| Gate    | Formula | At USD 80,000 | At USD 90,000 |
| ------- | ------: | ------------: | ------------: |
| Award   | 10% × T |     USD 8,000 |     USD 9,000 |
| MVP     | 20% × T |    USD 16,000 |    USD 18,000 |
| Testnet | 30% × T |    USD 24,000 |    USD 27,000 |
| Mainnet | 40% × T |    USD 32,000 |    USD 36,000 |

Payments are denominated according to the official SCF award terms, including any applicable XLM conversion mechanics. Confirm the current terms in the portal before submission.

## Budget review questions

- Does every line buy a public, testable RFP deliverable?
- Is every rate supported by named allocation and realistic availability?
- Can the team execute the person-weeks inside eight weeks without double-booking?
- Are security review costs correctly separated from SCF Audit Bank support?
- Is any “marketing” activity actually technical developer documentation? If not, remove it.
- Would a smaller request still deliver every hard acceptance gate? If yes, reduce the amount or explain the risk reserve precisely.
