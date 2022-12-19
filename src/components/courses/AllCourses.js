import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  MainTitle,
  P,
  Section,
  SectionTitle
} from "../../../styles/globalStyled";
import Course from "./Course";
import { CoursesContainer } from "./styleCourses";

const AllCourses = ({ datas }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <Section margin>
      <CoursesContainer lang={lang}>
        <SectionTitle dir>{t("course")}</SectionTitle>
        <P>{t("courseText")}</P>
        {datas.map((item) => (
          <>
            <Course data={item} />
          </>
        ))}
      </CoursesContainer>
    </Section>
  );
};

export default AllCourses;
