import React, { useState, useContext } from "react";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";
import { DataContext } from "../context/DataContext";

export const CartContent = (props: any) => {
  const { image, ingredient, name, price, quantity, _id } = props;
  const [count, setCount] = useState(quantity);
  const { setCartData } = useContext(DataContext);

  const data: any = localStorage.getItem("cartData") || "[]";
  const cartData = JSON.parse(data);

  function handleCount(e: any) {
    if (e.target.innerText === "-") {
      setCount(count - 1);
      cartData.find((item: any) => item._id === _id)!.quantity = count - 1;
      localStorage.setItem("cartData", JSON.stringify(cartData));
      setCartData(cartData);
      if (count === 1) {
        const filteredData = cartData.filter((item: any) => item._id !== _id);
        localStorage.setItem("cartData", JSON.stringify(filteredData));
        setCartData(filteredData);
      }
    } else {
      setCount(count + 1);
      cartData.find((item: any) => item._id === _id)!.quantity = count + 1;
      localStorage.setItem("cartData", JSON.stringify(cartData));
      setCartData(cartData);
    }
  }

  return (
    <div className="border-y-2 border-[#D6D8DB] w-full flex justify-between items-center p-5 h-[200px] gap-4">
      <div className="w-[50%] h-[100%] flex justify-center items-center rounded-[16px] overflow-hidden">
        <Image
          src={image}
          alt="img"
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="w-[50%] flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[18px] font-bold">{name}</p>
            <p className="text-[18px] font-bold text-[#18BA51]">{price}₮</p>
          </div>
          <ClearIcon className="cursor-pointer" />
        </div>

        <p className="text-[#767676] text-[16px]">{ingredient}</p>
        <div className="flex w-[151px] justify-between items-center ">
          <button
            className="flex items-center justify-center rounded-[10px] w-[40px] h-[40px] bg-[#18BA51] text-white text-[30px]"
            onClick={handleCount}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className="flex items-center justify-center rounded-[10px] w-[40px] h-[40px] bg-[#18BA51] text-white text-[25px]"
            onClick={handleCount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
