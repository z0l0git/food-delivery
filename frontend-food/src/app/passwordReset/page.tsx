import { PassAuth } from "@/components/passwordReset/passAuth";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-[60px] mt-20 mb-20">
      <div>
        <h1 className="text-[28px] font-bold">Нууц үг сэргээх</h1>
      </div>
      <PassAuth />
    </div>
  );
};
export default page;
