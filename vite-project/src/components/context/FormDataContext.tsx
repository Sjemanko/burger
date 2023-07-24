import React, { useState, createContext, useContext } from "react";

import { MyData } from "../types/types";


interface MyDataContextProps {
  data: MyData[];
  setData: React.Dispatch<React.SetStateAction<MyData[]>>;
  updateAmount: (id: string, value: -1 | 1) => void
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

  const updateAmount = (id: string, value: number) => {
    const newData = data.map(el => {
      if(el.id === id) {
        el.amount += value;
      }
      return el;
    });
    setData(newData);
  } 

  return (
    <MyDataContext.Provider value={{ data, setData, updateAmount }}>
      {children}
    </MyDataContext.Provider> 
  );
}
