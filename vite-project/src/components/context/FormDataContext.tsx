import React, { useState, createContext, useContext } from "react";

import { MyData } from "../types/types";

interface MyDataContextProps {
  data: MyData[];
  setData: React.Dispatch<React.SetStateAction<MyData[]>>;
  singleProductAmount: number;
  setSingleProductAmount: React.Dispatch<React.SetStateAction<number>>;
}

const MyDataContext = createContext<MyDataContextProps | undefined>(undefined);

export function useData() {
  const context = useContext(MyDataContext);
  if (!context) {
    throw new Error("useMyData must be used within a MyDataProvider");
  }
  return context;
}

export function MyDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<MyData[]>([]);
  const [singleProductAmount, setSingleProductAmount] = useState<number>(0);

  return (
    <MyDataContext.Provider value={{ data, setData, singleProductAmount, setSingleProductAmount }}>
      {children}
    </MyDataContext.Provider> 
  );
}
