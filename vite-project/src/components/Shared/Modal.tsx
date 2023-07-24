import React from "react";

import { StyledModal, StyledBackdrop } from "../Cart/Elements";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledBackdrop>
      <StyledModal>{children}</StyledModal>
    </StyledBackdrop>
  );
};
export default Modal;
