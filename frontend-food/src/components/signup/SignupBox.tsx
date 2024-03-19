"use client";
import React, { ChangeEvent, use } from "react";
import { InputComponent } from "./InputComponent";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";

//Signup form

export const SignupBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [buttonColor, setButtonColor] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  //Checks if the form is filled
  useEffect(() => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.phone ||
      !userData.password ||
      !rePassword ||
      !checkBox
    ) {
      setButtonColor(false);
      return;
    }
    setButtonColor(true);
  }, [userData, rePassword, checkBox]);

  //Stores the data entered by the user
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  //Stores the second password entered by the user
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRePassword(value);
  };

  //Submits the form data to the server
  const handleSubmit = async () => {
    if (userData.password !== rePassword) {
      setError(true);
      setErrorPassword("Passwords do not match");
    } else {
      setError(false);
      setErrorPassword("");
      try {
        const { data } = await axios.post(
          "http://localhost:4000/user/signup",
          userData
        );
        if (
          data ===
          `E11000 duplicate key error collection: test.users index: email_1 dup key: { email: "${userData.email}" }`
        ) {
          setError(true);
          setErrorPassword("И-мэйл хаяг бүртгэлтэй байна");
        } else {
          setError(false);
          setErrorPassword("");
        }
      } catch (err) {
        console.log(err);
      }
    }
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
        {error && <p className="text-red-500 text-sm">{errorPassword}</p>}
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2 mt-4 w-full">
          <Checkbox
            checked={checkBox}
            sx={[
              {
                color: "#000",
                "&.Mui-checked": {
                  color: "#000",
                },
              },
            ]}
            onChange={(e) => {
              console.log(e.target.checked);
              setCheckBox(!checkBox);
            }}
          />
          <span className="text-sm">Үйлчилгээний нөхцөл зөвшөөрөх</span>
        </div>
        <Button
          disabled={!buttonColor}
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          size="large"
          className="text-slate-400 shadow-none h-[56px] hover:bg-[rgba(24,186,81,255)] hover:text-white"
          style={{
            backgroundColor: buttonColor ? "rgba(24,186,81)" : "",
            color: buttonColor ? "white" : "gray",
          }}
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
