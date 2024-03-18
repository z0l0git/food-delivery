import React from "react";
import { CartBox } from "./CartBox";
import { AnimatePresence, motion } from "framer-motion";

export const CartModal = (props: any) => {
  const { setCartModal, handleClose } = props;
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20"
      style={{ display: setCartModal ? "flex" : "none" }}
    >
      <div
        onClick={handleClose}
        className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10"
      ></div>
      <AnimatePresence>
        <motion.div
          initial={{ right: -200 }}
          animate={{ right: 0, transition: { duration: 0.3, bounce: 0.3 } }}
          exit={{ right: -100 }}
          className="absolute top-0 right-0 z-30"
        >
          <CartBox handleClose={handleClose} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
