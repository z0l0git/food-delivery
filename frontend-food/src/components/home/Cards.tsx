import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export const Cards = (props: any) => {
  const { icon, title, desc } = props;
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: "16px",
        boxShadow:
          "4px 4px 12px 0px #0000001A, 4px 4px 12px 0px #0000001A, 4px 4px 12px 0px #0000001A",
        "&:hover": {
          boxShadow: "0",
          border: "1px solid #18BA51",
        },
        "&:focus": {
          boxShadow: "0",
          border: "1px solid #18BA51",
        },
        "&:active": {
          boxShadow:
            "4px 4px 12px 0px #0000001A, 4px 4px 12px 0px #0000001A, 4px 4px 12px 0px #0000001A",
        },
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {icon}
        <Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", fontWeight: "700", lineHeight: "27px" }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            {desc}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
