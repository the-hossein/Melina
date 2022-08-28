import styled from "styled-components";

export const MainDivSlider = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  direction: rtl !important;
  .swiper_save_product {
    width: 100%;
    height: 100%;
    padding-bottom: 4rem;
    .swiper-pagination-bullet-active {
      background-color: var(--mainColor) !important;
    }
    .swiper-slide {
      background: inherit;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
`;
