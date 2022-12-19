import React from "react";
import { FullScreenStyle } from "./styleLoader";
import Image from "next/image";
import mel from "../../../public/Assets/images/melDark.png";
const FullScreenLoader = () => {
  return ( 
    <FullScreenStyle>
      <div className="loader">
        <Image src={mel} alt="mel" />
      </div>
    </FullScreenStyle>
  );
};

export default FullScreenLoader;
