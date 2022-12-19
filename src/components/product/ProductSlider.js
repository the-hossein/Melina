import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";
import { SliderStyle } from "./styleProduct";
import { useSelector } from "react-redux";

const slides = [
  "/Assets/images/mainImg.png",
  "/Assets/images/thirdImg.png",
  "/Assets/images/secondlyImg.png",
  "/Assets/images/mainImg.png",
  "/Assets/images/thirdImg.png",
  "/Assets/images/secondlyImg.png"
];

export default function ProductSlider({images}) {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <SliderStyle lang={lang}>
      <div className="App">
        <section className="slider">
          <div className="slider__flex">
            <div className="slider__col">
              <div className="slider__thumbs">
                <Swiper
                  onSwiper={setImagesNavSlider}
                  direction="vertical"
                  spaceBetween={24}
                  slidesPerView={3}
                  mousewheel={true}
                  navigation={{
                    nextEl: ".slider__next",
                    prevEl: ".slider__prev"
                  }}
                  className="swiper-container1"
                  breakpoints={{
                    0: {
                      direction: "horizontal"
                    },
                    768: {
                      direction: "vertical"
                    }
                  }}
                  modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
                >
                  {images.map((slide, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="slider__image">
                          <img src={slide.src} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            <div className="slider__images">
              <Swiper
                //   thumbs={{ swiper: imagesNavSlider }}
                thumbs={{
                  swiper:
                    imagesNavSlider && !imagesNavSlider.destroyed
                      ? imagesNavSlider
                      : null
                }}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={32}
                mousewheel={true}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev"
                }}
                breakpoints={{
                  0: {
                    direction: "horizontal"
                  },
                  768: {
                    direction: "horizontal"
                  }
                }}
                className="swiper-container2"
                modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
              >
                {images.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="slider__image">
                        <img src={slide.src} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </SliderStyle>
  );
}
