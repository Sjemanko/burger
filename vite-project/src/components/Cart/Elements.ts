import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
from {
    opacity: 0;
    transform: translateY(-3rem);
}
to {
    opacity: 1;
    transform: translateY(0);
}

`;

export const StyledModal = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideAnimation} 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledListItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

export const StyledCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5 rem;
  margin: 1rem 0;
`;

export const StyledActions = styled.div`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  & .button--alt {
    color: #8a2b06;
  }

  & .button {
    background-color: #8a2b06;
    color: white;
  }
`;

export const StyledCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  & h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  & .summary {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .price {
    font-weight: bold;
    color: #8a2b06;
  }

  & .amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
  }

  & .actions {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    & .actions {
      flex-direction: row;
    }
  }

  & button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  & button:hover,
  & button:active {
    background-color: #8a2b06;
    color: white;
  }
`;
