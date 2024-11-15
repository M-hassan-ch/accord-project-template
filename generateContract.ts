// import * as fs from 'fs';
// import { Template, Clause } from '@accordproject/cicero-core';
// import { Engine } from '@accordproject/cicero-engine';
// import * as path from 'path';

const fs = require("fs");
const path = require("path");
const { Template, Clause } = require("@accordproject/cicero-core");
const { Engine } = require("@accordproject/cicero-engine");

import { v4 as uuidv4 } from 'uuid';

async function generateContract() {
    // Load the template directory
    const templatePath = './property-transfer-template';
    const template = await Template.fromDirectory(templatePath);

    // Generate the clauseId and buyer data dynamically
    const propertyTransferData = {
        "$class": "org.property.transfer.PropertyTransfer",
        "clauseId": uuidv4(),  // Unique clause ID for the contract instance
        "propertyId": "property-001",
        "owner": "John Doe",
        "price": 100000,
        "totalTokens": 1000,
        "buyers": [
            {
                // "$class": "org.property.transfer.Buyer",
                "buyerId": uuidv4(),  // Unique buyer ID
                "buyerSignature": "signature-example-001",
                "boughtTokens": 100
            },
            {
                // "$class": "org.property.transfer.Buyer",
                "buyerId": uuidv4(),  // Unique buyer ID
                "buyerSignature": "signature-example-002",
                "boughtTokens": 200
            }
        ]
    };

    try {
        // Create a new clause instance with the template
        const clause = new Clause(template);

        // Set the data for the clause instance
        clause.setData(propertyTransferData);

        // Draft the contract text based on the data
        const contractText = await clause.draft();

        // Write the generated contract text to a file
        fs.writeFileSync('./generated-contract.md', contractText);
        console.log('Contract generated successfully! Check generated-contract.md for the output.');
    } catch (error) {
        console.error('Error generating contract:', error);
    }
}

// Execute the function
generateContract().catch(console.error);
