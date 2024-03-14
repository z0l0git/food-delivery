"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import { FoodCards } from "./FoodCards";

export const FoodRow = () => {
  return (
    <Stack direction="column" spacing={2}>
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
        All Items
      </Typography>
      <Stack direction="row" spacing={3}>
        <FoodCards
          name="Breakfast"
          image="https://res.cloudinary.com/dvru9eig5/image/upload/v1710385165/ggozatjz3dmkozdjbatq.jpg"
          price="14,800"
        />
      </Stack>
    </Stack>
  );
};
