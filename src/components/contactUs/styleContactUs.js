import styled from "styled-components";
export const ContactUSContainer = styled.div`
  direction: var(--dirRi);
  p {
    width: 80%;
    margin-top: 2rem;
    text-align: justify;
  }
  .scroller {
    position: sticky;
    top: 0;
    bottom: 0;
    ${(props) => (props.lang === "fa" ? "left: 0;" : "right: 0;")}

    span {
      width: 100% !important;
    }
  }
  ul {
    margin-top: 7.5rem;
    li {
      font-family: var(--mainBoldFont) !important;
      font-size: var(--xl-font);
      margin-bottom: 1.5rem;
      svg {
        font-size: var(--xxl-font);
        &:last-child {
          margin: 0 1rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .scroller {
      display: none;
    }
    p {
    width: 100%;}
    ul{
    margin-top: 4rem;
      
    }
  }
`;
