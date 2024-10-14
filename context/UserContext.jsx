import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentAccount } from "../server/appwrite";

const UserContext = createContext();
export const useUserContext = () => {
  return useContext(UserContext);
};

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const fetchedUser = await getCurrentAccount();

        if (fetchedUser) {
          setUser(fetchedUser);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
