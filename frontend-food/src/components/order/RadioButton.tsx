import React from "react";
import { RadioProgress } from "./RadioProgress";
import { RadioDone } from "./RadioDone";

export const RadioButton = (props: any) => {
  const { checked = false } = props;
  return <>{checked ? <RadioDone /> : <RadioProgress />}</>;
};
