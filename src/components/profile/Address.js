import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlexBetween } from "../../../styles/globalStyled";
import { AddressStyle } from "./styleProfile";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ACTIVE_ADDRESS } from "../../api/urls";
import { useDispatch, useSelector } from "react-redux";
import callApi from "../../api/callApi";
import {
  getUserAddress,
  selectedAddress
} from "../../redux/register/userRegisterActions";
import { persianNumber } from "../../tools/helper";
const Address = ({ datas }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(datas.isActive);
  const user = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);

  const dispatch = useDispatch();
  const activeHandler = (e) => {
    const addressFetcher = async () => {
      const response = await callApi(
        `${ACTIVE_ADDRESS}?AddressId=${e.target.value}&UserId=${user.userId}`,
        true,
        "{}",
        "POST"
      );
      if (response.status === 200) {
        dispatch(selectedAddress(e.target.value));
        dispatch(getUserAddress(t, user.userId));
      }
    };
    addressFetcher();
  };
  return datas.map((item, index) => (
    <>
      <AddressStyle active={item.isActive}>
        <FlexBetween align width100>
          <FlexBetween align>
            <span>
              {t("addressTitle")+" " }
              {lang==="fa"?persianNumber(index + 1):index + 1}{ " : "}
            </span>
            <p> {item.address}</p>
          </FlexBetween>
          <span>
            <FormControlLabel
              value={item.address}
              control={
                <Radio
                  checkedIcon={
                    <CheckCircleIcon sx={{ color: "var(--greenColor)" }} />
                  }
                  checked={item.isActive}
                  onChange={activeHandler}
                  value={item.id}
                  name="radio-buttons"
                />
              }
              label={item.isActive ? t("selected") : t("chose")}
              sx={{ padding: "0 1rem" }}
            />
          </span>
        </FlexBetween>
      </AddressStyle>
    </>
  ));
};

export default Address;
