import { ChangeEvent } from "react";
import { MyData } from "./types";

export type MealItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  addFunction(data: MyData): void;
};

export type InputMealProps = {
  id: string;
  amount: number;
  onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
