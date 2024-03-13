"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { log } from "console";

type UserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: string;
};

type DataContextType = {
  isLoggedIn: boolean;
  loggedInUserData: UserData;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: any) => {
  const { push } = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "",
  });

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (accessToken) {
      const getloggedUser = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:4000/users/refresh",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setIsLoggedIn(true);
          setLoggedInUserData(data);
        } catch (error) {
          console.log("eror from get logged in user");
        }
      };

      getloggedUser();
    } else {
      // push("/login");
      setIsLoggedIn(false);
      console.log("No");
    }
  }, [accessToken]);

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        loggedInUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
