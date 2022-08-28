import React from "react";
import Image from "next/image";
import { CardMain } from "./CardStyle";

const CardProfile = ({ img, text, name }) => {
  return (
    <CardMain>
        <div className="holder_image_profile">
      <Image src={img} alt={name} />
        </div>
      <div className="description_profile">
        <span>{name}</span>
        <p>{text}</p>
      </div>
    </CardMain>
  );
};

export default CardProfile;
