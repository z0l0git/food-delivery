import React from "react";
import { LoginBox } from "./LoginBox";

export const LoginModal = (props: any) => {
  const { setLoginModal, handleClose } = props;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20"
      style={{ display: setLoginModal ? "flex" : "none" }}
    >
      <div
        onClick={handleClose}
        className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10"
      ></div>
      <LoginBox indexNum={20} />
    </div>
  );
};
