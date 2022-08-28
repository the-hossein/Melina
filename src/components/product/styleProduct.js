import styled from "styled-components";
export const ProductContainer = styled.div`
  direction: var(--dirRi);
  margin: 1rem 0 5rem 0;
  h1,
  .price {
    font-size: var(--xxxl-font);
    font-weight: 500;
  }
  .fixed {
    position: sticky;
    top: 0;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    height: 100vh;
  }
  /* .image-gallery-thumbnail {
    width: 9vw;
    height: 9vw;
    span {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .image-gallery-slide.center {
    max-height: 29vw;
    min-width: 29vw;
    object-fit: cover;
    img {
      min-height: fit-content;
      object-fit: cover;
    }
  } */
  .image-gallery {
    padding: 2rem 0;

    .image-gallery-content {
      text-align: var(--left);
    }
    .image-gallery-slide-wrapper.left,
    .image-gallery-slide-wrapper.right {
      width: 37vw;
      height: 37vw;
      overflow: hidden;
      position: relative;
    }

    .image-gallery-content.left .image-gallery-slide .image-gallery-image,
    .image-gallery-content.right .image-gallery-slide .image-gallery-image {
      max-height: fit-content;
      object-fit: cover;
      width: 37vw;
      height: 37vw;
      padding: 0 1rem;
    }
    .image-gallery-thumbnail {
      width: 8.15vw;
      height: 8.15vw;
      overflow: hidden;
      position: relative;
    }
    .image-gallery-thumbnails {
      overflow: visible;
      overflow-y: clip;
    }
    .image-gallery-thumbnail.active,
    .image-gallery-thumbnail:focus {
      outline: none;
      border: 2px solid var(--grayPen);
    }

    .image-gallery-content {
      position: relative;
      overflow: hidden;
    }
  }

  @media (max-width: 992px) {
    margin: 0rem 0 5rem 0;

    .productContent {
      flex-direction: column-reverse;
      align-items: center;
      .fixed {
        position: relative;
        height: fit-content;
      }
    }
  }
`;

export const ProductInformation = styled.div`
  width: 95%;
  margin-top: 2rem;
  .price,
  h1 {
    margin-bottom: 1.5rem;
  }
  .price {
    color: var(--redColor);
  }
  li {
    font-size: var(--md-font);
    margin: 1rem 0;
  }
  button {
    float: var(--left);
    margin-top: 1rem;
    font-size: var(--xl-font);
  }
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: 400px) {
    margin-top: 0;
  }
`;

export const SimilarContainer = styled.div`
  margin-top: 6rem;
  width: 100%;
  .product {
    margin: 0.5rem 0;
    padding: 0 0.6rem;
    img {
      width: 100%;
      height: 16vw;
      border-radius: var(--productRadius);
      margin-bottom: 0.5rem;
      object-fit: cover;
    }
    h1,
    span,
    p {
      font-weight: 500;
      font-size: var(--xs-font);
    }
    h1 {
      display: -webkit-box;
      height: 14px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      width: 50%;
      overflow-wrap: anywhere;
    }
    p {
      display: -webkit-box;
      height: 37px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    button {
      min-width: 100% !important;
      height: 33px;
      font-size: var(--md-font);
    }
  }
  @media (max-width: 992px) {
    .product {
      img {
        height: 26vw;
      }
    }
  }
  @media (max-width: 768px) {
    .product {
      img {
        height: 35vw;
      }
    }
  }
  @media (max-width: 576px) {
    margin-top: 8rem;

    .product {
      width: 80%;
      margin: 1.5rem 0;
      h1,
      span,
      p {
        font-size: var(--xmd-font);
      }
      p {
        height: 70px;
        -webkit-line-clamp: 3;
      }
      h1 {
        height: 16px;
      }
      img {
        height: 55vw;
      }
    }
  }
  @media (max-width: 400px) {
    .product {
      width: 90%;
      img {
        height: 60vw;
      }
      .info {
        h1 {
          width: 60%;
        }
      }
    }
  }
`;

export const SliderStyle = styled.div`
  width: 100%;
  padding: 0 2.5rem;
  margin-top: 2rem;
  .slider .swiper-container1 {
    width: 100%;
    height: 35vw;
  }
  .slider .swiper-container2 {
    width: 100%;
    height: 100%;
  }
  .slider__flex {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    /* justify-content: space-around; */
  }
  .slider__col {
    display: flex;
    flex-direction: column;
    margin: ${(props) =>
      props.lang === "fa" ? "0 1.5rem 0 0 " : "0 0 0 1.5rem"};
  }

  .slider__thumbs {
    .swiper-slide {
      width: 8vw;
      height: 8vw !important;
      &:not(:last-child) {
        margin-bottom: 1rem !important;
      }
    }
  }
  .slider__thumbs .slider__image {
    transition: 0.25s;
  }
  .slider__thumbs .slider__image:hover {
    opacity: 1;
    border: 3px solid var(--grayPen) !important;
  }
  .slider__thumbs .swiper-slide-thumb-active .slider__image {
    opacity: 1;
    border: 2px solid var(--grayPen) !important;
  }
  .slider__images {
    width: 35vw;
    height: 35vw;
    direction: rtl;
  }

  .slider__images .slider__image img {
    transition: 3s;
  }
  .slider__images .slider__image:hover img {
    transform: scale(1.2);
  }
  .slider__image {
    width: 100%;
    height: 100%;
    /* border-radius: 30px; */
    overflow: hidden;
  }
  .slider__image img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .swiper-backface-hidden .swiper-slide {
    margin-right: 0px !important;
  }
  @media (max-width: 992px) {
    .slider__flex {
      justify-content: center;
    }
    .slider .swiper-container1 {
      width: 100%;
      height: 45vw;
    }
    .slider__images {
      width: 60vw;
      height: 45vw;
    }
    .slider__thumbs {
      .swiper-slide {
        width: 16vw;
        height: 16vw !important;
      }
    }
  }
  @media (max-width: 767.98px) {
    padding: 0;
    .slider__flex {
      flex-direction: column-reverse;
    }
    .slider__col {
      flex-direction: row;
      align-items: center;
      margin: 0;
      margin-top: 24px;
      width: 100%;
      direction: ltr;
    }
    .slider__images {
      width: 100%;
      height: 60vw;
      direction: rtl;
    }
    .slider__thumbs {
      height: 100px;
      width: 100%;
    }
    .slider__thumbs {
      .swiper-slide {
        width: 18vw !important;
        height: 16vw !important;
        &:not(:last-child) {
          margin-right: 1rem !important;
        }
      }
    }
  }
`;
