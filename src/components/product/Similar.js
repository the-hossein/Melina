import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FlexBetween, MainTitle, P } from "../../../styles/globalStyled";
import { addBasket } from "../../redux/basket/basketActions";
import { persianNumber } from "../../tools/helper";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import { notify } from "../../tools/toast/toast";
import { SimilarContainer } from "./styleProduct";
import Link from "next/link";
const Similar = ({ data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const addHandler = () => {
    if (user.loginStatus) {
      dispatch(addBasket(user, data, t, setLoader));
    } else {
      notify(t("loginTo"), "error");
    }
  };
  return (
    <SimilarContainer>
      <MainTitle>{t("similar")}</MainTitle>
      <FlexBetween >
        {data.map((item) => (
          <>
            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-4  col-8 product">
              <Link href={`/shop/${item.id}`}>
                <a>
                  <img src={item.imageFile1.filePath} alt="image" />
                  <FlexBetween className="info">
                    <h1>{lang === "fa" ? item.title : item.titleEn}</h1>
                    <span>
                      {lang === "fa" ? persianNumber(item.price) : item.price}{" "}
                      {t("t")}
                    </span>
                  </FlexBetween>
                  <P>{lang === "fa" ? item.description : item.descriptionEn}</P>
                </a>
              </Link>
              <SecondlyBtn
                text={
                  loader ? (
                    <CircularProgress
                      color="inherit"
                      sx={{
                        width: "16px !important",
                        height: "16px !important"
                      }}
                    />
                  ) : (
                    t("buy")
                  )
                }
                disabled={loader}
                onClick={addHandler}
              />
            </div>
          </>
        ))}
      </FlexBetween>
    </SimilarContainer>
  );
};

export default Similar;
