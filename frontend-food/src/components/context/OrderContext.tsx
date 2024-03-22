import React, { useContext, useState } from "react";
import { createContext } from "react";

type OrderContextType = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType
);

export const OrderProvider = ({ children }: any) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <OrderContext.Provider value={{ checked, setChecked }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
