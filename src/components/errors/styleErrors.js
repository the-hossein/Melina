import styled from "styled-components";

export const Page404Container = styled.div`
  display: flex;
  > span {
    width: 26vw !important;
    overflow: unset !important;

    img {
      margin: 0 0 0 4rem !important;
    }
  }
  div {
    text-align: var(--right);

    h1 {
      font-size: 100pt;
      font-weight: bold;
      color: var(--mainColor);
    }
    p {
      font-weight: bold;
      font-size: var(--xl-font);
      direction: var(--dirRi);
    }
    span,
    a {
      font-size: var(--md-font);
    }
    a {
      color: var(--mainColor);
      margin-top: 3rem;
    }
  }
  @media (max-width: 992px) {
    > span {
      width: 40vw !important;
      overflow: unset !important;
    }
  }
  @media (max-width: 600px) {
 flex-direction:column-reverse;
 justify-content: center;
 align-items: center;
  span img {
      margin:0!important;
    }
  }
`;
