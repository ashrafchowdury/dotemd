import { Client, Account } from "appwrite";

// Init SDK
const client = new Client();
client
  .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_URL}`)
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`);

export const account = new Account(client);
