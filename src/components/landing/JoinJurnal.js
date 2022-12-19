import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  FlexBetween,
  MainTitle,
  P,
  Section,
  SectionTitle
} from "../../../styles/globalStyled";
import Input from "../../tools/Input/Input";
import MainBtn from "../../tools/mainBtn/MainBtn";
import { HR, JOinJurnalStyle } from "./styleHeroSection";

const JoinJurnal = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <Section>
      <JOinJurnalStyle lang={lang}>
        <FlexBetween className="joinUs">
          <div className="col-lg-7 col-md-10 col-12 joinUsForm">
            <MainBtn text={t("signUp")} />
            <Input placeHolder={t("enterPhone")} />
          </div>
          <div className="col-lg-5 col-md-10 col-12 ">
            <SectionTitle dir>{t("joinToJournal")}</SectionTitle>
            <P>{t("joinUsText")}</P>
          </div>
        </FlexBetween>
      </JOinJurnalStyle>
    </Section>
  );
};

export default JoinJurnal;
