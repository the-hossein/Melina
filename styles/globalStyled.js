import styled from "styled-components";
const ml = "0 0 0 2.5rem";
const mr = "0 2.5rem 0 0";
export const RightMenu = styled.ul`
  li {
    margin: ${(props) => (props.lang === "fa" ? ml : mr)};
  }

  @media (max-width: 1200px) {
    li {
      margin: ${(props) => (props.lang === "fa" ? "0 0 0 2rem" : "0 2rem 0 0")};
    }
  }
`;
export const LeftMenu = styled.ul`
  li {
    margin: ${(props) => (props.lang === "fa" ? mr : ml)};
  }

  @media (max-width: 1200px) {
    li {
      margin: ${(props) => (props.lang === "fa" ? "0 2rem 0 0" : "0 0 0 2rem")};
    }
  }
`;

export const MainTitle = styled.h1`
  font-size: var(--title-Font);
  margin-bottom: 0.6rem;
  display: inline-block;
  ${(props) =>
    props.dir &&
    "text-align:var(--right)"} /* font-family: var(--mainBoldFont); */

    @media (max-width:500px) {
    font-size: var(--xxxl-font);
  }
`;

export const Section = styled.section`
  direction: ${props => props.dir ? "var(--dirRi)" : "initial"};
  padding: ${(props) =>
    props.section === "sideway"
      ? props.lang === "fa"
        ? "0 4rem 0 0"
        : "0 0 0 4rem"
      : props.section === "sidewayReverse"
      ? props.lang === "fa"
        ? "0  0 0 4rem"
        : "0 4rem 0 0 "
      : "0 4rem"};
  margin: ${(props) => (props.margin ? "2rem 0" : "0")};
  @media (max-width: 1200px) {
    padding: ${(props) =>
      props.section === "sideway"
        ? props.lang === "fa"
          ? "0 3rem 0 0"
          : "0 0 0 3rem"
        : props.section === "sidewayReverse"
        ? props.lang === "fa"
          ? "0  0 0 3rem"
          : "0 3rem 0 0 "
        : "0 3rem"};
  }
  @media (max-width: 768px) {
    padding: ${(props) =>
      props.section === "sideway"
        ? props.lang === "fa"
          ? "0 2rem 0 0"
          : "0 0 0 2rem"
        : props.section === "sidewayReverse"
        ? props.lang === "fa"
          ? "0  0 0 2rem"
          : "0 2rem 0 0 "
        : "0 2rem"};
  }
  @media (max-width: 400px) {
    padding: ${(props) =>
      props.section === "sideway"
        ? props.lang === "fa"
          ? "0 1.2rem 0 0"
          : "0 0 0 1.2rem"
        : props.section === "sidewayReverse"
        ? props.lang === "fa"
          ? "0  0 0 1.2rem"
          : "0 1.2rem 0 0 "
        : "0 1.2rem"};
  }
`;
export const Title = styled.h1`
  font-size: ${({ size }) =>
    size === "big"
      ? " var(--xxxl-font)"
      : size === "small"
      ? "var(--lg-font)"
      : "var(--xxl-font)"};
  ${({ dir }) => dir && "text-align:var(--right);"}
  ${({ bold }) => bold && "font-weight:bold;"};
`;
export const FlexBetween = styled.div`
  display: flex;
  justify-content: ${({ centerMode }) =>
    centerMode ? "center" : "space-between"};
  flex-wrap: ${({ noWrap }) => (noWrap ? "nowrap" : "wrap")};

  ${(props) => props.align && "align-items: center !important;"}

  ${({ width100 }) => width100 && "width:100%;"}
  gap: ${props => props.gap ? props.gap : "initial" };
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${({ align }) => align && "align-items:center;"}
  ${({ flexEnd }) => flexEnd && "align-items:flex-end;"}
`;
export const ColumnBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ autoHeight }) => (autoHeight ? "auto" : "100%")};

  ${(props) => props.align && "align-items: center;"}
`;

export const P = styled.p`
  font-size: ${({ size }) =>
    size === "big"
      ? "var(--xl-font)"
      : size === "medium"
      ? "var(--lg-font)"
      : "var(--smd-font)"};
  margin-bottom: 1rem;
  text-align: ${(props) =>
    props.justify ? "justify" : props.centerMode ? "center" : "var(--right)"};
  direction: var(--dirRi);
  line-height: 1.7;
  @media (max-width: 992px) {
    font-size: ${(props) =>
      props.size === "big" ? "var(--lg-font)" : "var(--smd-font)"};
  }
`;

export const SectionTitle = styled.h1`
  font-size: var(--ox-font);
  font-weight: bold;
  margin-bottom: 0.6rem;
  ${(props) => props.dir && "text-align:var(--right)"}
  ${(props) => props.centerMode && "text-align:center"}
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
export const PlacementStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  div {
    width: fit-content;
  }
  svg {
    font-size: 50pt;
    color: var(--mainColor);
  }
  p {
    color: var(--grayPen);
    font-size: var(--xl-font);
    margin: 2rem 0;
  }
`;
