/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export const OrderInputArea = () => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [address, setAddress] = useState<any[]>([]);

  const url = `https://z4ryw4kny0.execute-api.ap-southeast-1.amazonaws.com/production/searchByAddress?address=`;

  const fetchAddress = async (i: string) => {
    try {
      const response = await axios.get(`${url}${i}`);
      setAddress(response.data.data);
      return;
    } catch (error: any) {}
  };

  const handleClick = (i: string) => {
    setInput(i);
    setSearch(false);
  };

  useEffect(() => {
    fetchAddress(input);
  }, [input]);

  useEffect(() => {
    if (input.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [input]);

  return (
    <div className="w-[432px] p-[24px] flex flex-col gap-[40px] p-[24px]">
      <div className="flex flex-col gap-[10px] w-full">
        <p className="text-[16px]">Хаяг аа оруулна уу</p>
        <div
          className={`flex items-center h-[48px] pl-[8px] gap-[8px] rounded-[6px] ${input.length > 0 ? "bg-[#18BA51] text-white font-semibold" : ""}`}
        >
          <IoLocationOutline size={26} />
          <input
            type="text"
            placeholder="Дүүрэг сонгоно уу"
            className={`h-[48px] w-full outline-none bg-transparent`}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>

        {search && (
          <div className="flex flex-col rounded-[20px] bg-[#FFF00] bg-white px-[24px] py-[16px] gap-[10px] w-fit mt-[10px] h-[200px] overflow-scroll">
            {address.length > 0 &&
              address?.map((com, i: number) => {
                return (
                  <div
                    className="flex gap-[10px] cursor-pointer h-fit"
                    key={i}
                    id={i.toString()}
                    onClick={() => {
                      handleClick(com.bairname);
                    }}
                  >
                    <IoLocationOutline size={25} color="lightgray" />
                    <p id={`loc${i}`}>{com.bairname}</p>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div>
        <div className="flex flex-col gap-[10px] w-full">
          <p>Нэмэлт мэдээлэл</p>
          <textarea
            placeholder="Орц, давхар, орцны код ..."
            className="w-full outline-none ml-[8px] h-[112px] text-start resize-none bg-[#F7F7F8]"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-[10px] w-full">
          <p>Утасны дугаар*</p>
          <input
            placeholder="Утасны дугаараа оруулна уу"
            className="w-full outline-none pl-[8px] bg-[#F7F7F8]"
          />
        </div>
      </div>
      <div>
        <p>Төлбөр төлөх </p>
        <div className="flex w-full gap-[40px] items-center ">
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label="Бэлнээр"
            sx={{
              color: "#8B8E95s",
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label="Картаар"
            sx={{
              color: "#8B8E95s",
            }}
          />
        </div>
      </div>
    </div>
  );
};
