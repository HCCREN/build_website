// Importing modules
import * as mod from "https://deno.land/std@0.213.0/dotenv/mod.ts";
import { Document, VectorStoreIndex, SimpleDirectoryReader } from "npm:llamaindex@0.1.8";

// Define an async function to handle loading and querying operations
async function loadDataAndQuery() {
    const keys = await mod.load({ export: true }); // Read API key from .env
    const documents = await new SimpleDirectoryReader().loadData({ directoryPath: "./data" });
    const index = await VectorStoreIndex.fromDocuments(documents);
    const queryEngine = index.asQueryEngine();
    const response = await queryEngine.query({ query: "What did the author do in college?" });

    // Update the webpage with the response
    document.getElementById('responseOutput').textContent = JSON.stringify(response, null, 2);
}

