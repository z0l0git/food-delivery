import { OrderFoodContent } from "@/components/order/OrderFoodContent";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderInputArea } from "@/components/order/OrderInputArea";
import React from "react";

const page = () => {
  return (
    <div className="px-[120px] w-full flex justify-around gap-[50px] mt-[100px]">
      <div className="flex flex-col gap-[50px]">
        <OrderHeader
          step={1}
          desc={"Хаягийн мэдээлэл оруулах"}
          checked={false}
        />
        <OrderInputArea />
      </div>
      <div className="flex flex-col gap-[50px]">
        <OrderHeader step={2} desc={"Захиалга баталгаажуулах"} />
        <div className="flex flex-col justify-between h-[612px] w-[432px]">
          <div className="overflow-y-scroll">
            <OrderFoodContent />
          </div>

          <div className="flex justify-between w-full p-8 items-center py-[32px]">
            <div className="w-full">
              <p className="text-[18px] text-[#5E6166]">Нийт төлөх дүн</p>
              <p className="font-bold text-[18px]">10000₮</p>
            </div>
            <div className="w-full bg-[#18BA51] h-[48px] rounded-md text-white flex justify-center items-center cursor-pointer">
              <p>Захиалах</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
