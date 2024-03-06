"use client";
import React from "react";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  const textArray: string[] = [
    "Нүүр",
    "Холбоо барих",
    "Хоолны Цэс",
    "Үйлчилгээний нөхцөл",
    "Хүргэлтийн Бүс",
    "Нууцлалын бодлого",
  ];
  return (
    <div className="relative bottom-0 left-0 bg-[url('/Footer.png')] w-screen h-[545px] px-[20px] md:px-[120px] flex flex-col justify-center items-center text-white gap-[45px] px-[100px]">
      <div className="flex items-center gap-2">
        <Image src="/pineconeWhite.png" width={41} height={41} alt="logo" />
        <p className="text-[20px] font-[700]">Food Delivery</p>
      </div>
      <div className="flex items-center justify-between w-full">
        {textArray.map((text, index) => (
          <p
            className="border-b-2 border-white w-fit"
            key={index}
            onClick={() => console.log(text)}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-[20px]">
        <FacebookOutlinedIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
      </div>
      <hr className="w-full border-white" />
      <div className="flex flex-col items-center font-[200] text-[16px]">
        <p>© 2024 Pinecone Foods LLC</p>
        <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
      </div>
    </div>
  );
};
