import React from "react";

import { SearchRow } from "@/components/search/SearchRow";

type SearchPage = {
  params: { id: string | undefined };
  searchParams: { id: string | undefined };
};

const page = async ({ searchParams }: SearchPage) => {
  const foodId = searchParams.id || "";
  console.log(foodId);

  return (
    <div className="px-[120px]">
      <p className="text-xl font-semibold text-[#18BA51] mt-10 mb-2">Хайлт</p>
      <SearchRow id={foodId} />
    </div>
  );
};

export default page;
