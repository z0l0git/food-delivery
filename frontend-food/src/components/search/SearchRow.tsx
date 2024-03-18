import React from "react";

import axios from "axios";
import { FoodCards } from "../home/FoodCards";
import { NotFound } from "./NotFound";

export const SearchRow = async (props: { id: string }) => {
  const { id } = props;
  type FoodType = {
    _id: string;
    name: string;
    image: string;
    ingredient: string;
    price: string;
  };

  const getData = async () => {
    const body = {
      filter: {
        $or: [
          {
            name: {
              $regex: id,
              $options: "i",
            },
          },
        ],
      },
    };
    const { data } = await axios.get<FoodType[]>(
      "http://localhost:4000/foods",
      {
        data: body,
      }
    );
    console.log(data);

    return data;
  };
  const data = await getData();

  return (
    <div className="flex gap-[24px] flex-wrap justify-start items-center w-full h-full">
      {data?.map((el, index: number) => {
        return (
          <FoodCards
            key={index}
            name={el.name}
            image={el.image}
            ingredient={el.ingredient}
            price={el.price.toLocaleString()}
          />
        );
      })}
      {data?.length === 0 && <NotFound />}
    </div>
  );
};
