# System Overview

## What a user experiences

An AI agent asks the Bazaar for a service, selects a result, calls the resource, receives an x402 payment requirement, signs a Stellar authorization, and retries. The resource server asks the facilitator to verify and settle the payment before returning the protected response.

The agent does not need a prearranged API key or a custom integration with every seller. Sellers publish machine-readable metadata and retain control of pricing and destination addresses.

## What each service does

- **Facilitator:** validates and settles canonical x402 payment authorizations on Stellar.
- **Bazaar:** catalogs discoverable resources, filters structured metadata, and ranks natural-language searches.
- **MCP server:** gives compatible agent runtimes structured tools for search and paid calls.
- **SDK helpers:** simplify seller metadata and buyer discovery/payment flows without changing the protocol.
- **Operations layer:** manages keys, parallel transaction submission, observability, rate limits, and incident response.

## What the system does not do

- hold customer balances or private keys;
- replace Stellar, x402, or canonical SDKs with a proprietary protocol;
- require an AiFinPay token;
- hide seller prices or change payment requirements;
- store protected API responses or agent prompts by default;
- promise production availability before release gates are met.
