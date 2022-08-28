import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { VideoSliderContainer } from "./styleHeroSection";
import MainBtn from "../../tools/mainBtn/MainBtn";
import { useTranslation } from "react-i18next";
import { P, Section, SectionTitle } from "../../../styles/globalStyled";
import ReactPlayer from "react-player/lazy";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoSlider = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionTitle centerMode>{t("introCourseTitle")}</SectionTitle>
      <P centerMode>{t("introCourse")}</P>
      <VideoSliderContainer>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          // autoplay={{
          //   delay:5000,
          //   disableOnInteraction: true
          // }}
        >     <SwiperSlide>
        <ReactPlayer
          url="/Assets/images/makupVideo2.mp4"
          playsinline
          progressInterval
          playIcon={<PlayCircleIcon sx={{ color: "#ffffff" }} />}
          playing={true}
          controls={true}
          volume={1}
          light={"/Assets/images/cover.jpg"}
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
      </SwiperSlide>
          <SwiperSlide>
            <ReactPlayer
              url="/Assets/images/makupVideo1.mp4"
              poster="/Assets/images/melina.jpg"
              playsinline
              progressInterval
              playIcon={<PlayCircleIcon sx={{ color: "#ffffff" }} />}
              playing={true}
              controls={true}
              volume={1}
              light={"/Assets/images/melina.jpg"}
              width={"100%"}
              height={"100%"}
              onContextMenu={(e) => e.preventDefault()}
              config={{
                file: {
                  attributes: {
                    poster: "/Assets/images/melina.jpg",
                    controlsList: "nodownload"
                  }
                }
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReactPlayer
              url="/Assets/images/makupVideo3.mp4"
              playsinline
              progressInterval
              playIcon={<PlayCircleIcon sx={{ color: "#ffffff" }} />}
              playing={true}
              controls={true}
              volume={1}
              light={"/Assets/images/melkerem.jpeg"}
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
          </SwiperSlide>
        </Swiper>

        <MainBtn text={t("viewAllCourse")} size="big" />
      </VideoSliderContainer>
    </Section>
  );
};

export default VideoSlider;
