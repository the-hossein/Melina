import styled from "styled-components";
export const ProfileContainer = styled.div`
  direction: var(--dirRi);
  margin: 2rem 0;
  .userInfo {
    ${({ lang }) =>
      lang === "fa" ? "padding-left: 3rem;" : "padding-right: 3rem;"}
    margin: 3rem 0;
    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      object-fit: cover;
    }
    ul {
      .username {
        font-size: var(--lg-font);
      }
      li {
        margin: 0 2rem;
        margin-bottom: 1rem;
        font-size: var(--xmd-font);
        span:last-child {
          font-weight: bold;
        }
      }
    }
    .info {
      button {
        min-width: 80px;
        margin: auto;
      }
    }
    button {
      min-width: 100px;
      min-height: 38px;
      height: fit-content;
      font-size: var(--xmd-font);
    }
  }
  .userCourse {
    ${({ lang }) =>
      lang === "fa"
        ? "padding-right: 1rem;border-right: var(--lightBorder);"
        : "padding-left: 1rem;border-left: var(--lightBorder);"}

    border-width: medium;
    height: 30vw;
    overflow: scroll;
    .more {
      font-size: var(--xmd-font);
      font-weight: bold;
      text-decoration: underline;
      color: var(--mainColor);
      text-align: center;
      display: block;
      margin-top: 2rem;
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    .userCourse,
    .userInfo {
      height: auto;
      padding: 0;
    }
  }

  @media (max-width: 550px) {
    .userInfo {
      img {
        margin: 1rem auto !important;
      }
    }
  }
  @media (max-width: 445px) {
    .userInfo {
      img {
        margin: 1rem auto !important;
      }
      ul {
        width: 100%;
        li {
          text-align: center;
        }
      }
    }
  }
`;
export const AddressStyle = styled.div`
  background-color: var(--lightGray);
  border-top-right-radius: 26px 60%;
  border-bottom-right-radius: 26px 60%;
  border-top-left-radius: 26px 60%;
  border-bottom-left-radius: 26px 60%;
  border: 1px solid
    ${({ active }) => (active ? "var(--greenColor)" : "var(--mediumGray)")};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45px;
  width: 100%;
  padding: 0.2rem 1rem;
  font-size: var(--xmd-font);
  margin-bottom: 1rem;

  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    ${({ active }) => active && "color:var(--greenColor);"}
  }
  span {
    font-family: var(--mainFont);
    font-size: var(--xmd-font);
  }
  p {
    margin: 0 0.3rem;
    font-size: var(--xs-font);
  }
`;
export const SuggestedStyle = styled.div`
  .item {
    padding: 0.5rem;
    border: var(--lightBorder);
    margin: 0.6rem;
    border-radius: var(--productRadius);
    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-radius: var(--productRadius);
      margin-bottom: 1rem;
    }
    h1 {
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      width: 100% !important;
      overflow-wrap: anywhere;
      direction: var(--dirRi);
    }
    span {
      font-size: var(--xmd-font);
      direction: var(--dirRi);
    }
    button {
      background-color: var(--greenColor);
      min-height: 36px;
      border: 1px solid var(--greenColor);
      margin-top: 1rem;
      font-size: var(--xmd-font);
      font-weight: bold;
      min-width: 100%;
      &:hover {
        background-color: transparent;
        color: var(--greenColor);
      }
    }
  }
  @media (max-width: 992px) {
    .item img {
      height: 230px;
    }
  }
`;
export const EditProfileStyle = styled.div`
  margin: 2rem 0;
  .userProfileImg {
    position: relative;
    display: inline-block;
    svg {
      position: absolute;
      bottom: 6px;
      left: 2px;
      font-size: 16pt;
      background-color: var(--whitePen);
      color: var(--mainColor);
      width: 33px;
      height: 33px;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid var(--mainColor);
    }
  }
  .updateForm {
    margin: 1rem 0;
    width: 50%;
    label {
      margin-top: 1rem;
      font-weight: bold;
    }
  }
  #uploadImage {
    display: none;
  }
`;
