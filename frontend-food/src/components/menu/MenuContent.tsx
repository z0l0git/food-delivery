import axios from "axios";
import React,from "react";

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

export const MenuContent = async () => {


  type Category = {
    name: String;
    foodId: String;
  };
 
  const { data } = await axios.get<Category[]>(
    "http://localhost:4000/category/getAll"
  );

  return (
    <div className="w-full">
      <div className="w-full h-[107px] flex items-center justify-between gap-[28px]">
        {data.map((item, i: number) => {
          return (
            <div
              key={i}
              
              style={{
                backgroundColor: i === i ? "#18BA51" : "transparent",
                color: i === i ? "#fff" : "#000",
              }}
              className={`border-[1px] solid border-[#D6D8DB] w-full flex items-center justify-center rounded-[8px] py-[8px] text-[16px] font-semibold text-center cursor-pointer `}
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
