import React, { useState, useContext } from "react";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";
import { DataContext } from "../context/DataContext";

export const CartContent = () => {
  const [count, setCount] = useState(1);

  function handleCount(e: any) {
    if (e.target.innerText === "-") {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div className="border-y-2 border-[#D6D8DB] w-full flex justify-between items-center p-5 h-[200px] gap-4">
      <div className="w-[50%] h-[100%] flex justify-center items-center rounded-[16px] overflow-hidden">
        <Image
          src={"/dish.png"}
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
            <p className="text-[18px] font-bold">Main Pizza</p>
            <p className="text-[18px] font-bold text-[#18BA51]">1000</p>
          </div>
          <ClearIcon className="cursor-pointer" />
        </div>

        <p className="text-[#767676] text-[16px]">
          bread, bread, bread, bread, bread, bread, bread, bread, bread, bread
        </p>
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
