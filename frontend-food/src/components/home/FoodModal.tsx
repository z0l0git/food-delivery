"use client";
import React, { useState } from "react";
import { FoodModalContent } from "./FoodModalContent";

export const FoodModal = (props: any) => {
  const { modal, handleModal } = props;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20"
      style={{ display: modal ? "flex" : "none" }}
    >
      <div
        onClick={handleModal}
        className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10"
      ></div>
      <FoodModalContent />
    </div>
  );
};
