"use client";
import React, { ChangeEvent } from "react";
import { InputComponent } from "./InputComponent";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState } from "react";

export const SignupBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRePassword(value);
  };

  return (
    <div className="w-[448px] p-[32px] flex flex-col items-center gap-6 justify-center">
      <h1 className="text-2xl font-bold">Бүртгүүлэх</h1>
      <div className="w-full flex flex-col gap-6">
        <InputComponent
          label="Нэр"
          placeholder="Нэрээ оруулна уу"
          name="name"
          handleChange={handleChange}
        />
        <InputComponent
          label="И-мэйл"
          placeholder="И-мэйл хаягаа оруулна уу"
          name="email"
          handleChange={handleChange}
        />
        <InputComponent
          label="Утас"
          placeholder="Утасны дугаараа оруулна уу"
          type="number"
          name="phone"
          handleChange={handleChange}
        />
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
        <InputComponent
          label="Нууц үг давтах "
          placeholder="Нууц үгээ дахин оруулна уу"
          pass="true"
          name="repassword"
          type={showPassword2 ? "text" : "password"}
          showPassword={showPassword2}
          handleShowPassword={handleShowPassword2}
          handleChange={handlePasswordChange}
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2 mt-4 w-full">
          <Checkbox color="secondary" />
          <span className="text-sm">Үйлчилгээний нөхцөл зөвшөөрөх</span>
        </div>
        <Button
          variant="contained"
          fullWidth
          size="large"
          className="text-slate-400 shadow-none h-[56px] hover:bg-lime-500 hover:text-white"
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
