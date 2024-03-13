import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import React from "react";

export const FoodCards = (props: any) => {
  const { food, image, price, isOnSale, salePrice } = props;
  return (
    <Stack direction="column" spacing={3}>
      <Card>
        <CardMedia
          sx={{ height: "186px" }}
          src="/frontend-food/public/breakfast.png"
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
