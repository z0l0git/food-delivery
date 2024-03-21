import React from "react";
import { RadioButton } from "./RadioButton";

export const OrderHeader = (props: any) => {
  const { checked, step, desc } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="w-[48px] h-[48px]">
        <RadioButton checked={checked} />
      </div>
      <div>
        <p className="text-[14px] text-[#8B8E95]">Алхам {step}</p>
        <p className="text-[20px] font-semibold">{desc}</p>
        {checked ? (
          <p className="text-[16px] font-semibold text-[#18BA51]">Оруулсан</p>
        ) : (
          <p className="text-[16px] text-[#0468C8]">Хүлээгдэж байна</p>
        )}
      </div>
    </div>
  );
};
