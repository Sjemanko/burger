import React, { useState } from "react";

import { StyledListItems, StyledCartTotal, StyledActions } from "./Elements";
import { useData } from "../context/FormDataContext";
import CartItem from "./CartItem";
import Modal from "../Shared/Modal";
import { CartVisibilityStateFunc } from "../types/types";

const CartItemList = (props: CartVisibilityStateFunc) => {
  const { data } = useData();
  const hideCartModal = () => {
    props.setCartVisibility(false);
  };

  const countTotalAmount = () => {
    let sum = 0;
    data.map((item) => (sum += item.amount * item.price));
    return sum.toFixed(2);
  };

  const totalSum = countTotalAmount();
  return (
    <Modal>
      <StyledListItems>
        {data.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </StyledListItems>
      <StyledCartTotal>
        <p>Total Amount</p>
        <p>{totalSum}$</p>
      </StyledCartTotal>
      <StyledActions>
        <button className="button--alt" onClick={hideCartModal}>
          Cancel
        </button>
        <button className="button">Order</button>
      </StyledActions>
    </Modal>
  );
};

export default CartItemList;
