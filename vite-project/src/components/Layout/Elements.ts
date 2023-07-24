import styled, { keyframes } from "styled-components";

const bumpAnimation = keyframes`
0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.5);
  }
  20% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.5);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const HeaderCartButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  & .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }

  & .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  &.bump {
    animation: ${bumpAnimation} 300ms ease-out;
  }
`;

export const MainImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  & img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;
