"use client";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { InputComponent } from "../signup/InputComponent";
export const PasswordReset = (props: any) => {
  const {
    showPassword,
    handleShowPassword,
    handleChange,
    showPassword2,
    handleShowPassword2,
    handlePasswordChange,
    error,
  } = props;
  return (
    <div>
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
      <p className="text-red-500">{error}</p>
    </div>
  );
};
