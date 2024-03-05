import React from "react";

const page = () => {
  const str: string = "hello";
  const num: number = 1;
  const bool: boolean = true;
  const obj: object = {};
  const obj2: { [title: string]: string } = {};
  const obj3: Record<string, number> = {};
  const arr: Array<number> = [1, 2, 3];
  const arr2: number[] = [1, 2, 3];
  const arr3: string[] = ["1", "2", "3"];
  const arr4: (string | number)[] = ["1", "2", "3", 4];
  const func: Function = () => {};

  return (
    <div>
      <div>page</div>
    </div>
  );
};

export default page;
