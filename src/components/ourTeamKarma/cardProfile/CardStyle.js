import styled from "styled-components";

export const CardMain = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .holder_image_profile {
    width: 80px;
    height: 80px;
    span {
      width: 100% !important;
      height: 100% !important;
      img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
  .description_profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: var(--smd-font);
    }
    p {
      max-width: 120px;
      font-size: var(--xs-font);
      text-align: center;
    }
  }

  @media (max-width: 468px) {
    width: 40%;
  }


`;
