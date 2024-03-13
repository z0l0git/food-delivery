import React from "react";

export const LogoutBox = (props: any) => {
  const { handleNo, indexNum } = props;
  const handleYes = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div
      className="w-[384px] h-[228px] bg-white flex flex-col rounded-[20px] overflow-hidden"
      style={{ zIndex: indexNum }}
    >
      <div className="w-full h-full flex justify-center items-center px-[50px]">
        <p className="font-bold text-[20px] text-center">
          Та системээс гарахдаа итгэлтэй байна уу?
        </p>
      </div>
      <div className="flex w-full h-[61px]">
        <div
          onClick={handleYes}
          className="w-[50%] bg-[#18BA5133] flex justify-center items-center p-[20px] cursor-pointer"
        >
          <p className="text-[#8B8E95] font-bold text-[20px]">Тийм</p>
        </div>
        <div
          onClick={handleNo}
          className="w-[50%]  bg-[#18BA51]  flex justify-center items-center p-[20px] cursor-pointer"
        >
          <p className="font-bold text-[20px] text-white">Үгүй</p>
        </div>
      </div>
    </div>
  );
};
