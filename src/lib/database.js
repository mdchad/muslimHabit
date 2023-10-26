import {Account, Client} from "appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65389bd4e61d5ac674fa');

export const account = new Account(client);
