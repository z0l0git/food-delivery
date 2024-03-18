"use client";
import React, { ChangeEvent, useContext, useState } from "react";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { LoginModal } from "../login/LoginModal";
import Link from "next/link";
import { DataContext } from "../context/DataContext";
import { CartModal } from "../cart/CartModal";

type navigationItem = {
  href: string;
  label: string;
};

const navigationItems: navigationItem[] = [
  {
    href: "/",
    label: "НҮҮР",
  },
  {
    href: "/menu",
    label: "ХООЛНЫ ЦЭС",
  },
  {
    href: "/delivery",
    label: "ХҮРГЭЛТИЙН БҮС",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [modal, setModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const { isLoggedIn } = useContext(DataContext);

  const handleModal = () => {
    setModal(!modal);
  };
  const handleCartModal = () => {
    setCartModal(!cartModal);
  };
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "search") {
      setSearch(value);
    }
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
          {navigationItems.map(({ href, label }, index) => (
            <Link
              href={href}
              key={index}
              className={`cursor-pointer ${pathname === href ? "text-[#18BA51]" : "black"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="border-[2px] rounded-md border-black px-2">
          <TextField
            name="search"
            onChange={handleChange}
            size="small"
            defaultValue={search}
            id="input-with-icon-textfield"
            InputProps={{
              disableUnderline: true,
              placeholder: "Хайх",
              startAdornment: (
                <InputAdornment position="start">
                  <Link href={{ pathname: "/search", query: { id: search } }}>
                    <SearchIcon className="cursor-pointer" />
                  </Link>
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
          onClick={handleCartModal}
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
      {cartModal && (
        <CartModal setCartModal={cartModal} handleClose={handleCartModal} />
      )}
    </div>
  );
};
