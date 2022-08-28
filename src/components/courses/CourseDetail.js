import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import {
  Column,
  ColumnBetween,
  FlexBetween,
  P,
  Section,
  SectionTitle,
  Title,
} from "../../../styles/globalStyled";
import { CourseDetailStyle, Description } from "./styleCourses";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import MainBtn from "../../tools/mainBtn/MainBtn";
import VideocamIcon from "@mui/icons-material/Videocam";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Num2persian, { convertTimeStr, persianNumber } from "../../tools/helper";
import BuyCourse from "./BuyCourse";
import SimilarCourse from "./SimilarCourse";
import Link from "next/link";
const CourseDetail = ({ data, headline, similar }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  const [viewing, setViewing] = useState(false);
  const { t } = useTranslation();
  return (
    <Section>
      <CourseDetailStyle lang={lang}>
        <SectionTitle dir>
          {lang === "fa" ? data.title : data.titleEn}
        </SectionTitle>
        <P className="courseIntroText">
          {lang === "fa" ? data.description : data.descriptionEn}
        </P>

        <FlexBetween align>
          <div className="col-lg-8 col-md-7 col-12 content ">
            <div className="video">
              <ReactPlayer
                url={data.fileVideo.filePath}
                light={data.fileImage.filePath}
                playsinline
                progressInterval
                playIcon={
                  <PlayCircleIcon
                    sx={{ color: "#ffffff" }}
                    onClick={() => setViewing(true)}
                  />
                }
                playing={true}
                controls={true}
                volume={1}
                width={"100%"}
                height={"100%"}
                onContextMenu={(e) => e.preventDefault()}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
              <h1 className="videoTitle">
                {/* {t("season")} */}
                {/* {lang === "fa" ? Num2persian(data.id) : data.id}: */}
                {lang === "fa" ? data.title : data.titleEn}
              </h1>
            </div>
          </div>
          <ColumnBetween className="col-lg-4 col-md-5 col-12 information">
            <FlexBetween className="title" align>
              <FlexBetween align>
                <span className="headline">
                  {/* {t("headline") + " "}
                  {lang === "fa" ? Num2persian(data.id) : data.id}: */}
                </span>
                <h1>{lang === "fa" ? data.title : data.titleEn}</h1>
              </FlexBetween>
              {viewing && (
                <span className="viewing">
                  <PauseCircleFilledIcon />
                  {t("viewing")}
                </span>
              )}
            </FlexBetween>

            <P centerMode>{t("buyTheCourseToView")}</P>
            {/* created after payment */}
            {/* <ul>
              {headline.slice(1, 4).map((item) => (
                <>
                  <li>
                    <Link href={`/courses/${item.course.id}/${item.id}`}>
                    <span className="headline">
                      {t("headline") + " "}
                      {lang === "fa" ? Num2persian(item.id) : item.id}:
                    </span>
                    <h2>{lang === "fa" ? item.title : item.titleEn}</h2>
                  </li>
                </>
              ))}
            </ul> */}
            <BuyCourse data={data} />
          </ColumnBetween>
        </FlexBetween>
        <FlexBetween className="mt-5">
          <ColumnBetween className="col-lg-8 col-md-7 col-12 content ">
            <FlexBetween className="generalInfo">
              <div>
                <SpatialAudioOffIcon />
                <span className="headline">{t("master") + " : "}</span>
                <span>{t("melina")}</span>
              </div>
              <div>
                <WatchLaterIcon />
                <span className="headline">{t("duration") + " : "}</span>
                <span>{convertTimeStr(data.duration, t, lang)}</span>
              </div>

              <div>
                <VideocamIcon />
                <span className="headline">{t("videoCount") + " : "}</span>
                <span>
                  {lang === "fa"
                    ? persianNumber(data.headLineCount)
                    : data.headLineCount}
                </span>
              </div>

              <div>
                <WorkspacePremiumIcon />
                <span className="headline">{t("haveCertificate") + " : "}</span>
                <span>
                  {data.haveCertificate ? t("hasIt") : t("doesnthave")}
                </span>
              </div>
            </FlexBetween>

            <Description>
              <Title bold>{lang === "fa" ? data.title : data.titleEn}</Title>
              <P size="medium">
                {lang === "fa" ? data.description : data.descriptionEn}
              </P>
            </Description>
            <Description>
              <Title bold>{t("headlines")}</Title>
              <ul>
                {headline.map((item) => (
                  <>
                    <li>
                      <span className="headline">
                        {t("session") + " "}
                        {lang === "fa"
                          ? Num2persian(item.sessionNumber)
                          : item.id}
                        :
                      </span>
                      <h2>{lang === "fa" ? item.title : item.titleEn}</h2>
                    </li>
                  </>
                ))}
              </ul>
            </Description>
            {/* <Description className="mb-5">
              <Title bold>{lang === "fa" ? data.title : data.titleEn}</Title>
              <P size="medium">
                {lang === "fa" ? data.description : data.descriptionEn}
              </P>
            </Description> */}
            <BuyCourse data={data} />
          </ColumnBetween>
          <ColumnBetween className="col-lg-4 col-md-5 col-12">
            <Title className="similar" bold>
              {t("similarCourse")}
            </Title>
            {similar.map((item) => (
              <>
                <SimilarCourse data={item} />
              </>
            ))}
          </ColumnBetween>
        </FlexBetween>
      </CourseDetailStyle>
    </Section>
  );
};

export default CourseDetail;
