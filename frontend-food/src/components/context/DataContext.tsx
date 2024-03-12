"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const { push } = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [userInput, setUserInput] = useState({});
  const [recordInput, setRecordInput] = useState({});

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
          setUserData(data);
        } catch (error) {
          push("/login");
        }
      };

      getloggedUser();
    } else {
      push("/login");
    }
  }, [accessToken, push]);

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
