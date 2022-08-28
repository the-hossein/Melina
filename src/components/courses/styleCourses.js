import styled from "styled-components";

export const CoursesContainer = styled.div`
  p {
    color: var(--lightPen);
    width: 60%;
    ${({ lang }) =>
      lang === "fa" ? "margin: 0 0 0 auto;" : "margin: 0 auto 0 0 ;"}
  }
  .info {
    padding: 1.5rem 1.5rem 0 0;
    .des {
      height: 68px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      width: 100%;
    }
  }
  .course {
    margin: 2rem 0 4rem;
    h1 {
      font-weight: bold;
    }
    p {
      width: 100%;
      font-size: var(--xmd-font);
    }
    img,
    video {
      width: 100% !important;
      height: 380px !important;
      object-fit: cover;
      border-radius: var(--productRadius);
    }
    .details {
      border-radius: var(--productRadius);
      background-color: var(--lightGray);
      padding: 2rem 3rem;
      margin: 1.5rem 0;
      ul {
        text-align: var(--right);
        direction: var(--dirL);
        li {
          margin-bottom: 1rem;
          font-size: var(--xmd-font);
          font-weight: bold;

          svg {
            font-size: 14pt;
            margin: 0 0.5rem;
          }
          span {
            font-size: var(--xs-font);
            color: var(--lightPen);
            font-weight: normal;
          }
        }
      }
    }
    .actions {
      width: 100%;
      text-align: right;
      button {
        border-radius: var(--mainBtnRadius);
        padding: 1rem;
        font-size: var(--lg-font);
        font-weight: bold;
        &:hover {
          background-color: transparent;
          border: 1px solid var(--mainColor);
          color: var(--mainColor);
        }
      }
      .preview {
        background-color: var(--mainColor);
        border: none;
        min-width: 200px;
        color: var(--whitePen);
        margin-left: 1rem;
      }
      .detailBtn {
        background-color: transparent;
        border: 1px solid var(--lightPen);
        min-width: 180px;
        color: var(--darkPen);
      }
    }
  }
  @media (max-width: 1200px) {
    p {
      width: 70%;
    }
    .course {
      .actions {
        button {
          font-size: var(--md-font);
        }
        .preview {
          min-width: 50%;
        }
        .detailBtn {
          min-width: 40%;
        }
      }
      .details {
        padding: 2rem 1rem;
      }
    }
  }
  @media (max-width: 992px) {
    p {
      width: 100%;
    }
  }
  @media (max-width: 850px) {
    .course .details {
      justify-content: flex-end;
    }
  }
  @media (max-width: 768px) {
    .info {
      padding: 1.5rem 0;
    }
    .course {
      flex-direction: column-reverse;
      padding: 0;
      img {
        height: 45vw;
      }
      .details {
        justify-content: space-between;
        padding: 2rem 3rem;
      }
      .actions {
        button {
          height: 54px;
          margin-bottom: 0.5rem;
        }
        .preview {
          min-width: 35vw;
        }
        .detailBtn {
          min-width: 30vw;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .course {
      .details {
        justify-content: flex-end;
        padding: 2rem;
      }
    }
  }
`;
export const CourseDetailStyle = styled.div`
  direction: var(--dirRi);
  .courseIntroText {
    color: var(--lightPen);
    ${({ lang }) =>
      lang === "fa" ? "margin: 0 0 0 auto;" : "margin: 0 auto 0 0 ;"}
    margin-bottom: 2rem;
    width: 65%;
  }
  .video,
  .information {
    height: 450px !important;
  }
  .content {
    ${({ lang }) =>
      lang === "fa" ? "padding-left:1.5rem;" : "padding-right:1.5rem;"};
    .video {
      width: 100% !important;
      position: relative;
      .videoTitle {
        position: absolute;
        top: 15px;
        left: 35px;
        color: var(--whitePen);
        font-weight: normal;
        font-size: var(--xl-font);
      }
      &::before {
        transition: all 0.2s linear;
        content: "";
        width: 100%;
        height: 120px;
        position: absolute;
        background: linear-gradient(
          360deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0) 11%,
          rgba(0, 0, 0, 0.47692580450148814) 70%,
          rgba(0, 0, 0, 1) 100%
        );
        z-index: 0;
        border-radius: var(--productRadius);
      }

      svg {
        font-size: 90pt !important;
        color: var(--mainColor);
      }
      div,
      video {
        border-radius: var(--productRadius);
        object-fit: cover;
      }
    }
  }
  .information {
    padding: 1rem;

    border: var(--lightBorder);
    border-radius: var(--productRadius);
    .title {
      background-color: var(--lightGray);
      border-radius: var(--productRadius);
      padding: 1.5rem 1rem;
      margin-bottom: 0.5rem;

      .viewing {
        font-size: var(--xmd-font);
        font-weight: bold;
        color: var(--mainColor);
      }
      svg {
        font-size: 16pt;
        color: var(--mainColor);
        margin: 0 4px;
      }

      h1 {
        font-size: var(--lg-font);
        font-weight: bold;
        margin: 0 0.4rem;
        overflow-wrap: anywhere;
      }
    }

    > ul {
      overflow: scroll;
      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 1rem;
        a {
          display: flex;
          align-items: center;
          .disabled {
            pointer-events: none;
            cursor: default;
          }
        }

        h2 {
          font-size: var(--md-font);
          font-weight: bold;
          margin: 0 0.4rem;
          color: var(--lightPen);
        }
      }
    }
  }
  .generalInfo {
    margin: 0 1rem;
    div {
      font-size: var(--xmd-font);
      svg {
        font-size: 14pt;
        margin: 0 0.5rem;
      }
      span {
        :last-child {
          font-weight: bold;
          font-size: var(--xmd-font);
          color: var(--darkPen);
        }
      }
    }
  }
  .similar {
    border-bottom: var(--borderBottom);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 992px) {
    .courseIntroText {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .content {
      padding: 0 0 2rem 0;
      .video {
        .videoTitle {
          font-size: var(--md-font);
        }
        height: 60vw !important;
        svg {
          font-size: 50pt !important;
        }
      }
    }
    .generalInfo {
      margin: 0;
    }
  }
  @media (max-width: 450px) {
    .generalInfo {
      flex-direction: column;
    }
    .information .title h1 {
      width: fit-content;
      display: inline-block;
    }
  }
`;

export const Description = styled.div`
  padding: 2.5rem 0 0 0;
  h1 {
    margin-bottom: 1.5rem;
  }
  ul {
    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
      }
      h2 {
        font-size: var(--md-font);
        font-weight: bold;
        margin: 0 0.5rem;
      }
      span {
        font-size: var(--xmd-font);
        color: var(--grayPen);
      }
    }
  }
`;

export const BuyCourseStyle = styled.div`
  .price {
    font-size: var(--xxl-font);
    font-weight: bold;
    direction: var(--dirRi);
    display: block;
    text-align: center;
    margin-bottom: 1rem;
  }
  button {
    margin: auto;
  }
`;

export const SimilarCourseStyle = styled.div`
  width: 100%;
  border: ${({ noBorder }) => (noBorder ? "none" : "var(--lightBorder)")};
  border-radius: var(--productRadius);
  padding: 0.5rem;
  margin: ${({ noBorder }) => (noBorder ? "1.5rem 0" : "0.5rem 0")};
  height: 160px;
  h1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    width: 100% !important;
    overflow-wrap: anywhere;
  }
  > div {
    height: 100%;
    ${({ lang }) => lang === "en" && "flex-direction:row-reverse"};
  }
  img {
    width: 40%;
    height: 100%;
    border-radius: var(--productRadius);
  }
  .info {
    width: 60%;
    padding: 0 0.5rem 0 1.5rem;
    svg {
      font-size: 14pt;
    }
  }
  ul {
    .action {
      display: flex;
      align-items: center;
      svg {
        font-size: 24pt;
        color: ${({ noBorder }) =>
          noBorder ? "var(--greenColor)" : "var(--mainColor)"};
      }
      a {
        font-size: var(--xmd-font);
        font-weight: bold;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        width: 100% !important;
        overflow-wrap: anywhere;
        cursor: pointer;
      }
    }
    li {
      &:not(:last-child) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      > span {
        font-size: var(--xmd-font);
        font-weight: bold;
      }
    }
  }
`;
