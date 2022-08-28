import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FlexBetween,
  MainTitle,
  Section,
  SectionTitle,
  Title
} from "../../../styles/globalStyled";
import RetangleProduct from "./RetangleProduct";
import SquareProduct from "./SquareProduct";
import { ShopContainer } from "./styleShop";

const Shop = ({ datas }) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    var sliced = [];
    for (var i = 0; i < datas.length; i += 3) {
      sliced.push(datas.slice(i, i + 3));
      setProduct(sliced);
    }
    var position = 1;
    for (var i = 0; i < sliced.length; i++) {
      if (position === 1) {
        position = 2;
      } else if (position === 2) {
        position = 3;
      } else {
        position = 1;
      }

      sliced[i].push(position);
    }
  }, []);
  return (
    <Section margin={true}>
      <SectionTitle dir={true}>{t("shop")}</SectionTitle>
      <ShopContainer>
        <FlexBetween>
          {product.map((item) => (
            <>
              {item.slice(0, 3).map((itm, index) => {
                if (Object.keys(itm).length > 1) {
                  return item[3] === index + 1 ? (
                    <RetangleProduct data={itm} />
                  ) : (
                    <SquareProduct data={itm} />
                  );
                }
              })}
            </>
          ))}
        </FlexBetween>
      </ShopContainer>
    </Section>
  );
};

export default Shop;
