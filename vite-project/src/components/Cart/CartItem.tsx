import React from "react";

import { StyledCartItem } from "./Elements";
import { CartMealItemsProps } from "../types/types";
import { useData } from "../context/FormDataContext";
const CartItem = (props: CartMealItemsProps) => {
  const { data, updateAmount } = useData();

  const onClickHandler = (action: "add" | "remove") => {
    const cartPosition = data.find((item) => item.id === props.id);
    console.log("cp", cartPosition);
    if (action === "add") {
      if (cartPosition !== undefined) {
        updateAmount(cartPosition.id, 1);
      }
    } else {
      if (cartPosition !== undefined) {
        updateAmount(cartPosition.id, -1);
      }
    }
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
