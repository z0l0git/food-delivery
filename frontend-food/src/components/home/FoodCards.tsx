"use client";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FoodModal } from "./FoodModal";

export const FoodCards = (props: any) => {
  const { name, image, price } = props;
  const [modal, setModal] = React.useState(false);

  const press = () => {
    setModal(!modal);
  };

  return (
    <Stack direction="column" spacing={3}>
      <FoodModal modal={modal} handleModal={press} />
      <Card
        onClick={press}
        sx={{
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          boxShadow: "none",
          paddingX: "none",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.2s ease-in-out",
          },
        }}
      >
        <CardMedia
          component={"div"}
          sx={{
            width: "282px",
            height: "186px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt="food"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </CardMedia>
        <CardContent
          sx={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            paddingX: "0px",
          }}
        >
          <Typography fontWeight={600} fontSize={18}>
            {name}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography
              fontWeight={700}
              fontSize={18}
              sx={{ color: "#18BA51" }}
            >
              {price}₮
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
