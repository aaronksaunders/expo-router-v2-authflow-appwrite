import {
  Account,
  Client,
  ID,
} from "appwrite";
// import { useUserStore } from "./userStore";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID as string);

export const appwrite = {
  client,
  account: new Account(client),
  ID
};
