import styled from "styled-components";
export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3.2px);
  z-index: 100;
  direction:var(--dirRi);
  .success {
    color: var(--greenColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    svg {
      color: var(--greenColor);
      font-size: 42pt;
    }
    p {
      font-size: var(--xl-font);
      font-weight: bold;
      margin-top: 0.5rem;
    }
  }
  .loginForm {
    width: ${({ width }) => width};
    padding: 2rem 2.5rem;
    background-color: var(--whitePen);
    border: var(--borderBottom);
    border-radius: var(--productRadius);
    .form {
      margin: 3rem 0 1rem;
      width: 100%;
    }
    h5 {
      font-size: var(--xxl-font);
      font-weight: bold;
      text-align: var(--right);
      margin-top: 1rem;
    }

    button {
      margin: 3rem auto 0;
      span {
        width: 26px;
        height: 26px;
      }
    }
  }
  @media (max-width: 500px) {
    .loginForm {
      width: 95%;
    }
  }
`;
