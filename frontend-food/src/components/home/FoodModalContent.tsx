import React from "react";
import Image from "next/image";

export const FoodModalContent = () => {
  return (
    <div className="p-[32px] flex bg-white z-20 w-[982px] h-[564px] rounded-[16px] gap-[32px]">
      <div className="w-[50%] h-[100%] flex justify-center items-center rounded-[16px] overflow-hidden">
        <Image
          src={"/dish.png"}
          alt="modal"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[36px] w-[50%]">
        <div>
          <h2 className="text-[28px] font-bold">Food Name</h2>
          <h2 className="text-[18px] text-[#18BA51] font-bold">1000</h2>
        </div>
        <div className="flex flex-col gap-[12px] w-full">
          <p className="text-[18px] font-bold">Food Description</p>
          <div className="w-full text-[16px] text-[#767676] bg-[#F6F6F6] p-[8px] rounded-[8px] min-h-[54px]">
            <p>Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр</p>
          </div>
        </div>

        <p className="text-[18px] font-bold">Count</p>
        <div className="flex w-[100%] justify-between items-center ">
          <button className="flex items-center justify-center rounded-[10px] w-[40px] h-[40px] bg-[#18BA51] text-white text-[30px]">
            -
          </button>
          <p>1</p>
          <button className="flex items-center justify-center rounded-[10px] w-[40px] h-[40px] bg-[#18BA51] text-white text-[25px]">
            +
          </button>
        </div>

        <button className="w-full h-[48px] rounded-[6px] bg-[#18BA51] text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
