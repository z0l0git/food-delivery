"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { LoginModal } from "../login/LoginModal";
import { DataContext } from "../context/DataContext";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const { isLoggedIn } = useContext(DataContext);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="flex justify-between items-center py-3 ">
      <div className="flex items=center gap-9 text-center">
        <Image
          src="/pineconeLogo.png"
          alt=""
          width={41}
          height={41}
          onClick={() => {
            window.location.href = "/";
          }}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-9 text-[14px] font-[700] leading-4">
          <p
            onClick={() => {
              window.location.href = "/";
            }}
            className="cursor-pointer"
          >
            НҮҮР
          </p>
          <p className="cursor-pointer">ХООЛНЫ ЦЭС</p>
          <p className="cursor-pointer">ХҮРГЭЛТИЙН БҮС</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="border-[2px] rounded-md border-black px-2">
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              disableUnderline: true,
              placeholder: "Хайх",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>

        <Button
          variant="text"
          startIcon={<ShoppingBasketOutlinedIcon />}
          className="text-[10px] font-[700] leading-4"
          color="inherit"
        >
          Сагс
        </Button>
        {isLoggedIn ? (
          <Button
            onClick={() => {
              window.location.href = "/userProfile";
            }}
            variant="text"
            startIcon={
              <PermIdentityOutlinedIcon style={{ color: "#18BA51" }} />
            }
            className="text-[10px] text-[#18BA51] font-[700] leading-4"
            color="inherit"
          >
            Хэрэглэгч
          </Button>
        ) : (
          <Button
            onClick={handleModal}
            variant="text"
            startIcon={<PermIdentityOutlinedIcon />}
            className="text-[10px] font-[700] leading-4"
            color="inherit"
          >
            Нэвтрэх
          </Button>
        )}
      </div>
      {modal && <LoginModal setLoginModal={modal} handleClose={handleModal} />}
    </div>
  );
};
