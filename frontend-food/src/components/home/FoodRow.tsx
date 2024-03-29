"use server";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { FoodCards } from "./FoodCards";
import axios from "axios";
import { FoodModal } from "./FoodModal";

type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: string;
};

const getFoods = async () => {
  try {
    const { data } = await axios.get<FoodType[]>(
      "https://food-delivery-vy9i.onrender.com/foods"
    );

    return data;
  } catch (error: any) {
    console.log("error getting foods");
  }
};

// const handleModal = (modal: boolean) => {
//   console.log(modal);
//   modal = !modal;
//   return;
// };

export const FoodRow = async () => {
  const data = await getFoods();

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ justifyContent: "start", width: "100%" }}
    >
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
        sx={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "10px",
          width: "100%",
        }}
      >
        {data?.map((el, index: number) => {
          return (
            <FoodCards
              key={index}
              name={el.name}
              image={el.image}
              price={el.price}
              ingredient={el.ingredient}
              id={el._id}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
