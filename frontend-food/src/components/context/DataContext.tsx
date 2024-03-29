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
  category: CategoryData;
  orderData: OrderData;
  setOrderData: (data: OrderData) => void;
};

type OrderData = {
  userId: string;
  foods: string[];
  address: string;
  notes: string;
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

type CategoryData = Category[];

type Category = {
  id: string;
  name: string;
  foodId: string;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<OrderData>({
    userId: "",
    foods: [],
    address: "",
    notes: "",
  });

  const [foodData, setFoodData] = useState({
    _id: "",
    name: "",
    image: "",
    ingredient: "",
    price: 0,
  });

  const [cartData, setCartData] = useState<CartDataType[]>([]);

  const [loggedInUserData, setLoggedInUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "",
  });
  const [category, setCategory] = useState<Category[]>([]);

  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    const getFoods = async () => {
      try {
        const { data } = await axios.get(
          "https://food-delivery-vy9i.onrender.com/foods"
        );
        setFoodData(data);
      } catch (error: any) {
        console.log("error getting foods");
      }
    };

    getFoods();
    const getCategory = async () => {
      try {
        const { data } = await axios.get(
          "https://food-delivery-vy9i.onrender.com/category/getAll"
        );

        setCategory(data);
      } catch (error: any) {
        console.log("error getting category");
      }
    };
    getCategory();

    if (accessToken) {
      const getloggedUser = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(
            "https://food-delivery-vy9i.onrender.com/users/refresh",
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
        category,
        orderData,
        setOrderData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
