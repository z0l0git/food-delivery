"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useData } from "../context/DataContext";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";

import { LogoutModal } from "./LogoutModal";
import axios from "axios";
import { OrderHistory } from "./OrderHistoryProps";
import { useEffect, useState } from "react";
import { SaveButton } from "./SaveButton";
import { Success } from "./Success";

type ConditionalRendererProps = {
  edit: boolean;
  handleSubmit: () => void;
  handleModal: () => void;
};

const ConditionalRenderer = ({
  edit,
  handleModal,
  handleSubmit,
}: ConditionalRendererProps) => {
  return !edit ? (
    <OrderHistory handleModal={handleModal} />
  ) : (
    <SaveButton handleSubmit={handleSubmit} />
  );
};

export const ProfileBox = () => {
  const { loggedInUserData, loading } = useData();
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(false);
  const [errorMSG, setErrorMSG] = useState("");
  const [success, setSuccess] = useState(false);

  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setUserData({
      ...userData,
      _id: loggedInUserData._id,
      email: loggedInUserData.email,
      name: loggedInUserData.name,
      phone: loggedInUserData.phone,
    });
  }, [loading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(value);

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async () => {
    setError(false);
    setErrorMSG("");

    if (!userData.email || !userData.name || !userData.phone) {
      setErrorMSG("Please Fill in All the Fields");
      setError(true);
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:4000/users/update",
        userData
      );
      if (data === "update failed") {
        setErrorMSG("амжилтгүй боллоо");

        setError(true);
        setEdit(true);
      } else {
        setSuccess(true);
        setEdit(false);
      }
    } catch (error: any) {
      setErrorMSG("error updateing");
      setError(true);
    }
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleEdit = () => {
    setEdit(!edit);
    console.log("edit is:", edit);
  };

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="mt-[50px] flex flex-col gap-[30px] mb-[80px]">
          <div className="flex flex-col items-center justify-center gap-[40px]">
            <AnimatePresence>{success && <Success />}</AnimatePresence>
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
            <h1 className="font-bold text-[28px]">{userData.name}</h1>
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
                  name="name"
                  className={`bg-transparent w-full outline-none`}
                  onChange={handleChange}
                  value={userData.name ?? ""}
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
                  onChange={handleChange}
                  name="phone"
                  value={userData.phone}
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
                  name="email"
                  onChange={handleChange}
                  value={userData.email}
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
          {error && <p className="text-red-400">{errorMSG}</p>}

          <ConditionalRenderer
            edit={edit}
            handleModal={handleModal}
            handleSubmit={handleSubmit}
          />

          <LogoutModal setLoginModal={modal} handleNo={handleModal} />
        </div>
      )}
    </>
  );
};
