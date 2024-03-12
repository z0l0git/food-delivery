import { Stack } from "@mui/material";
import React from "react";
import { FoodRow } from "./FoodRow";

export const HomeFoodRows = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        paddingX: "120px",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <FoodRow />
    </Stack>
  );
};
