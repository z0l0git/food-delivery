"use client";
import { Box, Typography, makeStyles } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const Root = styled("div")(({ theme }) => ({
  width: "386px",
  ...theme.typography.body2,
  color: "white",
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export const HomeHeader = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(/homeBig.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "20px",
        paddingY: "160px",
        paddingX: "120px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Root>
        <Typography variant="h2" component="h2" sx={{ fontWeight: "bolder" }}>
          Pinecone Food delivery
        </Typography>
        <Divider
          sx={{
            backgroundColor: "white",
          }}
        ></Divider>
        <Typography sx={{ fontSize: "22px", letterSpacing: "1%" }}>
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Root>
      <Image src={"/headFood.png"} alt="img" width={800} height={770} />
    </Box>
  );
};
