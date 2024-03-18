import Image from "next/image";
import React from "react";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] ">
      <Image src="/notFound.png" alt="404" width={133} height={133} />
      <p className="text-[14px] text-[#8B8E95]">Уучлаарай илэрц олдсонгүй...</p>
    </div>
  );
};
