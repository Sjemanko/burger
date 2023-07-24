import React from "react";

import mealImage from '../../assets/meals.jpg';

import { MainImageContainer } from "../Layout/Elements";


const MainImage = () => {
  return(
    <MainImageContainer>
      <img src={mealImage} alt="Table full of meals" />
    </MainImageContainer>
  )
};

export default MainImage;
