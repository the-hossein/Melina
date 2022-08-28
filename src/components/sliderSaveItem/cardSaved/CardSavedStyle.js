import styled from "styled-components";

export const Card = styled.div`
  direction: var(--dirRi);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: var(--md-font);
  * {
    font-size: inherit;
  }
  .holder_image {
    width: 100% !important;
    height: 18vw !important;
    margin-bottom: 0.8rem;
    img {
      width: 100% !important;
      height: 100% !important;
      border-radius: var(--productRadius);
      border: 1px solid var(--grayPen);
      object-fit: cover;
    }
  }

  .name_product {
    display: -webkit-box;
    margin-bottom: 0.4rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .description {
    width: 100%;
    text-align: justify;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .btn_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      min-width: 115px;
      height: 38px;
      font-size: var(--xs-font);
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 845px) {
    .holder_image {
      width: 100% !important;
      height: 30vw !important;
    }
  }

  @media (max-width: 540px) {
    .holder_image {
      width: 100% !important;
      height: 65vw !important;
    }
  }
`;
