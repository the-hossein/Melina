import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 2.5rem 4rem;
  min-height: 80px;
  direction: var(--dirL);
  .qty {
    position: absolute;
    top: -10px;
    right: -14px;
    font-size: var(--xs-font);
    color: var(--whitePen);
    background-color: var(--mainColor);
    width: 16px;
    height: 18px;
    text-align: center;
    display: block;
    border-radius: 100%;
    padding-top: 1px;
  }
  .icons {
    a {
      position: relative;
    }
    svg {
      margin: ${({ lang }) => (lang === "fa" ? "0 2rem 0 0" : "0  0 0 2rem")};
      font-size: 20pt;
    }
  }
  nav {
    display: flex;
    align-items: center;
    span {
      width: 85px !important;

      ${(props) =>
        props.lang === "en"
          ? "margin-left: 4rem !important;"
          : "margin-right: 4rem !important;"}
    }
  }
  ul,
  .items {
    display: flex;
    align-items: center;
    font-size: var(--md-font);
    font-weight: 600;
    .active {
      border-bottom: 2px solid var(--mainColor);
      color: var(--mainColor);
    }
    li {
      &:not(:first-child) {
        ${(props) =>
          props.lang === "en"
            ? "margin-right: 2.5rem;"
            : "margin-left: 2.5rem;"}
      }
      cursor: pointer;
    }
  }
  .items li {
    display: flex;
    align-items: center;
    &:not(:first-child) {
      ${(props) =>
        props.lang === "en" ? "margin-right: 1.5rem;" : "margin-left: 1.5rem;"}
    }
    a {
      position: relative;
    }
  }
  .profile {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 0.2rem;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translatex(3rem);
    }
    100% {
      opacity: 1;
      transform: translatex(0);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translatex(0);
    }
    100% {
      opacity: 0;
      transform: translatex(3rem);
    }
  }
  @media (max-width: 992px) {
    padding: 2rem 3rem;
    ul {
      li {
        &:not(:first-child) {
          ${(props) =>
            props.lang === "en"
              ? "margin-right: 1.7rem;"
              : "margin-left: 1.7rem;"}
        }
      }
    }
    .items li {
      &:not(:first-child) {
        ${(props) =>
          props.lang === "en" ? "margin-right: 1rem;" : "margin-left: 1rem;"}
      }
    }
    nav {
      span {
        ${(props) =>
          props.lang === "en"
            ? "margin-left: 2.5rem !important;"
            : "margin-right: 2.5rem !important;"}
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 400px) {
    padding: 1.2rem;
  }
`;
export const StyledMenu = styled.nav`
  transform: ${({ open, lang }) =>
    !open && lang === "fa"
      ? "translateX(120%)"
      : !open && lang !== "fa"
      ? "translateX(-120%)"
      : ""};
  height: 100vh;
  transition: transform 0.5s ease-in-out;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(3.2px);
  /* background-color: #00000069; */
  z-index: 98;
  width: 100%;
  justify-content: var(--right);
  .menuMobile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 0;
    bottom: 0;
    ${(props) => (props.lang === "fa" ? "right:0" : "left:0")};
    min-width: 280px;
    border: var(--borderBottom);
    background-color: var(--whitePen);
    align-items: flex-end;
    ul {
      padding: 0 3rem !important;
      align-items: flex-end;
      flex-direction: column;
      font-weight: normal;
      li {
        margin: 0.5rem 0;
      }
    }
    a {
      width: 100%;
    }
    .userInfo {
      text-align: center;
      width: 70% !important;
      margin: 4rem auto 1rem;
      border-bottom: var(--borderBottom);
      padding: 1rem 0;

      img {
        width: 70px;
        height: 70px;

        border-radius: 100%;
        border: var(--borderBottom);
        margin-bottom: 0.5rem;
      }
      span {
        display: block;
        font-size: var(--md-font);
        font-weight: bold;
        margin: auto;
        width: 100% !important;
      }
    }

    .logout {
      color: var(--mainColor);
      width: 100% !important;
      margin: 1rem auto;
      text-align: center;
    }
  }
`;

export const StyledBurger = styled.button`
  position: ${({ open }) => (open ? "fixed" : "unset")};
  top: 2rem;
  ${({ lang }) => (lang === "fa" ? "right: 12rem;" : "left: 12rem;")}

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ open }) => (open ? "99" : "0")};

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--mainColor);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
