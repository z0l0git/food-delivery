"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

type UserData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: string;
};

type DataContextType = {
  loading: boolean;
  isLoggedIn: boolean;
  loggedInUserData: UserData;
  foodData: FoodData;
  cartData: CartData;
  setCartData: (data: CartData) => void;
};

type CartData = CartDataType[];

type CartDataType = {
  _id: string;
  name: string;
  quantity: number;
  image: string;
  ingredient: string;
  price: number;
};

type FoodData = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [foodData, setFoodData] = useState({
    _id: "",
    name: "",
    image: "",
    ingredient: "",
    price: 0,
  });

  const [cartData, setCartData] = useState([
    {
      _id: "",
      name: "",
      quantity: 1,
      image: "",
      ingredient: "",
      price: 0,
    },
  ]);

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
    const getFoods = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/foods");
        setFoodData(data);
      } catch (error: any) {
        console.log("error getting foods");
      }
    };

    getFoods();

    if (accessToken) {
      const getloggedUser = async () => {
        try {
          setLoading(true);
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
          setLoading(false);
        } catch (error) {
          console.log("eror from get logged in user");
        }
      };

      getloggedUser();
    } else {
      setIsLoggedIn(false);
      console.log("No");
    }
  }, [accessToken]);

  return (
    <DataContext.Provider
      value={{
        loading,
        isLoggedIn,
        loggedInUserData,
        foodData,
        cartData,
        setCartData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
