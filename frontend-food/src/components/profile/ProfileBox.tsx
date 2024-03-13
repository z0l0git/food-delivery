"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { DataContext } from "../context/DataContext";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { LogoutModal } from "./LogoutModal";

export const ProfileBox = () => {
  const { loggedInUserData } = useContext(DataContext);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleEdit = () => {
    setEdit(!edit);
    console.log("edit is:", edit);
  };

  return (
    <div className="mt-[50px] flex flex-col gap-[30px] mb-[80px]">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <div>
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden flex items-center">
            <Image
              src="/profile.jpeg"
              alt="profile"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <h1 className="font-bold text-[28px]">{loggedInUserData.name}</h1>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex bg-[#F6F6F6] py-[8px] px-[20px] rounded-[4px] gap-[5px] items-center">
          <div className="bg-white border-[#EEEFF2] border-[1px] w-[48px] h-[48px] flex items-center justify-center rounded-full">
            <PermIdentityOutlinedIcon />
          </div>
          <div className="w-[264px]">
            <p className="text-[12px] text-[#888A99]">Таны нэр</p>
            <input
              type="text"
              className={`bg-transparent w-full outline-none`}
              onChange={() => {}}
              value={loggedInUserData.name}
            />
          </div>
          <div>
            <ModeEditOutlineOutlinedIcon
              style={{ color: "#18BA51" }}
              className="cursor-pointer"
              onClick={handleEdit}
            />
          </div>
        </div>
        <div className="flex bg-[#F6F6F6] py-[8px] px-[20px] rounded-[4px] gap-[5px] items-center">
          <div className="bg-white border-[#EEEFF2] border-[1px] w-[48px] h-[48px] flex items-center justify-center rounded-full">
            <PhoneEnabledOutlinedIcon />
          </div>
          <div className="w-[264px]">
            <p className="text-[12px] text-[#888A99]">Утасны дугаар</p>
            <input
              type="text"
              className="bg-transparent w-full outline-none"
              onChange={() => {}}
              value={loggedInUserData.phone}
            />
          </div>
          <div>
            <ModeEditOutlineOutlinedIcon
              style={{ color: "#18BA51" }}
              className="cursor-pointer"
              onClick={handleEdit}
            />
          </div>
        </div>
        <div className="flex bg-[#F6F6F6] py-[8px] px-[20px] rounded-[4px] gap-[5px] items-center">
          <div className="bg-white border-[#EEEFF2] border-[1px] w-[48px] h-[48px] flex items-center justify-center rounded-full">
            <ForwardToInboxOutlinedIcon />
          </div>
          <div className="w-[264px]">
            <p className="text-[12px] text-[#888A99]">Имэйл хаяг</p>
            <input
              type="text"
              className="bg-transparent w-full outline-none"
              onChange={() => {}}
              value={loggedInUserData.email}
            />
          </div>
          <div>
            <ModeEditOutlineOutlinedIcon
              style={{ color: "#18BA51" }}
              className="cursor-pointer"
              onClick={handleEdit}
            />
          </div>
        </div>
      </div>
      {edit ? (
        <div className="px-[20px] flex flex-col gap-[30px]">
          <div className="flex items-center gap-[5px] cursor-pointer w-fit">
            <div className="bg-white border-[#EEEFF2] border-[1px] w-[48px] h-[48px] flex items-center justify-center rounded-full">
              <PermIdentityOutlinedIcon />
            </div>
            <p>Захиалгын түүх</p>
          </div>
          <div
            className="flex items-center gap-[5px] cursor-pointer w-fit"
            onClick={handleModal}
          >
            <div className="bg-white border-[#EEEFF2] border-[1px] w-[48px] h-[48px] flex items-center justify-center rounded-full">
              <ExitToAppOutlinedIcon />
            </div>
            <p>Гарах</p>
          </div>
        </div>
      ) : (
        <div
          className="bg-[#18BA51] w-full h-[48px] rounded-[4px] flex items-center justify-center text-white cursor-pointer"
          onClick={handleEdit}
        >
          Хадгалах
        </div>
      )}
      <LogoutModal setLoginModal={modal} handleNo={handleModal} />
    </div>
  );
};
