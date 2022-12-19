import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Column, ColumnBetween, FlexBetween } from "../../../styles/globalStyled";
import { persianNumber } from "../../tools/helper";

const FactorItem = ({ data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const basket = useSelector((state) => state.stateBasket);

  return (
    <FlexBetween className="mt-4 mb-4" noWrap>
      <ColumnBetween>
        {basket.basketType === 0 ? (
          <span className="name">
            {lang === "fa" ? data.product.title : data.product.titleEn}
          </span>
        ) : (
          <span className="name">
            {lang === "fa" ? data.course.title : data.course.titleEn}
          </span>
        )}

        <span className="total">{t("totalPrice")}</span>
      </ColumnBetween>
      <ColumnBetween flexEnd autoHeight>
        <span className="qty">{data.qty}</span>
        <div className="price">
          {lang === "fa"
            ? persianNumber(data.amount * data.qty)
            : data.amount * data.qty}
          <span className="currency">{t("t")}</span>
        </div>
      </ColumnBetween>
    </FlexBetween>
  );
};

export default FactorItem;
