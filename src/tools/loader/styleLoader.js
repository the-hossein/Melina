import styled from "styled-components";
export const FullScreenStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: var(--whitePen);
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  span {
    top: 2rem;
    width: 75px !important;
    left: 1rem;
  }
  .loader {
    width: 100px;
    height: 100px;
    width: 100px;
    height: 100px;
    display: inline-block;
    position: relative;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    width: 100px;
    height: 100px;
    border: 2px solid var(--darkPen);
    position: absolute;
    left: 0;
    top: 0;
    animation: rotation 2.5s ease-in-out infinite alternate;
  }
  .loader::after {
    border-color: var(--mainColor);
    animation-direction: alternate-reverse;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const LoaderStyle = styled.div`
padding: 2rem;
text-align: center;
  .loader {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid var(--darkPen);
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border-left: 4px solid var(--mainColor);
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
