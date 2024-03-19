import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CartContent } from "./CartContent";

export const CartBox = (props: any) => {
  const { handleClose } = props;
  const [total, setTotal] = useState(0);
  const [foodsInCart, setFoodsInCart] = useState([]);

  const data: any = localStorage.getItem("cartData") || "[]";
  const cartData = JSON.parse(data);

  useEffect(() => {
    setFoodsInCart(cartData);

    const sum = cartData.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
    const totalPrice = sum.toFixed(2);
    setTotal(totalPrice);
  }, [data]);

  return (
    <div className="h-screen bg-white z-30 right-0 w-[586px] flex flex-col justify-between rounded-l-md">
      <div>
        <div className="flex justify-between w-full p-8">
          <ArrowBackIosIcon onClick={handleClose} className="cursor-pointer" />
          <h1 className="font-bold text-[20px]">Таны сагс</h1>
          <p></p>
        </div>
        <div className="px-6">
          {cartData.map((item: any) => (
            <CartContent
              key={item._id}
              image={item.image}
              ingredient={item.ingredient}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              _id={item._id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full p-8 items-center py-[32px]">
        <div className="w-full">
          <p className="text-[18px] text-[#5E6166]">Нийт төлөх дүн</p>
          <p className="font-bold text-[18px]">{total}₮</p>
        </div>
        <div className="w-full bg-[#18BA51] h-[48px] rounded-md text-white flex justify-center items-center cursor-pointer">
          <p>Захиалах</p>
        </div>
      </div>
    </div>
  );
};
