import config from "./config";

import { Client, Account, ID, Databases, Avatars } from "react-native-appwrite";
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(config.databaseId);

export const createUser = async ({
  email,
  firstName,
  middleName,
  lastName,
  contanctNumber,
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
        contanctNumber,
        contanctNumber,
        email: email,
        password: password,
        userId: newAccount.$id,
        avatar: avatarURL,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
