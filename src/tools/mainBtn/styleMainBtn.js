import styled from "styled-components";
const mainColor = "var(--mainColor)";
export const MainBtnContainer = styled.button`
  min-width: ${(props) => (props.size === "big" ? "280px" : "230px")};
  min-height: ${(props) => (props.size === "big" ? "62px" : "54px")};
  border: ${(props) =>
    props.color === "gray"
      ? "1px solid var(--mediumGray)"
      : `1px solid ${mainColor}`};
  display: block;
  ${({ alignSelf }) => alignSelf && "align-self: center;"}
  padding: 0.5rem;
  background-color: ${(props) =>
    props.color === "gray" ? "var(--mediumGray)" : mainColor};
  border-radius: var(--mainBtnRadius);
  color: ${(props) =>
    props.color === "gray" ? "var(--grayPen)" : "var(--whitePen)"};
  font-size: var(--md-font);
  &:hover {
    background-color: transparent;
    color: ${mainColor};
  }
  @media (max-width: 768px) {
    min-width: ${(props) => (props.size === "big" ? "230px" : "190px")};
    min-height: ${(props) => (props.size === "big" ? "58px" : "50px")};
  }
`;
