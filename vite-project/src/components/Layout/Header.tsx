import React, { FC } from "react";

import { HeaderContainer } from "./Elements";
import Button from "./Button";
import MainImage from "../Meals/MainImage";
import MealSummary from "../Meals/MealSummary";
import { CartVisibilityStateFunc } from "../types/types";

const Header = (props: CartVisibilityStateFunc) => {
  return (
    <>
      <HeaderContainer>
        <h1>React Meals</h1>
        <Button setCartVisibility={props.setCartVisibility}/>
      </HeaderContainer>
      <MainImage />
      <MealSummary />
    </>
  );
};
export default Header;
