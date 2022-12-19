import React from "react";
import { MainDivSlider } from "./SliderSaveStyle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SquareProduct from "../shop/SquareProduct";
import CardSaved from "./cardSaved/CardSaved";

const SliderSaveItem = ({ saveProduct }) => {
  return (
    <MainDivSlider>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          780: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          845: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="swiper_save_product"
      >
        {saveProduct.map((item) => (
          <SwiperSlide key={item.product.id}>
            <CardSaved data={item.product} saveId={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainDivSlider>
  );
};

export default SliderSaveItem;
