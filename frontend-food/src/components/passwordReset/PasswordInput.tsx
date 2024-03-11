"use client";

import React, { useState } from "react";
import { InputComponent } from "../signup/InputComponent";

export const PasswordInput = (props: any) => {
  const { showPassword, handleShowPassword, handleCodeChange, email, error } =
    props;
  return (
    <div>
      <h2 className="text-[#695C08] mb-5">
        Таны <span className="text-[#18BA51]">{email}</span> хаяг руу сэргээх
        код илгээх болно.
      </h2>
      <InputComponent
        label="Нууц үг"
        placeholder="Нууц үгээ оруулна уу"
        pass="true"
        name="password"
        type={showPassword ? "text" : "password"}
        showPassword={showPassword}
        handleShowPassword={handleShowPassword}
        handleChange={handleCodeChange}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};
