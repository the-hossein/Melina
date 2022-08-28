import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addCourseBasket } from "../../redux/basket/basketActions";
import { persianNumber } from "../../tools/helper";
import MainBtn from "../../tools/mainBtn/MainBtn";
import { notify } from "../../tools/toast/toast";
import { BuyCourseStyle } from "./styleCourses";

const BuyCourse = ({ data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const addHandler = () => {
    if (user.loginStatus) {
      setLoader(true);

      dispatch(addCourseBasket(user, data, t, setLoader));
    } else {
      notify(t("loginTo"), "error");
    }
  };
  return (
    <BuyCourseStyle>
      <span className="price">
        {lang === "fa" ? persianNumber(data.price) : data.price}
        {t("t")}
      </span>
      <MainBtn
        text={
          loader ? (
            <CircularProgress
              color="inherit"
              sx={{ width: "25px !important", height: "25px !important" }}
            />
          ) : (
            t("buyCourse")
          )
        }
        alignSelf
        onClick={addHandler}
        disabled={loader}
      />
    </BuyCourseStyle>
  );
};

export default BuyCourse;
