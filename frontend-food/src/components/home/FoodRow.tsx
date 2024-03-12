import { Stack, Typography } from "@mui/material";
import React from "react";
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
        <Image src="/star.png" alt="icon" width={32} height={32} />
        Хямдралтай
      </Typography>
      <Stack direction="row" spacing={3}>
        <FoodCards />
      </Stack>
    </Stack>
  );
};
