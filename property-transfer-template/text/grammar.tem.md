This is a property transfer agreement for property ID: {{propertyId}}.
The property is being transferred by {{owner}} at a price of {{price}}.
Total tokens available: {{totalTokens}}.

Buyers and their shares:
{{#join buyers separator="  |  "}} BuyerId: {{buyerId}} (Buyer Signature:{{buyerSignature}} Bought Tokens:{{boughtTokens}}){{/join}}.

<!-- order is {{% (foreach b in buyers return (asdas: b.boughtTokens)) %}}. -->
