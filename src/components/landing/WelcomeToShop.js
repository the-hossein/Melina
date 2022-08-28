import React from "react";
import { useTranslation } from "react-i18next";
import { MainTitle, P, Section } from "../../../styles/globalStyled";
import { HR, WelcomeToShopStyle } from "./styleHeroSection";
import blender from "../../../public/Assets/images/blender.png";
import mainImg from "../../../public/Assets/images/melinaCrem.jpeg";
import secondlyImg from "../../../public/Assets/images/thirdImg.png";
import Image from "next/image";
import MainBtn from "../../tools/mainBtn/MainBtn";
import { useSelector } from "react-redux";
import MelBack from "./MelBack";
const WelcomeToShop = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    // <Section section="sideway" lang={lang}>
    //   <WelcomeToShopStyle lang={lang}>
    //     <div className="welComeText">
    //       <div>
    //         <MainTitle>{t("welcomeToShop")}</MainTitle>
    //         <P>{t("introShop")}</P>
    //         <MainBtn text={t("enterShop")} />
    //       </div>
    //       <div className="shopImage">
    //         <Image alt="mainImage" src={mainImg} />
    //         <Image alt="mainImage" src={secondlyImg} />
    //         <Image alt="mainImage" src={blender} />
    //       </div>
    //     </div>
    //   </WelcomeToShopStyle>
    // </Section>
    <Section lang={lang}>
      <WelcomeToShopStyle lang={lang}>
        <MelBack
          title={t("welcomeToShop")}
          text={t("introShop")}
          btnText={t("enterShop")}
          btnLink={"/shop"}
          reverse
        />
        <div className="shopImg">
          <Image alt="mainImage" src={secondlyImg} />
          <Image alt="mainImage" src={mainImg} />
        </div>
      </WelcomeToShopStyle>
    </Section>
  );
};

export default WelcomeToShop;
