import { CircularProgress, Rating } from "@mui/material";
import { t } from "i18next";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Column,
  ColumnBetween,
  FlexBetween,
  Title
} from "../../../styles/globalStyled";
import { convertDate, persianNumber } from "../../tools/helper";
import { BasketProductStyle } from "./styleBasket";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import callApi from "../../api/callApi";
import { DELETE_BASKET_DETAIL } from "../../api/urls";
import { basketType, decrease, increase, remove } from "../../redux/basket/basketActions";
import { useTranslation } from "react-i18next";
const BasketProduct = ({ data }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  const basket = useSelector((state) => state.stateBasket);
  const [preload, setPreload] = useState(false);
  const [deletePreload, setDeletePreload] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    qty: data.qty,
    total: data.amount * data.qty
  });
  const deleteHandler = () => {
    setDeletePreload(true);
    dispatch(remove(data));
  };
  const increaseHandler = () => {
    setPreload(true);
    dispatch(increase(data, setPreload, t));
  };
  const decreseHandler = () => {
    setPreload(true);
    dispatch(decrease(data, setPreload, t));
  };

  return (
    <BasketProductStyle className="col-lg-6 col-md-6 col-12" lang={lang}>
      <div className="product">
        {basket.basketType === 0 ? (
          <Title size="small" bold dir className="mb-3">
            {lang === "fa" ? data.product.title : data.product.titleEn}
          </Title>
        ) : (
          basket.basketType === 1 && (
            <Title size="small" bold dir className="mb-3">
              {lang === "fa" ? data.title : data.course.titleEn}
            </Title>
          )
        )}

        <FlexBetween>
          <ColumnBetween className="info">
            <ul>
              <li>
                <span>{t("buyDate")}:</span>
                <span>
                  {lang === "fa"
                    ? convertDate(data.createdDatetime)
                    : data.createdDatetime.split("T")[0]}
                </span>
              </li>
              <li>
                <span>{t("rate")}:</span>
      
                <span>
                  <Rating
                    name="read-only"
                    value={basket.basketType===1?data.course.rate :data.rate}
                    readOnly
                    sx={{ fontSize: "12pt", direction: "var(--dirL)" }}
                  />
                </span>
              </li>
              <li>
                <span>{t("amount")}:</span>
                <div>
                  <span>
                    {lang === "fa" ? persianNumber(data.amount) : data.amount}
                  </span>
                  <span className="currency">{t("t")}</span>
                </div>
              </li>
            </ul>
            <FlexBetween noWrap align className="mt-1">
              <span className="delete" onClick={deleteHandler}>
                {deletePreload ? (
                  <CircularProgress
                    color="inherit"
                    sx={{
                      width: "16px !important",
                      height: "16px !important"
                    }}
                  />
                ) : (
                  <DeleteIcon />
                )}
              </span>
              {basket.basketType === 0 && (
                <FlexBetween className="options" align>
                  <button>
                    <AddIcon onClick={increaseHandler} />
                  </button>
                  {preload ? (
                    <CircularProgress
                      color="inherit"
                      sx={{
                        width: "10px !important",
                        height: "10px !important"
                      }}
                    />
                  ) : (
                    <span>{data.qty}</span>
                  )}
                  <button
                    disabled={data.qty === 1 ? true : false}
                    onClick={decreseHandler}
                  >
                    <RemoveIcon />
                  </button>
                </FlexBetween>
              )}
            </FlexBetween>
          </ColumnBetween>
          <img
            alt="product Image"
            src={
              basket.basketType === 0
                ? data.product.imageFile1.filePath
                : data.course.fileImage.filePath
            }
          />
        </FlexBetween>
      </div>
    </BasketProductStyle>
  );
};

export default BasketProduct;
