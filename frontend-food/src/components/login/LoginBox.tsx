"use client";
import { useEffect, useState } from "react";
import React from "react";
import { InputComponent } from "../signup/InputComponent";
import { Button } from "@mui/material";
import axios from "axios";

export const LoginBox = (props: any) => {
  const { indexNum } = props;
  const [buttonColor, setButtonColor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
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

  useEffect(() => {
    if (data.email && data.password) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [data]);

  const handleSubmit = async () => {
    try {
      const { data: response } = await axios.post(
        "https://food-delivery-vy9i.onrender.com/user/login",
        data
      );

      localStorage.setItem("token", response);
      window.location.href = "/";

      console.log(response);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div
      className="w-[448px] p-[32px] flex flex-col items-center gap-6 justify-center rounded-xl bg-white"
      style={{ zIndex: indexNum }}
    >
      <h1 className="text-2xl font-bold">Нэвтрэх</h1>
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
          <p
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/passwordReset";
            }}
          >
            Нууц үг сэргээх
          </p>
        </div>
        {error ? (
          <p className="text-red-500">И-мэйл эсвэл нууц үг буруу байна.</p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Button
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          size="large"
          className="text-slate-400 shadow-none h-[56px] hover:bg-[rgba(24,186,81,255)] hover:text-white"
          disabled={!buttonColor}
          style={{
            backgroundColor: buttonColor ? "rgba(24,186,81,255)" : "",
            color: buttonColor ? "white" : "gray",
          }}
        >
          Нэвтрэх
        </Button>
        <p>Эсвэл</p>
        <Button
          variant="outlined"
          fullWidth
          size="large"
          color="success"
          className=" text-black h-[56px] "
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
