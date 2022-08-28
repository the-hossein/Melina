import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Column, FlexBetween, P, Title } from "../../../styles/globalStyled";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import { useSelector } from "react-redux";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { convertTimeStr, persianNumber } from "../../tools/helper";
import Link from "next/link";
import ReactPlayer from "react-player";
const Course = ({ data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const [play, setPlay] = useState(false);
  return (
    <FlexBetween className="course">
      <Column className="col-lg-5 col-md-6 col-12 info">
        <Title dir>{lang === "fa" ? data.title : data.titleEn}</Title>
        <P className="des">{lang === "fa" ? data.description : data.descriptionEn}</P>
        <FlexBetween className="details">
          <ul>
            <li>
              <span>{t("duration") + " : "}</span>
              {convertTimeStr(data.duration, t, lang)}
              <WatchLaterIcon />
            </li>
            <li>
              <span>{t("price") + " : "}</span>
              {lang === "fa" ? persianNumber(data.price) : data.price}
              {t("t")}
              <VideocamIcon />
            </li>
          </ul>
          <ul>
            <li>
              <span>{t("master") + " : "}</span>
              {t("melina")}
              <SpatialAudioOffIcon />
            </li>
            <li>
              <span>{t("haveCertificate") + " : "}</span>
              <span>{data.haveCertificate ? t("hasIt") : t("doesnthave")}</span>
              <WorkspacePremiumIcon />
            </li>
          </ul>
        </FlexBetween>
        <div className="actions">
          <Link href={`/courses/${data.id}`}>
            <button className="detailBtn">{t("details")}</button>
          </Link>
          <button className="preview" onClick={() => setPlay(true)}>
            {t("startPreview")}
            <PlayArrowIcon />
          </button>
        </div>
      </Column>
      <div className="col-lg-7 col-md-6 col-12">
        {play ? (
          <ReactPlayer
            url={data.fileVideo.filePath}
            playsinline
            progressInterval
            playing={true}
            controls={true}
            volume={1}
            onReady={true}
            width={"100%"}
            height={"100%"}
            onContextMenu={(e) => e.preventDefault()}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload"
                }
              }
            }}
          />
        ) : (
          <img alt="courseImage" src={data.fileImage.filePath} />
        )}
      </div>
    </FlexBetween>
  );
};

export default Course;
