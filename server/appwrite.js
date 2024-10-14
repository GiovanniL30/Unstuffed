import config from "./config";

import {
  Client,
  Account,
  ID,
  Databases,
  Avatars,
  Query,
} from "react-native-appwrite";
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

export const createUser = async ({
  email,
  firstName,
  middleName,
  lastName,
  contactNumber,
  password,
}) => {
  try {
    const newAccount = await account.create(ID.unique, email, password);

    if (!newAccount) throw new Error();

    const avatarURL = avatars.getInitials(
      `${firstName} ${middleName} ${lastName}`
    );

    await signIn({ email: email, password: password });

    const newUser = await database.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        contactNumber: contactNumber,
        email: email,
        password: password,
        userId: newAccount.$id,
        avatar: avatarURL,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentAccount = async () => {
  try {
    const currentUser = await account.get();

    if (!currentUser) throw new Error("No current user");

    const user = await database.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("userId", currentUser.$id)]
    );

    if (!user || user.documents.length === 0) throw new Error("User not found");

    return user.documents[0];
  } catch (error) {
    throw new Error("Error here: " + error.message);
  }
};
