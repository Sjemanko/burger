import { useState } from "react";
import React from "react";

import Card from "../../Shared/Card";
import { MealList } from "./Elements";
import MealItem from "./MealItem";
import { MyData } from "../../types/types";
import { useData } from "../../context/FormDataContext";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const ListOfMeals = () => {
  const { data, setData } = useData();

  const addProduct = (newData: MyData) => {
    const newDataId = newData.id;
    let index;

    data.some((object, idx) => {
      if (object.id === newDataId) {
        index = idx;
        return true;
      }
    });

    if (index !== undefined) {
      data[index].amount += newData.amount;
      setData((prevState) => {
        return [...prevState];
      });
    } else {
      setData((prevState) => {
        return [...prevState, newData];
      });
    }
  };

  return (
    <MealList>
      <Card>
        {DUMMY_MEALS.map((item) => (
          <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            addFunction={addProduct}
          />
        ))}
      </Card>
    </MealList>
  );
};
export default ListOfMeals;
