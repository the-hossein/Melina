import styled from "styled-components";

export const HeroContainer = styled.div`
  direction: var(--dirL);
  margin-bottom: 14rem;
  .heroImages {
    position: relative;
    img {
      object-fit: cover;
    }
    span:first-child {
      width: 430px !important;
      height: 630px !important;
      border-top-left-radius: 50% 35%;
      border-top-right-radius: 50% 35%;
    }
    span:last-child {
      width: 245px !important;
      height: 370px !important;
      position: absolute !important;
      bottom: -140px;
      ${({ lang }) =>
        lang === "fa"
          ? "right:-106px;border-bottom-right-radius:54% 33%;"
          : "left:-106px;border-bottom-left-radius:54% 33%;"}
    }
  }

  @media (max-width: 1200px) {
    .heroImages {
      span:first-child {
        width: 35vw !important;
        height: 53vw !important;
      }
      span:last-child {
        width: 18vw !important;
        height: 28vw !important;
        bottom: -7vw;

        ${(props) =>
          props.lang === "fa"
            ? "right:-9vw;border-bottom-right-radius:54% 33%;"
            : "left:-9vw;border-bottom-left-radius:54% 33%;"}
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 6rem;
    .intro {
      flex-direction: column-reverse;
    }
    .heroImages {
      span:first-child {
        width: 44vw !important;
        height: 64vw !important;
      }
      span:last-child {
        width: 21vw !important;
        height: 34vw !important;
      }
    }
  }
`;
export const Mel = styled.div`
  position: relative;
  width: 48%;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    float: var(--right);
    margin: 2rem 0 6rem 0;
  }

  p {
    line-height: 2;
    margin-top: 1rem;
  }
  .socialMedia {
    width: 68%;
    margin: ${(props) => (props.lang === "en" ? "0 auto 0 0 " : "0 0 0 auto")};
    svg {
      font-size: 24pt;
    }
    h4 {
      font-family: "RobotoRegular";
      font-size: var(--xl-font) !important;
      margin: 0 0.8rem 0 0;
    }
  }
  span:nth-child(1) {
    width: 550px !important;
    height: 240px !important;
    position: absolute !important;
    top: 0;
    ${(props) =>
      (props.lang === "en" && !props.reverse) ||
      (props.lang === "fa" && props.reverse)
        ? "left:-55px;"
        : ((props.lang === "en" && props.reverse) || props.lang === "fa") &&
          "right:-55px;"}
    z-index: -1;
  }
  span:not(:first-child) {
    position: absolute !important;
    width: 45px !important;
    height: 62px !important;
  }
  span:nth-child(2) {
    top: 6vw;

    ${(props) =>
      (props.lang === "en" && !props.reverse) ||
      (props.lang === "fa" && props.reverse)
        ? "right: -8vw;"
        : ((props.lang === "en" && props.reverse) || props.lang === "fa") &&
          "left: -8vw;"}
  }
  span:nth-child(3) {
    bottom: 4vw;

    ${(props) =>
      (props.lang == "en" && props.reverse) || props.lang == "en"
        ? "right:9vw;"
        : ((props.lang === "en" && props.reverse) || props.lang === "fa") &&
          "left: 9vw;"}
    transform: rotate(318deg);
  }
  @media (max-width: 1200px) {
    padding-top: 7vw;
    span:nth-child(1) {
      width: 40vw !important;
      height: 20vw !important;
      right: -3vw;
    }
    .socialMedia {
      width: 91%;
      svg {
        font-size: 20pt;
      }
      h4 {
        font-size: var(--lg-font);
      }
    }
  }
  @media (max-width: 992px) {
    .socialMedia {
      svg {
        font-size: 20pt;
      }
      h4 {
        font-size: var(--md-font);
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 10vw;
    .socialMedia {
      width: 100%;
      margin-bottom: 3rem;
    }
    span:nth-child(1) {
      width: 53vw !important;
      height: 25vw !important;
    }
    span:nth-child(2) {
      ${(props) =>
        (props.lang === "en" && !props.reverse) ||
        (props.lang === "fa" && props.reverse)
          ? "right: 6vw;"
          : ((props.lang === "en" && props.reverse) || props.lang === "fa") &&
            "left: 6vw;"}
    }
    span:nth-child(3) {
      bottom: 4vw;

      ${(props) =>
        (props.lang == "en" && props.reverse) || props.lang == "en"
          ? "right:16vw;"
          : ((props.lang === "en" && props.reverse) || props.lang === "fa") &&
            "left: 16vw;"}
      transform: rotate(318deg);
    }
    button {
      margin: 2rem 0 3rem 0;
    }
  }
`;
export const VideoSliderContainer = styled.div`
  height: 34vw;
  width: 100%;
  margin: auto;
  margin-bottom: 12rem;
  margin-top: 1.5rem;
  svg {
    font-size: 80pt !important;
  }
  video {
    object-fit: cover;
  }
  .react-player__preview {
    background-position: unset !important;
  }
  .swiper-backface-hidden .swiper-slide {
    padding: 0.7rem 5rem;
    position: relative;

    &::after {
      display: block;
      content: "";
      width: 8vw;
      height: 8vw;
      position: absolute;
      top: 0;
      right: 4.3rem;
      border-top: 2px solid var(--mainColor);
      border-right: 2px solid var(--mainColor);
    }
    &::before {
      display: block;
      content: "";
      width: 8vw;
      height: 8vw;
      position: absolute;
      bottom: 0;
      left: 4.3rem;
      border-bottom: 2px solid var(--mainColor);
      border-left: 2px solid var(--mainColor);
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--mainColor) !important;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
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

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 24pt !important;
    font-weight: bold !important;
  }

  .slider {
    padding: 32px;
    color: #fff;
  }

  .slider .swiper-container1 {
    width: 100%;
    height: 100%;
  }

  .slider .swiper-container2 {
    width: 100%;
    height: 100%;
  }

  .slider__flex {
    display: flex;
    align-items: flex-start;
  }

  .slider__col {
    display: flex;
    flex-direction: column;
    width: 150px;
    margin-right: 32px;
  }

  .slider__prev,
  .slider__next {
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .slider__prev:focus,
  .slider__next:focus {
    outline: none;
  }

  .slider__thumbs {
    height: calc(400px - 96px);
  }

  .slider__thumbs .slider__image {
    transition: 0.25s;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.5;
  }

  .slider__thumbs .slider__image:hover {
    opacity: 1;
  }

  .slider__thumbs .swiper-slide-thumb-active .slider__image {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    opacity: 1;
  }

  .slider__images {
    height: 400px;
    width: 100%;
  }

  .slider__images .slider__image img {
    transition: 3s;
  }

  .slider__images .slider__image:hover img {
    transform: scale(1.1);
  }

  .slider__image {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
  }

  .slider__image img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  @media (max-width: 767.98px) {
    height: 46vw;
    margin-bottom: 10rem;
    .slider__flex {
      flex-direction: column-reverse;
    }
    svg {
      font-size: 38pt !important;
    }
    .swiper-backface-hidden .swiper-slide {
      padding: 0.7rem 2rem;
      &::after {
        right: 1.3rem;
      }
      &::before {
        left: 1.3rem;
      }
    }
    .slider__col {
      flex-direction: row;
      align-items: center;
      margin-right: 0;
      margin-top: 24px;
      width: 100%;
    }

    .slider__images {
      width: 100%;
    }

    .slider__thumbs {
      height: 100px;
      width: calc(100% - 96px);
      margin: 0 16px;
    }
    .swiper-button-next {
      right: 4px;
    }
    .swiper-button-prev {
      left: 4px;
    }
  }
  video {
    width: 100%;
    height: 100%;
    background-color: var(--whitePen);
    object-fit: cover;
    /* padding: 0 4rem; */
  }
  button {
    /* margin: 2rem 5rem 2rem 0;
    float: right; */
    margin: 1.5rem auto;
  }
`;

export const WelcomeToShopStyle = styled.div`
  direction: var(--dirL);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 0 12rem;
  .shopImg {
    position: relative;
    ${({ lang }) =>
      lang === "fa" ? "margin-left:auto;" : "margin-right:auto;"}
    span:first-child {
      width: 18vw !important;
      height: 28vw !important;

      ${(props) =>
        props.lang === "en"
          ? "border-bottom-left-radius: 64% 38%;"
          : "border-bottom-right-radius: 64% 38%;"}
      position: absolute !important;
      top: 27vw;

      ${(props) => (props.lang === "en" ? "right: -12vw;" : "left: -12vw;")}
      z-index: 1;
      transition-duration: 0.4s;
      transition-timing-function: linear;
      /* &:hover {
        transform: scale(1.1);
        filter: grayscale(100%);
      } */
    }
    span:last-child {
      width: 30vw !important;
      ${(props) =>
        props.lang === "en"
          ? "border-top-right-radius: 56% 35%;"
          : "border-top-left-radius: 56% 35%;"}
      height: 45vw!important;
      transition-duration: 0.4s;
      transition-timing-function: linear;
      /* &:hover {
        border-top-left-radius: 57% 40%;
        border-top-right-radius: 58% 37%;
        border-bottom-right-radius: 57% 40%;
        transform: scale(1.09);
      } */
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 4rem 0 8rem 0;
    .shopImg {
      position: relative;
      span:first-child {
        width: 32vw !important;
        height: 52vw !important;
        top: 39vw;
        left: -21vw;
      }
      span:last-child {
        width: 45vw !important;
        height: 80vw !important;
      }
    }
  }
`;
export const JOinJurnalStyle = styled.div`
  background-color: var(--lightGray);
  padding: 5rem 4rem;
  border-radius: 12px;
  margin: 2rem 0;
  direction: var(--dirL);
  h1 {
    font-size: var(--xxxl-font);
  }

  .joinUsForm {
    align-items: center;
    display: flex;
    button {
      margin: 0 0.5rem;
      height: 68px;
      min-width: 170px;
    }
  }

  p {
    color: var(--grayPen);
    font-size: var(--lg-font);
    ${({ lang }) =>
      lang === "fa" ? "margin-left:2rem;" : "margin-right:2rem;"}
  }
  @media (max-width: 992px) {
    .joinUs {
      flex-direction: column-reverse;
      place-items: center;
      .joinUsForm {
        margin-top: 1.5rem;
      }
      p{
        margin: 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    .joinUsForm {
      button {
        height: 60px;
        min-width: 30%;
      }
    }
  }
  @media (max-width: 450px) {
    padding: 2rem 1rem;

    .joinUsForm {
      flex-direction: column-reverse;
      button {
        margin-top: 1rem;
        min-width: 60%;
      }
    }
  }
`;
