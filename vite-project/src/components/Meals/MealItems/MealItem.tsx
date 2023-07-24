import React, { useState, ChangeEvent } from "react";

import { MealItemProps } from "../../types/Props";
import { StyledMealItem, StyledMealItemForm } from "./Elements";
import Input from "../../Shared/Input";

const MealItem = (props: MealItemProps) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(event.target.value);

    if (!isNaN(newAmount) && newAmount > 0) {
      setAmount(newAmount);
    }
  };

  const submitHandler = () => {
    const mealObj = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    };
    props.addFunction(mealObj);
  };

  return (
    <>
      <StyledMealItem>
        <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{props.price.toFixed(2)}$</div>
        </div>
        <StyledMealItemForm>
          <Input
            id={props.id}
            amount={amount}
            onAmountChange={handleAmountChange}
          />
          <button type="button" onClick={submitHandler}>
            Add
          </button>
        </StyledMealItemForm>
      </StyledMealItem>
    </>
  );
};

export default MealItem;
