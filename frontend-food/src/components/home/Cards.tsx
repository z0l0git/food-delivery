import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export const Cards = (props: any) => {
  const { icon, title, desc } = props;
  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: "4px 4px 12px 0px #0000001A",
        borderRadius: "16px",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {icon}
        {/* <AutoStoriesOutlinedIcon
          style={{ color: "#18BA51", fontSize: 40, margin: "15px" }}
        /> */}
        <Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", fontWeight: "700", lineHeight: "27px" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            {desc}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
