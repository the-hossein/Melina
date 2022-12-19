import styled from "styled-components";
export const Scroller = styled.div`
  display: block;
  width: 33.3%;
  span {
    display: block !important;

    height: 19vw !important;
    position: sticky;
    top: 0;
    bottom: 0;
  }
  ${(props) =>
    props.position === "sticky" &&
    "display: block;width: 33.3%;position: sticky;top: -75px; margin-top: -5rem; bottom: 0;"}
    
`;
