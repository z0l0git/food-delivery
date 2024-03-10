"use client";
import React, { useState, ChangeEvent } from "react";
import { InputComponent } from "../signup/InputComponent";
import { Button } from "@mui/material";

export const PassAuth = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };
  console.log(email);

  const handleNext = () => {
    console.log("nexts");
  };
  return (
    <div className="flex flex-col gap-[60px] w-[384px]">
      <InputComponent
        label="Имэйл"
        type="email"
        placeholder="Имэйл хаягаа оруулна уу"
        handleChange={handleEmailChange}
      />
      <Button
        variant="contained"
        onClick={handleNext}
        disabled={email.length > 0 ? false : true}
        fullWidth
        size="large"
        className="text-slate-400 shadow-none h-[56px] "
        style={{
          backgroundColor: email.length > 0 ? "rgba(24,186,81)" : "",
          color: email.length > 0 ? "white" : "",
        }}
      >
        Үргэлжлүүлэх s
      </Button>
    </div>
  );
};
