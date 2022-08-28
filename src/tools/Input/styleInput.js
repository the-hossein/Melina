import styled from "styled-components";
export const InputStyle = styled.input`
  background-color: var(--whitePen);
  box-shadow: ${(props) =>
    props.styleInput === "outline" ? "none" : "0px 2px 3px #dedede inset"};
  ${(props) =>
    props.styleInput === "outline"
      ? "border: none;border-bottom:1px solid var(--grayPen);"
      : "border:none;"}
  border-radius: ${(props) => (props.styleInput === "outline" ? "0px" : "8px")};
  height: ${(props) => (props.styleInput === "outline" ? "50px" : "68px")};
  width: 100%;
  outline: rgb(0, 0, 0);
  padding: ${(props) => (props.styleInput === "outline" ? "0" : " 0 1.5rem")};
  text-align: var(--right);
  &::placeholder {
    text-align: var(--right);
  }
  @media (max-width: 768px) {
    height: ${(props) => (props.styleInput === "outline" ? "50px" : "60px")};
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  .resend {
    position: absolute;
    top: 0.4rem;
    ${({ lang }) => lang === "fa" ?"left:0;": "right:0;"}
    color: var(--blueColor);
    font-size: var(--smd-font);
    .displayedTime {
      > div {
        display: flex;
        ${({ lang }) => lang === "fa" && "flex-direction: row-reverse;"}
      }
    }
  }
  input {
    border-color: ${(props) => props.valiStatus && "var(--redColor)"};
    color: ${(props) => props.valiStatus && "var(--redColor)"};
  }
  span {
    text-align: var(--right);
    display: block;
    font-size: var(--xs-font);
    margin-top: 0.3rem;
    font-weight: normal;
    padding: 0.2rem 0;
    direction: var(--dirRi);
  }
  .error {
    color: var(--redColor);
  }
  .loader {
    color: var(--greenColor);
  }
`;
