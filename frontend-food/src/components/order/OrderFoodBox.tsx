"use client";
import React, { useEffect } from "react";
import { OrderFoodContent } from "./OrderFoodContent";

export const OrderFoodBox = () => {
  const data: any = localStorage.getItem("cartData") || "[]";
  const cartData = JSON.parse(data);

  useEffect(() => {}, [cartData]);

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
