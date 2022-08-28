import React from "react";
import {
  FlexBetween,
  MainTitle,
  P,
  Section,
} from "../../../styles/globalStyled";
import { AboutUsContainer } from "./styleAboutUS";
import img1 from "../../../public/Assets/images/blender.png";
import img2 from "../../../public/Assets/images/mainImg.png";

import Image from "next/image";
import { t } from "i18next";
import { useSelector } from "react-redux";
const AboutUs = () => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <>
      <Section lang={lang} margin>
        <AboutUsContainer lang={lang}>
          <div className="content">
            <MainTitle>{t("aboutUs")}</MainTitle>
            <P size={"big"}>{t("AbuotUs")}</P>
            <Image alt="about us image" src={img1} />
          </div>
          <div className="partTwo">
            <div>
              <Image alt="about us image" src={img2} />
            </div>
            <div className="aboutUsText">
              <div className="part1">
                {/* <h1>{t("lorem")}</h1> */}
                <P size={"big"}>{t("AbuotUs_2")}</P>
              </div>
              {/* <div className="part2">
                <h1>{t("lorem")}</h1>
                <P size={"big"}>{t("introText")}</P>
              </div> */}
            </div>
          </div>
        </AboutUsContainer>
      </Section>
    </>
  );
};

export default AboutUs;
