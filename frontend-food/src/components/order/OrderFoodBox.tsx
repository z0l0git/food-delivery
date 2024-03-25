"use client";
import React, { useContext, useEffect } from "react";
import { OrderFoodContent } from "./OrderFoodContent";
import { DataContext } from "../context/DataContext";

export const OrderFoodBox = () => {
  // const { setOrderData } = useContext(DataContext);
  const data: string | null =
    (typeof window !== "undefined" && localStorage.getItem("cartData")) || "[]";
  const cartData = JSON.parse(data);

  return (
    <>
      {cartData.map((item: any) => (
        <OrderFoodContent
          key={item._id}
          image={item.image}
          ingredient={item.ingredient}
          ammount={item.quantity}
          name={item.name}
          price={item.price}
          _id={item._id}
        />
      ))}
    </>
  );
};
