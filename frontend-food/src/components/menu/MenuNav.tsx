"use client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { FoodCards } from "../home/FoodCards";

export const MenuNav = () => {
  const { category } = useContext(DataContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryItems, setCategoryItems] = useState<
    [
      {
        name: string;
        image: string;
        price: number;
        ingredient: string;
        _id: string;
      },
    ]
  >([{ name: "", image: "", price: 0, ingredient: "", _id: "" }]);

  useEffect(() => {
    getCategoryItems(category[0]?.id);
  }, [category]);

  const getCategoryItems = async (id: string) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/category/getOne/${id}`
      );
      setCategoryItems(data.foodId);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="w-full h-[107px] flex items-center justify-between gap-[28px]">
        {category.map((item, i: number) => {
          return (
            <div
              id={item.id}
              onClick={() => {
                setActiveIndex(i);
                getCategoryItems(item.id);
              }}
              style={{
                backgroundColor: activeIndex === i ? "#18BA51" : "#fff",
                color: activeIndex === i ? "#fff" : "#000",
              }}
              key={i}
              className={`border-[1px] solid border-[#D6D8DB] w-full flex items-center justify-center rounded-[8px] py-[8px] text-[16px] font-semibold text-center cursor-pointer `}
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-[28px] flex-wrap justify-start items-center w-full h-full">
        {categoryItems?.map((el, index: number) => {
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
      </div>
    </div>
  );
};
