import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem 3rem;
  direction: var(--dirRi);
  .holder_image {
    width: 50%;
    height: 70vh !important;
    span {
      width: 100% !important;
      height: 100% !important;
      img {
        transform: scale(1.2);
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        filter: drop-shadow(10px 5px 7px #00000044);
        animation: showPic 0.8s linear;
      }
    }
    @keyframes showPic {
      from {
        transform: translateY(-50%);
      }
      to {
        transform: translateY(0) scale(1.2);
      }
    }
  }
  .holder_cardProfile {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 990px) {
    flex-direction: column-reverse;
    .holder_image {
      width: 100%;
      height: 70vh !important;
    }
    .holder_cardProfile {
      width: 100%;
    }
  }
  @media (max-width: 468px) {
    padding: 0 1rem;
    .holder_image {
      height: 40vh !important;
      img {
        transform: scale(1.2) !important;
      }
    }
    .holder_cardProfile {
      justify-content: space-between;
    }
  }
`;
