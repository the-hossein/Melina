import Image from "next/image";
import React from "react";
import { HeroContainer } from "./styleHeroSection";
import mainImg from "../../../public/Assets/images/mainImg.png";
import secondlyImg from "../../../public/Assets/images/secondlyImg.png";
import melImg from "../../../public/Assets/images/melImg.png";
import thirdImg from "../../../public/Assets/images/thirdImg.png";
import mel from "../../../public/Assets/images/mel.png";
import logo from "../../../public/Assets/images/logo.png";

import { useTranslation } from "react-i18next";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import {
  ColumnBetween,
  FlexBetween,
  P,
  Section,
  SectionTitle
} from "../../../styles/globalStyled";
import MainBtn from "../../tools/mainBtn/MainBtn";
import MelBack from "./MelBack";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSelector } from "react-redux";

const HeroSections = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  // return (
  //   <Section>
  //     <HeroContainer>
  //       <div className="container-fluid">
  //         <div className="row justify-content-between">
  //           <div className="col-lg-4 ">
  //             <div className="name">
  //               <h1 className="melina">Melina Taj</h1>
  //               <div>
  //                 <h1 className="beauty">Beauty</h1>
  //                 <SecondlyBtn text={t("startTutarial")} />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="col-lg-4 p-0 ">
  //             <div className="mainImg">
  //               <Image alt="mainImage" src={mainImg} />
  //               <Image alt="mainImage" src={secondlyImg} />
  //               <Image alt="mainImage" src={thirdImg} />
  //               <Image alt="mainImage" src={mel} />
  //               <Image alt="mainImage" src={logo} />

  //               <div className="intro">
  //                 <h2>{t("Intrudes")}</h2>
  //                 <h3>{t("ToCourse")}</h3>
  //                 <P>{t("introCourse")}</P>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="col-lg-4 ">
  //             <P className="content">{t("introText")}</P>
  //           </div>
  //         </div>
  //       </div>
  //     </HeroContainer>
  //   </Section>
  // );
  return (
    <Section>
      <HeroContainer lang={lang}>
        <FlexBetween align className="intro">
          <div className="heroImages">
            <Image alt="mainImage" src={mainImg} />
            <Image alt="mainImage" src={secondlyImg} />
          </div>
          <MelBack
            title={t("melinaBeauty")}
            text={t("introText")}
            btnText={t("startTutarial")}
            btnLink={"/courses"}
            social
          />
        </FlexBetween>
      </HeroContainer>
    </Section>
  );
};

export default HeroSections;
