import { PassAuth } from "@/components/passwordReset/PassAuth";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-[60px] mt-20 mb-20">
      <PassAuth />
    </div>
  );
};
export default page;
