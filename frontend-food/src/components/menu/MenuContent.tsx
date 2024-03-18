"use client";
import React, { useState } from "react";

type navigationItem = {
  label: string;
};

const navigationItems: navigationItem[] = [
  {
    label: "Breakfast",
  },
  {
    label: "Soup",
  },
  { label: "Main Course" },
  {
    label: "Dessert",
  },
];

export const MenuContent = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[107px] flex items-center justify-between gap-[28px]">
        {navigationItems.map((item, i: number) => {
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              style={{
                backgroundColor: activeItem === i ? "#18BA51" : "transparent",
                color: activeItem === i ? "#fff" : "#000",
              }}
              className={`border-[1px] solid border-[#D6D8DB] w-full flex items-center justify-center rounded-[8px] py-[8px] text-[16px] font-semibold text-center cursor-pointer `}
            >
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
