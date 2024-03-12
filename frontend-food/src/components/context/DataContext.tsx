"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const { push } = useRouter();

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
        } catch (error) {
          console.log("eror from get logged in user");
        }
      };

      getloggedUser();
    } else {
      // push("/login");
      console.log("No");
    }
  }, [accessToken, push]);

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
