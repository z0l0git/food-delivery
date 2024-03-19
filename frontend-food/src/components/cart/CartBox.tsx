import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CartContent } from "./CartContent";
export const CartBox = (props: any) => {
  const { handleClose } = props;
  return (
    <div className="h-screen bg-white z-30 right-0 w-[586px] flex flex-col justify-between rounded-l-md">
      <div>
        <div className="flex justify-between w-full p-8">
          <ArrowBackIosIcon onClick={handleClose} className="cursor-pointer" />
          <h1 className="font-bold text-[20px]">Таны сагс</h1>
          <p></p>
        </div>
        <div className="px-6">
          <CartContent />
        </div>
      </div>
      <div className="flex justify-between w-full p-8 items-center py-[32px]">
        <div className="w-full">
          <p className="text-[18px] text-[#5E6166]">Нийт төлөх дүн</p>
          <p className="font-bold text-[18px]">34,800₮</p>
        </div>
        <div className="w-full bg-[#18BA51] h-[48px] rounded-md text-white flex justify-center items-center cursor-pointer">
          <p>Захиалах</p>
        </div>
      </div>
    </div>
  );
};
