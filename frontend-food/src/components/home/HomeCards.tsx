import { Stack } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { Cards } from "./Cards";
import React from "react";

const cardArray = [
  {
    title: "Хүргэлтийн төлөв хянах",
    icon: (
      <AutoStoriesOutlinedIcon
        style={{ color: "#18BA51", fontSize: 40, margin: "15px" }}
      />
    ),
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    title: "Шуурхай хүргэлт",
    icon: (
      <QueryBuilderOutlinedIcon
        style={{ color: "#18BA51", fontSize: 40, margin: "15px" }}
      />
    ),
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    title: "Эрүүл, баталгаат орц",
    icon: (
      <EggAltOutlinedIcon
        style={{ color: "#18BA51", fontSize: 40, margin: "15px" }}
      />
    ),
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    title: "Хоолны өргөн сонголт",
    icon: (
      <ImportContactsRoundedIcon
        style={{ color: "#18BA51", fontSize: 40, margin: "15px" }}
      />
    ),
    desc: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export const HomeCards = () => {
  return (
    <Stack
      direction="row"
      sx={{
        paddingX: "120px",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        gapX: "20px",

        flexWrap: "wrap",
      }}
    >
      {cardArray.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          icon={card.icon}
          desc={card.desc}
        />
      ))}
    </Stack>
  );
};
