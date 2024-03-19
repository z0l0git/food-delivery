import React from "react";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

type OrderHistoryProps = {
  handleModal: () => void;
};

export const OrderHistory = ({ handleModal }: OrderHistoryProps) => {
  return (
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
  );
};
