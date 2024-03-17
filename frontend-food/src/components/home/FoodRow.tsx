import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import { FoodCards } from "./FoodCards";
import axios from "axios";

type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

const getFoods = async () => {
  try {
    const { data } = await axios.get<FoodType[]>("http://localhost:4000/foods");

    return data;
  } catch (error: any) {
    console.log("error getting foods");
  }
};

export const FoodRow = async () => {
  const data = await getFoods();

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
      <Stack
        direction="row"
        spacing={3}
        sx={{ justifyContent: "space-between" }}
      >
        {data?.map((el, index: number) => {
          return (
            <FoodCards
              key={index}
              name={el.name}
              image={el.image}
              price={el.price.toLocaleString()}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
