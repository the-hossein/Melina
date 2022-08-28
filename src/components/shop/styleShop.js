import styled from "styled-components";
export const ShopContainer = styled.div`
  margin: 2rem 5rem;
  direction: var(--dirRi);
  font-size: var(--xmd-font);
  img {
    border-radius: var(--productRadius);
    border: 1px solid var(--grayPen);
    object-fit: cover;
  }

  .content {
    direction: var(--dirRi);
    margin: 0.6rem 0 4rem;
    display: flex;
    min-height: 116px;
    flex-direction: column;
    justify-content: space-between;
    .productName {
      margin-bottom: 0.4rem;
    }
    h2,
    .price {
      font-size: var(--md-font);
    }
    h2 {
      display: -webkit-box;
      height: 18px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    p {
      margin-bottom: 0.5rem;
      display: -webkit-box;
      height: 90%;
      -webkit-line-clamp: 3;

      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 100%;
    }
    button {
      min-width: 115px;
      height: 28px;
      font-size: var(--xmd-font);
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 1320px) {
    .content button {
      min-width: 100px;
    }
    margin: 2rem;
  }
  @media (max-width: 1000px) {
    margin: 1.5rem;
    .content {
      button {
        min-width: 140px;
        height: 32px;
      }
    }
  }
  @media (max-width: 768px) {
    .content {
      button {
        min-width: 16vw;
        height: 32px;
      }
    }
  }
  @media (max-width: 570px) {
    .squareProduct,
    .retangleProduct {
      width: 80vw;
      margin: auto;
      img {
        height: 60vw;
      }
    }
    .content {
      button {
        width: 30vw;
        height: 35px;
      }
    }
  }
`;
export const SquareContainer = styled.div`
  width: 18vw;
  direction: var(--dirRi);
  img {
    width: 100%;
    height: 18vw;
    border-radius: var(--productRadius);
    border: 1px solid var(--grayPen);
    object-fit: cover;
  }
  .content {
    direction: var(--dirRi);
    margin: 0.6rem 0 4rem;
    display: flex;
    min-height: 116px;
    flex-direction: column;
    justify-content: space-between;
    .productName {
      margin-bottom: 0.4rem;
    }
    h2,
    .price {
      font-size: var(--md-font);
    }
    h2 {
      display: -webkit-box;
      height: 18px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    p {
      margin-bottom: 0.5rem;
      display: -webkit-box;
      height: 90%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 100%;
    }
    /* button {
      min-width: 115px;
      height: 28px;
      font-size: var(--xmd-font);
      margin-bottom: 0.5rem;
    } */
  }
  @media (max-width: 1320px) {
    width: 22.2vw;
    img {
      height: 22.2vw;
    }
  }
  @media (max-width: 1230px) {
    width: 22vw;
    img {
      height: 22vw;
    }
  }
  @media (max-width: 1000px) {
    width: 48%;
    img {
      height: 30vw;
    }
  }
  @media (max-width: 570px) {
    width: ${props => props.spital ? "100%" : ""};
  }
`;

export const RetangleContainer = styled.div`
  width: 30vw;
  img {
    width: 100%;
    height: 18vw;
  }
  @media (max-width: 1320px) {
    img {
      height: 22.2vw;
    }
  }
  @media (max-width: 1230px) {
    width: 34vw;
    img {
      height: 22vw;
    }
  }
  @media (max-width: 1000px) {
    width: 48%;
    img {
      height: 30vw;
    }
    .productInfo {
      flex-direction: column;
      .action {
        flex-direction: row;
      }

      /* p {
        -webkit-line-clamp: 2;
      } */
    }
  }
`;
