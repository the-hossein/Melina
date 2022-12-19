import React, { useEffect, useState } from "react";
import {
  Column,
  FlexBetween,
  P,
  Section,
  Title
} from "../../../styles/globalStyled";
import { BasketContainer } from "./styleBasket";
import { useTranslation } from "react-i18next";
import Address from "../profile/Address";
import { useDispatch, useSelector } from "react-redux";
import { persianNumber } from "../../tools/helper";
import FactorItem from "./FactorItem";
import MainBtn from "../../tools/mainBtn/MainBtn";
import BasketProduct from "./BasketProduct";
import {
  getUserAddress,
  showPopupAddress
} from "../../redux/register/userRegisterActions";
import Loader from "../../tools/loader/Loader";
import AddressPopup from "../../tools/popups/AddressPopup";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import Placement from "../../tools/placement/Placement";
import { deleteBasketData } from "../../redux/basket/basketActions";
const Basket = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const basket = useSelector((state) => state.stateBasket);
  const [tax, setTax] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteBasketData());
    dispatch(getUserAddress(t, user.userId));
  }, []);

  return (
    <Section>
      <>
        {basket.selectedItems === "" ? (
          <Loader />
        ) : basket.selectedItems.length === 0 ? (
          <Placement
            text={t("noBasketDetail")}
            go="/shop"
            btnText={t("shop")}
          />
        ) : (
          <BasketContainer lang={lang}>
            <Title size="big" bold dir>
              {t("basket")}
            </Title>
            <FlexBetween className="mt-5">
              <div className="col-lg-8  col-12 choseAddress">
                {basket.basketType === 0 && (
                  <>
                    <Title size="small" bold dir>
                      {t("choseAddress")}
                    </Title>
                    {user.loader ? (
                      <Loader />
                    ) : user.allAddress.length === 0 ? (
                      <>
                        <P>{t("noAddress")}</P>
                        <SecondlyBtn
                          text={t("addAddress")}
                          onClick={() => dispatch(showPopupAddress())}
                        />
                        <AddressPopup />
                      </>
                    ) : (
                      <>
                        <Address datas={user.allAddress} />
                      </>
                    )}
                  </>
                )}

                <Title size="small" bold dir className="mt-5 mb-3">
                  {basket.basketType === 0 ? t("products") : t("course")}
                </Title>

                <FlexBetween className="mb-5">
                  {basket.selectedItems.map((item) => (
                    <BasketProduct key={item.id} data={item} />
                  ))}
                </FlexBetween>
              </div>
              <div className="col-lg-4 col-12 factor">
                <Title size="small" bold dir>
                  {t("factor")}
                </Title>
                <div className="items">
                  {basket.selectedItems.map((item) => (
                    <>
                      <FactorItem data={item} />
                    </>
                  ))}
                </div>
                <Column className="mt-4">
                  <FlexBetween align>
                    <span>{t("totalSum") + " : "}</span>
                    <span className="totalSum">
                      {lang === "fa"
                        ? persianNumber(basket.total)
                        : basket.total}
                      <span className="currency">{t("t")}</span>
                    </span>
                  </FlexBetween>
                  <FlexBetween align>
                    <span>{t("tax") + " : "}</span>
                    <span className="totalSum">
                      {lang === "fa" ? persianNumber(tax) : tax}
                      <span className="currency">{t("t")}</span>
                    </span>
                  </FlexBetween>

                  <FlexBetween align>
                    <span>{t("Payable") + " : "}</span>
                    <div className="Payable">
                      {lang === "fa"
                        ? persianNumber(basket.total + tax)
                        : basket.total + tax}
                      <span className="currency">{t("t")}</span>
                    </div>
                  </FlexBetween>

                  <MainBtn text={t("pay")} />
                </Column>
              </div>
            </FlexBetween>
          </BasketContainer>
        )}
      </>
    </Section>
  );
};

export default Basket;
