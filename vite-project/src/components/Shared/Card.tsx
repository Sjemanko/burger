import React, { ReactNode } from "react";

import { StyledCard } from "./Elements";

type Props = {
  children: ReactNode;
};

const Card = (props: Props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
