import { CircularProgress } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ColumnBetween, FlexBetween } from "../../../styles/globalStyled";
import { addBasket } from "../../redux/basket/basketActions";
import { saveProduct } from "../../redux/register/userRegisterActions";
import { persianNumber, toPersianNum } from "../../tools/helper";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { notify } from "../../tools/toast/toast";
import { RetangleContainer } from "./styleShop";

const RetangleProduct = ({ data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [loader, setLoader] = useState(false);
  const [loader_2, setLoader_2] = useState(false);

  const dispatch = useDispatch();
  const saveHandler = () => {
    if (user.loginStatus) {
      let targetItem;
      if (user.watchList) {
        targetItem = user.watchList.find((item) => item.productId === data.id);
      }
      if (targetItem) {
        notify(t("alreadyBeenSaved"), "success");
      } else {
        setLoader_2(true);
        dispatch(saveProduct(user.userId, data.id, t, setLoader_2));
      }
    } else {
      notify(t("fristLoginForSavePro"), "error");
    }
  };
  const addHandler = () => {
    if (user.loginStatus) {
      setLoader(true);
      dispatch(addBasket(user, data, t, setLoader));
    } else {
      notify(t("loginTo"), "error");
    }
  };
  return (
    <RetangleContainer className="retangleProduct">
      <Link href={`/shop/${data.id}`}>
        <a>
          <img src={data.imageFile1.filePath} alt="productImage" />
        </a>
      </Link>
      <div className="content">
        <FlexBetween align={true} className="productName">
          <h2>{lang === "fa" ? data.title : data.titleEn}</h2>
          <span className="price">
            {lang === "fa" ? persianNumber(data.price) : data.price}
            {t("t")}
          </span>
        </FlexBetween>
        <FlexBetween noWrap className="productInfo">
          <p>{lang === "fa" ? data.description : data.descriptionEn}</p>

          <ColumnBetween className="action">
            <SecondlyBtn
              text={
                loader ? (
                  <CircularProgress
                    color="inherit"
                    sx={{ width: "16px !important", height: "16px !important" }}
                  />
                ) : (
                  t("buy")
                )
              }
              disabled={loader}
              onClick={addHandler}
            />
            <SecondlyBtn
              text={
                loader_2 ? (
                  <CircularProgress
                    color="inherit"
                    sx={{ width: "16px !important", height: "16px !important" }}
                  />
                ) : (
                  t("addWishList")
                )
              }
              gray
              onClick={saveHandler}
            />
          </ColumnBetween>
        </FlexBetween>
      </div>
    </RetangleContainer>
  );
};

export default RetangleProduct;
