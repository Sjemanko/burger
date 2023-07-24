import React from "react";

import { StyledCartItem } from "./Elements";
import { CartMealItemsProps } from "../types/types";
import { useData } from "../context/FormDataContext";
const CartItem = (props: CartMealItemsProps) => {
  const { data, setSingleProductAmount } = useData();

  const onClickHandler = (action: string) => {
    const cartPosition = data.find((item) => item.id === props.id);
    if (action === "add") {
      if (cartPosition !== undefined) {
        setSingleProductAmount((cartPosition.amount += 1));
      }
    } else {
      if (cartPosition !== undefined) {
        setSingleProductAmount((cartPosition.amount -= 1));
      }
    }
    console.log(data);
  };

  return (
    <StyledCartItem>
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">${props.price}</span>
          <span className="amount">x{props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => onClickHandler("remove")}>-</button>
        <button onClick={() => onClickHandler("add")}>+</button>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
