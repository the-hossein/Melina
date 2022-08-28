import React, { useEffect, useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Mousewheel, Autoplay } from "swiper";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { Column, FlexBetween, Title } from "../../../styles/globalStyled";
import { useSelector } from "react-redux";
import { SuggestedStyle } from "./styleProfile";
import { persianNumber } from "../../tools/helper";
import MainBtn from "../../tools/mainBtn/MainBtn";
import callApi from "../../api/callApi";
import { GET_USER_SUGGESTION } from "../../api/urls";
import Link from "next/link";
import { Rating } from "@mui/material";
const SuggestedCourse = () => {
  const test = [1, 2, 3, 4, 5, 6];
  const [size, setSize] = useState(0);
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [suggestion, setSuggestion] = useState([]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    const suggestionReq = async () => {
      const response = await callApi(
        `${GET_USER_SUGGESTION}?UserId=${user.userId}`,
        false,
        "{}",
        "GET"
      );
      if (response.status === 200) {
        setSuggestion(response.data);
      }
    };
    suggestionReq();
  }, []);
  return (
    <SuggestedStyle>
      <Swiper
        modules={[Scrollbar, Mousewheel, Autoplay]}
        className="mySwiper"
        slidesPerView={size <= 575 ? 1 : size <= 992 ? 2 : size >= 1200 ? 5 : 3}
        spaceBetween={size <= 992 ? 40 : 0}
        grabCursor={true}
        pagination={{
          dynamicBullets: true
        }}
        mousewheel={true}
        autoplay
     
        dir="rtl"
      >
        {suggestion.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/courses/${item.id}`}>
              <a>
                <Column className="item">
                  <img src="/Assets/images/coursesImg1.png" alt="courseImage" />
                  <Title bold dir size="small">
                    {lang === "fa" ? item.title : item.titleEn}
                  </Title>
                  <FlexBetween align>
                    <span>
                      {lang === "fa" ? persianNumber(item.price) : item.price}
                      {t("t")}
                    </span>
                    <span>
                      <Rating
                        name="read-only"
                        value={
                          item.rate 
                        }
                        readOnly
                        sx={{ fontSize: "12pt", direction: "var(--dirL)" }}
                      />
                    </span>
                  </FlexBetween>
                  <MainBtn text={t("startCourse")} />
                </Column>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SuggestedStyle>
  );
};

export default SuggestedCourse;
