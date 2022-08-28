import React from "react";
import Image from "next/image";
import melImg from "../../../public/Assets/images/melImg.png";
import padImg from "../../../public/Assets/images/pad.png";
import { Mel } from "./styleHeroSection";
import { useSelector } from "react-redux";
import { FlexBetween, P, SectionTitle } from "../../../styles/globalStyled";
import { useTranslation } from "react-i18next";
import MainBtn from "../../tools/mainBtn/MainBtn";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MelBack = ({ title, text, btnText, btnLink, social, reverse }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();
  return (
    <Mel lang={lang} reverse={reverse}>
      <Image alt="mainImage" src={melImg} />
      <Image alt="Image" src={padImg} />
      <Image alt="Image" src={padImg} />
      <SectionTitle dir>{title}</SectionTitle>
      <P size="big" align="right">
        {text}
      </P>
      <Link href={btnLink}>
        <a>
          <MainBtn text={btnText} />
        </a>
      </Link>
      {social && (
        <FlexBetween className="socialMedia">
          <Link href="https://www.instagram.com/melinataj/">
            <a target="_blank">
              <FlexBetween align>
                <h4>melinataj</h4>
                <InstagramIcon />
              </FlexBetween>
            </a>
          </Link>
          <Link href="https://wa.me/+989300729515">
            <a target="_blank">
              <FlexBetween align>
                <h4>0912-1112233</h4>
                <WhatsAppIcon />
              </FlexBetween>
            </a>
          </Link>
        </FlexBetween>
      )}
    </Mel>
  );
};

export default MelBack;
