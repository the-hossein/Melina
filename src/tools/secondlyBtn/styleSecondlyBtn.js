import styled from "styled-components";
export const SecondlyBtnContainer = styled.button`
  border: none;
  min-width: ${(props) => (props.size === "small" ? "155px" : "200px")};
  height: ${(props) => (props.height === "short" ? "40px;" : "50px;")};
  padding: 0.3rem;
  border: 1px solid
    ${({ borderColor }) =>
      borderColor ? "var(--mainColor)" : "var(--grayPen)"};

  border-radius: var(--mainBtnRadius);
  color: ${(props) =>
    props.fill
      ? "var(--whitePen)"
      : props.borderColor
      ? "var(--mainColor)"
      : "var(--grayPen)"};
  background-color: ${(props) =>
    props.fill ? "var(--grayPen)" : "transparent"};
  &:hover {
    background-color: ${(props) =>
      props.gray ? "var(--grayPen)" : "var(--pinkColor)"};
    border: 1px solid
      ${(props) => (props.gray ? "var(--grayPen)" : "var(--pinkColor)")};
    color: var(--whitePen);
  }
`;
