import React from "react";

type SaveButtonProps = {
  handleSubmit: () => void;
};

export const SaveButton = ({ handleSubmit }: SaveButtonProps) => {
  return (
    <div
      className="bg-[#18BA51] w-full h-[48px] rounded-[4px] flex items-center justify-center text-white cursor-pointer"
      onClick={handleSubmit}
    >
      Хадгалах
    </div>
  );
};
