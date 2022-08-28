import styled from "styled-components";
export const FooterContainer = styled.footer`
  margin-top: 6rem;
  a:hover {
    color: var(--mainColor);
  }
  .contactUs {
    border-bottom: var(--borderBottom);
    padding: 1rem 0;
    h3 {
      font-size: var(--lg-font);
      margin: 0;
    }
  }
  svg {
    margin: 0 0.5rem;
    font-size: 22pt;
  }

  .footerDetail {
    justify-content: space-between;
    padding: 2rem 0;
    .melCosmetic {
      align-items: flex-end;
      span {
        width: 280px !important;
        height: 80px !important;
        margin-bottom: 1.5rem !important;
      }
      svg {
        font-size: 16pt;
      }
      h4 {
        margin: 0;
        font-size: var(--xmd-font);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        direction: var(--dirRi);
        width: 280px !important;
        overflow-wrap: anywhere;
      }
      .address {
        display: flex;
        align-items: center;
        direction: var(--dirL);
      }
    }
    .items {
      display: flex;
      justify-content: space-between;
      ul {
        list-style-type: disc;
        direction: var(--dirRi);

        li {
          min-width: 33%;
          ::marker {
            color: var(--mainColor);
          }
        }
      }
    }
    /* .enamad {
      img {
        width: 180px;
        height: 110px;
      }
    } */
  }
  .copyRight {
    color: #aeaeae;
    font-size: 10pt;
    display: block;
    width: 100%;
    text-align: center;
    direction: var(--dirRi);
    padding-bottom: 2rem;
    a {
      padding: 0 4px;
      display: inline-block;
      &:hover {
        color: var(--mainColor);
      }
    }
  }

  @media (max-width: 992px) {
    .footerDetail ul {
      li {
        min-width: 50%;
      }
    }
    .melCosmetic span {
      width: 100% !important;
      height: 9vw !important;
    }
  }
  @media (max-width: 768px) {
    .enamad {
      text-align: center;
    }
    .footerDetail {
      justify-content: center;
      align-items: center;
      .items {
        margin: 1rem 0;
      }
      .melCosmetic {
        align-items: center;
      }
    }
  }
`;
