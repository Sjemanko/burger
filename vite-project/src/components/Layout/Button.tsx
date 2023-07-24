import React, { useState, useEffect } from "react";

import CartIcon from "../../assets/Cart/CartIcon";
import { HeaderCartButton } from "./Elements";
import { useData } from "../context/FormDataContext";
import { CartVisibilityStateFunc } from "../types/types";

const Button = (props: CartVisibilityStateFunc) => {
  const [bump, setBump] = useState(true);
  const { data } = useData();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let amountOfProducts = 0;

    for (const item of data) {
      amountOfProducts += item.amount;
    }

    setAmount(amountOfProducts);

    if (amount >= 0) {
      setBump(true);
    }
    const timeoutId = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [data]);


  const showCartModal = () => {
    props.setCartVisibility(true);
  }

  return (
    <HeaderCartButton className={bump ? "bump" : ""} onClick={showCartModal}>
      <span className="icon">
        <CartIcon />
      </span>
      Your Products
      <span className="badge">{amount}</span>
    </HeaderCartButton>
  );
};

export default Button;
