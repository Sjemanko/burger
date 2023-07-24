import React, { useState } from "react";

import { StyledInput } from "./Elements";
import { InputMealProps } from "../types/Props";

const Input = (props: InputMealProps) => {

  return (
    <StyledInput>
      <label htmlFor={props.id}>Amount</label>
      <input
        id={props.id}
        type="number"
        value={props.amount}
        onChange={props.onAmountChange}
        min={1}
      />
    </StyledInput>
  );
};
export default Input;
