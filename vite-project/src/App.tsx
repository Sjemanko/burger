import React, { useState } from "react";

import Header from "./components/Layout/Header";
import ListOfMeals from "./components/Meals/MealItems/ListOfMeals";

import { MyDataProvider } from "./components/context/FormDataContext";
import CartItemList from "./components/Cart/CartItemList";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <MyDataProvider>
      <Header setCartVisibility={setIsCartVisible} />
      <ListOfMeals></ListOfMeals>
      {isCartVisible && <CartItemList setCartVisibility={setIsCartVisible} />}
    </MyDataProvider>
  );
};
export default App;
