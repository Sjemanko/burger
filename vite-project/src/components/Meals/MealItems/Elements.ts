import styled, { keyframes } from "styled-components";

const mealAppearance = keyframes`
 from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MealList = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${mealAppearance} 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const StyledMealItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }

  & .description {
    font-style: italic;
  }

  & .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;

export const StyledMealItemForm = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }
`;
