import React, { useState } from "react";
import { FlexBetween, MainTitle, P } from "../../../styles/globalStyled";
import { ProductInformation } from "./styleProduct";
import { useTranslation } from "react-i18next";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { useDispatch, useSelector } from "react-redux";
import { persianNumber } from "../../tools/helper";
import { addBasket, addItem } from "../../redux/basket/basketActions";
import { notify } from "../../tools/toast/toast";
import { CircularProgress } from "@mui/material";

const ProductInfo = ({ data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const addHandler = () => {
    setLoader(true);

    if (user.loginStatus) {
      dispatch(addBasket(user, data, t, setLoader));
    } else {
      notify(t("loginTo"), "error");
    }
  };
  return (
    <ProductInformation>
      <FlexBetween align>
        <MainTitle>{lang === "fa" ? data.title : data.titleEn}</MainTitle>
        <span className="price">
          {lang === "fa" ? persianNumber(data.price) : data.price} {t("t")}
        </span>
      </FlexBetween>
      <P justify>{lang === "fa" ? data.description : data.descriptionEn}</P>
      {/* <FlexBetween>
        <ul>
          <li>Factor No1</li>
          <li>Factor No1</li>
        </ul>
        <ul>
          <li>Factor No1</li>
          <li>Factor No1</li>
        </ul>
      </FlexBetween> */}
      <SecondlyBtn
        text={
          loader ? (
            <CircularProgress
              color="inherit"
              sx={{ width: "25px !important", height: "25px !important" }}
            />
          ) : (
            t("buy")
          )
        }
        fill={true}
        size="small"
        onClick={addHandler}
        disabled={loader}
      />
    </ProductInformation>
  );
};

export default ProductInfo;
