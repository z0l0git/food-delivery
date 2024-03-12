import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import React from "react";

export const FoodCards = (props: any) => {
  const { food, image, price, isOnSale, salePrice } = props;
  return (
    <Stack direction="column" spacing={3}>
      <Card>
        <CardMedia
          sx={{ height: "186px" }}
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="breakfast"
        />
        <CardContent>
          <Typography fontWeight={600} fontSize={18}>
            Өглөөний хоол
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography
              fontWeight={700}
              fontSize={18}
              sx={{ color: "#18BA51" }}
            >
              14,800₮
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
