import React from "react";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items=center gap-4 text-center">
        <Image src="/pineconeLogo.png" alt="" width={41} height={41} />
        <div className="flex items-center gap-2">
          <p>НҮҮР</p>
          <p>ХООЛНЫ ЦЭС</p>
          <p>ХҮРГЭЛТИЙН БҮС</p>
        </div>
      </div>
      <div>
        <div className="border-2 rounded-md border-black px-2">
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
      </div>
    </div>
  );
};
