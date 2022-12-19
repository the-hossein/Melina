import styled from "styled-components";
export const AboutUsContainer = styled.div`
  p {
    text-align: justify;
  }

  .content {
    direction: var(--dirRi);
    position: relative;
    p {
      margin-top: 2rem;
      width: 58vw;
    }
    span {
      position: absolute !important;
      top: 0;
      ${(props) => (props.lang === "fa" ? " left: 0;" : "right: 0;")}
      width: 25vw !important;
      height: 40vw !important;
      border-top-right-radius: 64% 38%;
      border-top-left-radius: 64% 38%;
      border-bottom-right-radius: 64% 38%;
      border-bottom-left-radius: 64% 38%;
    }
  }

  .partTwo {
    display: flex;
    direction: var(--dirRi);
    margin-bottom: 3rem;
    margin-top: 7rem;
    span:first-child {
      width: 20vw !important;
      height: 35vw !important;
      ${(props) =>
        props.lang === "fa"
          ? "border-top-left-radius: 52% 31%;border-bottom-right-radius: 52% 31%;"
          : "border-top-right-radius: 52% 31%;border-bottom-left-radius: 52% 31%;"}
    }
    .aboutUsText {
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: space-between;
    }
    .part1 {
      margin-top: -2.5rem;
      width: 46vw;
      padding: 0 3rem;
    }

    .part2 {
      margin-top: 2.5rem;
      padding: 0 3rem;
      width: 60vw;
    }
  }
  @media (max-width: 992px) {
    .partTwo {
      .part1,
      .part2 {
        width: 100%;
        margin-top: 1rem;
        padding: 0 1rem;
      }
    }
  }
  @media (max-width: 500px) {
    .content {
      p{
        width: 100%;
      }
      span {
        display: block !important;
        position: relative !important;
        width: 50vw !important;
        height: 70vw !important;
        margin: auto !important;
      }
    }
    .partTwo{
      margin-top:1rem;
      span{
        display:none !important
      }
    }
  }
`;
