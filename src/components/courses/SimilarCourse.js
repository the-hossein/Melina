import React from "react";
import { useSelector } from "react-redux";
import {
  ColumnBetween,
  FlexBetween,
  Title
} from "../../../styles/globalStyled";
import { SimilarCourseStyle } from "./styleCourses";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useTranslation } from "react-i18next";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Link from "next/link";
const SimilarCourse = ({ noBorder, data }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();
  return (
    <Link href={`/courses/${data.id}`}>
      <a>
        <SimilarCourseStyle lang={lang} noBorder={noBorder}>
          <FlexBetween align>
            <ColumnBetween className="info">
              <Title size="small" bold dir>
                {lang === "fa" ? data.title : data.titleEn}
              </Title>
              <ul>
                <li>
                  <div>
                    <SpatialAudioOffIcon />
                    <span className="headline">{t("master") + " : "}</span>
                  </div>
                  <span>{t("melina")}</span>
                </li>
                <li>
                  <div>
                    <WorkspacePremiumIcon />
                    <span className="headline">
                      {t("haveCertificate") + " : "}
                    </span>
                  </div>
                  <span>
                    {data.haveCertificate ? t("hasIt") : t("doesnthave")}
                  </span>
                </li>
                <li className="action">
                  <PlayCircleIcon />
                  <a>{t("watchFirstSeason")}</a>
                </li>
              </ul>
            </ColumnBetween>
            <img alt="courseImage" src={data.fileImage.filePath} />
          </FlexBetween>
        </SimilarCourseStyle>
      </a>
    </Link>
  );
};

export default SimilarCourse;
