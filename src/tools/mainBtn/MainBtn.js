import React from "react";
import { MainBtnContainer } from "./styleMainBtn";

const MainBtn = ({ text, color, onClick, size, disabled,alignSelf }) => {
  return (
    <MainBtnContainer
      size={size}
      color={color}
      disabled={disabled}
      alignSelf={alignSelf}
      onClick={onClick}
    >
      {text}
    </MainBtnContainer>
  );
};

export default MainBtn;
