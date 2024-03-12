"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
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
      }}
    >
      <Root>
        <Typography variant="h1" component="h2">
          Pinecone Food delivery
        </Typography>
        <Divider></Divider>
        <Typography>
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Root>
    </Box>
  );
};
