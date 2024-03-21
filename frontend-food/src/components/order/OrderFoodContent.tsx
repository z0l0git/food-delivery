import Image from "next/image";
import React from "react";

export const OrderFoodContent = () => {
  return (
    <div className="border-y-2 border-[#D6D8DB] w-[384px] flex justify-between items-center p-5 h-[153px] gap-4">
      <div className="w-[50%] h-[100%] flex justify-center items-center rounded-[16px] overflow-hidden">
        <Image
          src={"/pizza.png"}
          alt="img"
          sizes="100vw"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="w-[50%] flex flex-col gap-[8px]">
        <div>
          <p className="text-[18px] font-bold">Pizza</p>
          <p className="text-[18px] font-bold text-[#18BA51]">10000₮</p>
        </div>

        <p className="text-[#767676] text-[16px]">
          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
        </p>
      </div>
    </div>
  );
};
