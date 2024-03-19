import React from "react";
import { motion } from "framer-motion";

export const Success = () => {
  return (
    <motion.div
      initial={{ top: -100 }}
      animate={{ top: 100, transition: { duration: 0.3, bounce: 0.3 } }}
      exit={{ top: -100 }}
      className="success-fade w-[384px] h-[56px] shadow-lg flex items-center justify-center rounded-lg gap-5 absolute top-[100px] bg-white"
      style={{}}
    >
      <span className="text-[#18BA51]">✔</span>
      Мэдээлэл амжилттай хадгалагдлаа
    </motion.div>
  );
};
