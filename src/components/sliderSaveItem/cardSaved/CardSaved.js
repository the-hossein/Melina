import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FlexBetween } from "../../../../styles/globalStyled";
import { persianNumber, toPersianNum } from "../../../tools/helper";
import SecondlyBtn from "../../../tools/secondlyBtn/SecondlyBtn";
import { SquareContainer } from "../../shop/styleShop";
// import mel from "../../../public/Assets/images/melina.png";
import Link from "next/link";
import { notify } from "../../../tools/toast/toast";
import { getSaveProducts, saveProduct } from "../../../redux/register/userRegisterActions";
import { addBasket } from "../../../redux/basket/basketActions";
import { CircularProgress } from "@mui/material";
import { Card } from "./CardSavedStyle";
import callApi from "../../../api/callApi";
import { REMOVE_SAVE_PRODUCT } from "../../../api/urls";

const CardSaved = ({ data, spital, width, height , saveId}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [loader, setLoader] = useState(false);
  const [loader_2, setLoader_2] = useState(false);

  const dispatch = useDispatch();
  const removeSaveHandler = async () => {
    setLoader_2(true);
    const response = await callApi(`${REMOVE_SAVE_PRODUCT}${saveId}`, false, "{}", "post");
    console.log(response.data)
    console.log(response.status);
    if(response.status === 200){
      dispatch(getSaveProducts(user.userId));
      setLoader_2(false);
    }

    // if (user.loginStatus) {
    //   let targetItem;
    //   if (user.watchList) {
    //     targetItem = user.watchList.find((item) => item.productId === data.id);
    //   }
    //   if (targetItem) {
    //     notify(t("alreadyBeenSaved"), "success");
    //   } else {
    //     setLoader_2(true);
    //     dispatch(saveProduct(user.userId, data.id, t, setLoader_2));
    //   }
    // } else {
    //   notify(t("fristLoginForSavePro"), "error");
    // }
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
    <Card width={width} height={height}>
      <div className="holder_image">
        <Link href={`/shop/${data.id}`}>
          <a>
            <img src={data.imageFile1.filePath} alt="productImage" />
          </a>
        </Link>
      </div>
      <h2 className="name_product">
        {lang === "fa" ? data.title : data.titleEn}
      </h2>
      <span className="price">
        {lang === "fa" ? persianNumber(data.price) : data.price}
        {t("t")}
      </span>
      <p className="description">
        {lang === "fa" ? data.description : data.descriptionEn}
      </p>
      {/* <div className="content">
        <FlexBetween> */}
      <div className="btn_container">
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
              t("removeWatchList")
            )
          }
          gray
          onClick={removeSaveHandler}
        />
      </div>
      {/* </FlexBetween>
      </div> */}
    </Card>
  );
};

export default CardSaved;
