"use client";
import { useState } from "react";
import React from "react";
import { InputComponent } from "../signup/InputComponent";
import { Button } from "@mui/material";

export const LoginBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <div className="w-[448px] p-[32px] flex flex-col items-center gap-6 justify-center rounded-xl">
      <h1 className="text-2xl font-bold">Бүртгүүлэх</h1>
      <div className="w-full flex flex-col gap-6">
        <InputComponent
          label="И-мэйл"
          placeholder="И-мэйл хаягаа оруулна уу"
          name="email"
          handleChange={handleChange}
        />
        <div className="flex flex-col items-end">
          <InputComponent
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
            pass="true"
            name="password"
            type={showPassword ? "text" : "password"}
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
            handleChange={handleChange}
          />
          <p>Нууц үг сэргээх</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Button
          variant="contained"
          fullWidth
          size="large"
          className="text-slate-400 shadow-none h-[56px] hover:bg-lime-500 hover:text-white"
        >
          Нэвтрэх
        </Button>
        <p>Эсвэл</p>
        <Button
          variant="contained"
          fullWidth
          size="large"
          className=" text-slate-400 h-[56px] "
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
