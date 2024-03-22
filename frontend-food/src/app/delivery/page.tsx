import { Map } from "@/components/delivery/Map";
import { Typography } from "@mui/material";
import Image from "next/image";

import React from "react";

const page = async () => {
  return (
    <div className="flex flex-col items-start px-[120px] gap-[50px]">
      <div className="w-full h-[616px]">
        <Map
          position={{
            lat: 47.91,
            lng: 106.8,
          }}
          zoom={13}
        />
      </div>
      <Typography
        fontWeight={700}
        fontSize={22}
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Image src="/star.png" alt="icon" width={30} height={30} />
        Хүргэлтийн бүс дэх хаягууд
      </Typography>
      <div className="flex w-full justify-between">
        <div
          className="w-[50%] h-[388px] flex flex-col gap-[16px] p-[24px] box-shadow: 0px 0px 20px 0px #0000000D;
"
        >
          <h2 className="text-[20px] font-bold">А бүс</h2>
          <hr className="w-full border-[#18BA51]" />
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 text-[16px]">
              <p>Нархан хотхон</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
            </div>
            <div className="flex flex-col gap-3 text-[16px]">
              <p>Нархан хотхон</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
            </div>
          </div>
        </div>
        <div
          className="w-[50%] h-[388px] flex flex-col gap-[16px] p-[24px] box-shadow: 0px 0px 20px 0px #0000000D;
"
        >
          <h2 className="text-[20px] font-bold">А бүс</h2>
          <hr className="w-full border-[#18BA51]" />
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 text-[16px]">
              <p>Нархан хотхон</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
            </div>
            <div className="flex flex-col gap-3 text-[16px]">
              <p>Нархан хотхон</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
              <p>26-р байр</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
