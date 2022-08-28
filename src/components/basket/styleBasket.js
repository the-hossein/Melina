import styled from "styled-components";
export const BasketContainer = styled.div`
  direction: var(--dirRi);
  .choseAddress {
    ${({ lang }) =>
      lang === "fa" ? "padding-left:3rem;" : "padding-right:3rem;"}

    >h1 {
      margin-bottom: 2.5rem;
    }
  }
  .factor {
    font-weight: bold;
    font-size: var(--md-font);
    ${({ lang }) =>
      lang === "fa"
        ? "border-right:var(--lightBorder);padding-right:2rem;"
        : "border-left:var(--lightBorder);padding-left:2rem;"}
    border-width: medium;

    .currency,
    .name {
      color: var(--lightPen);
      margin-bottom: 0.5rem;
    }
    .currency {
      font-size: var(--xs-font);
      padding: 0.3rem;
    }
    .price {
      font-size: var(--lg-font);
    }
    .qty {
      width: 28px;
      height: 26px;
      background-color: var(--greenColor);
      color: var(--whitePen);
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 0.3rem;
    }
    .items {
      border-bottom: var(--lightBorder);
      border-bottom-width: 80%;
    }
    .totalSum {
      font-size: 17pt;
    }
    .Payable {
      color: var(--greenColor);
      font-size: 22pt;
    }
    button {
      font-size: var(--xl-font);
      margin: 3rem 0;
    }
  }
  @media (max-width: 992px) {
    .choseAddress {
      padding: 0;
    }
    .factor {
      border: none;
      padding: 0;
    }
  }
`;

export const BasketProductStyle = styled.div`
  padding: 0.6rem;
  h1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    direction: var(--dirRi);
    width: 100% !important;
    overflow-wrap: anywhere;
  }
  .product {
    border: var(--lightBorder);
    border-radius: var(--productRadius);
    padding: 0.7rem;
    img {
      width: 35%;
      height: 126px;
      border-radius: var(--productRadius);
    }
    svg {
      cursor: pointer;
    }
    .info {
      width: 65%;
      height: auto;
      ${({ lang }) =>
        lang === "fa" ? "padding-left: 0.5rem;" : "padding-right: 0.5rem;"}
      ul {
        font-size: var(--xmd-font);
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
      }
      .delete {
        background-color: var(--mainColor);
        border-radius: 6px;
        color: var(--whitePen);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 26px;
        ${({ lang }) =>
          lang === "fa" ? "margin-left:6px;" : "margin-right:6px;"}
        svg {
          font-size: var(--lg-font);
        }
      }
      .options {
        font-size: var(--xs-font);
        border: 3px solid var(--lightGray);
        border-radius: var(--mainBtnRadius);
        width: 100%;
        button:disabled {
          opacity: 50%;
        }
        button:last-child,
        button:first-child {
          color: var(--whitePen);
          background-color: var(--greenColor);
          border-radius: 6px;
          border: 3px solid var(--lightGray);
          display: block;

          padding: 0 3px;
          svg {
            font-size: var(--xmd-font);
          }
        }
      }
      .css-1yi18gd-MuiCircularProgress-root {
        color: var(--mainColor);
        margin: 0 6px;
      }
    }
  }
`;
