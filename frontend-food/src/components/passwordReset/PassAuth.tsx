"use client";
import React, { useState, ChangeEvent } from "react";
import { InputComponent } from "../signup/InputComponent";
import { Button } from "@mui/material";
import { PasswordInput } from "./PasswordInput";
import axios from "axios";
import { PasswordReset } from "./PasswordReset";

export const PassAuth = () => {
  const [pageCount, setPageCount] = useState(0);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [data, setData] = useState({ password: "" });

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });

    console.log(data);
  };

  //Stores the second password entered by the user
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRePassword(value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(otp);

    setOtp(value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    console.log(email);
  };

  const handleNext = async () => {
    if (pageCount === 0) {
      try {
        const { data } = await axios.post(
          "https://food-delivery-vy9i.onrender.com/user/reset",
          {
            email: email,
          }
        );

        if (data === "user not found") {
          setError("User not Found");
          setPageCount(0);
          return;
        }
        setError("");
        setPageCount(pageCount + 1);
      } catch (e: any) {
        console.log(e.message);
      }
    } else if (pageCount === 1) {
      const { data } = await axios.post(
        "https://food-delivery-vy9i.onrender.com/user/checkotp",
        {
          email: email,
          otp: otp,
        }
      );
      if (data === "success") {
        setError("");
        setPageCount(pageCount + 1);
      } else {
        setError("Invalid Code");
      }
    } else if (pageCount === 2) {
      if (data.password !== rePassword) {
        setError("passwords don't match");
        setPageCount(2);
      } else {
        await axios.post(
          "https://food-delivery-vy9i.onrender.com/user/password",
          {
            email: email,
            password: data.password,
          }
        );
        window.location.href = "/login";
        console.log("matched");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-[60px]">
      <div>
        <h1 className="text-[28px] font-bold">
          {pageCount === 2 ? "Шинэ нууц үг зохиох " : "Нууц үг сэргээх"}
        </h1>
      </div>
      <div className="flex flex-col gap-[60px] w-[384px]">
        {pageCount === 0 && (
          <div>
            <InputComponent
              label="И-мэйл"
              placeholder="И-мэйл хаягаа оруулна уу"
              name="email"
              handleChange={handleEmailChange}
            />
            <p className="text-red-500">{error}</p>
          </div>
        )}
        {pageCount === 1 && (
          <PasswordInput
            handleShowPassword={handleShowPassword}
            showPassword={showPassword}
            handleCodeChange={handleCodeChange}
            email={email}
            error={error}
          />
        )}
        {pageCount === 2 && (
          <PasswordReset
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
            handleChange={handleChange}
            showPassword2={showPassword2}
            handleShowPassword2={handleShowPassword2}
            handlePasswordChange={handlePasswordChange}
            error={error}
          />
        )}

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
          Үргэлжлүүлэх
        </Button>
      </div>
    </div>
  );
};
