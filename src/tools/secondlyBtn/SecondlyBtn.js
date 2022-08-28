import React from "react";
import { SecondlyBtnContainer } from "./styleSecondlyBtn";

const SecondlyBtn = ({ text, gray, size, fill, height, onClick ,borderColor,disabled}) => {
  return (
    <SecondlyBtnContainer
      size={size}
      gray={gray}
      fill={fill}
      height={height}
      onClick={onClick}
      borderColor={borderColor}
      disabled={disabled}
    >
      {text}
    </SecondlyBtnContainer>
  );
};

export default SecondlyBtn;
