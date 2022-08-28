import React, { useEffect, useState } from "react";
import { PopupContainer } from "./stylePopup";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MainBtn from "../mainBtn/MainBtn";
import {
  getUserAddress,
  hidePopup
} from "../../redux/register/userRegisterActions";
import Input from "../Input/Input";
import CircularProgress from "@mui/material/CircularProgress";
import callApi from "../../api/callApi";
import { ADD_ADDRESS } from "../../api/urls";
import { notify } from "../toast/toast";

const AddressPopup = () => {
  const state = useSelector((state) => state.stateRegister);
  const [newAddress, setNewAddress] = useState({
    address: "",
    title: ""
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const addAddressHandler = () => {
    const addReq = async () => {
      var raw = JSON.stringify({
        addressid: 0,
        userid: state.userId,
        title: newAddress.title,
        address: newAddress.address
      });

      try {
        const res = await callApi(ADD_ADDRESS, true, raw, "POST");
        if (res.status === 200) {
          notify(t("addAddressSuccessfuly"), "success");
        } else {
          notify(t("failedAddAddress"), "error");
        }
      } catch (error) {
        notify(t("failedAddAddress"), "error");
      }
    };
    addReq();
  };

  const closeHandler = () => {
    dispatch(hidePopup());
    setNewAddress({
      address: "",
      title: ""
    });
    dispatch(getUserAddress(t, state.userId));
  };
  return (
    state.addressPopUp && (
      <PopupContainer width={"500px"}>
        <div className="loginForm">
          <CloseIcon
            onClick={() => closeHandler()}
            sx={{
              color: "var(--grayPen)",
              cursor: "pointer",
              float: "var(--left)",
              marginBottom: "1rem"
            }}
          />
          <h5>{t("addAddress")}</h5>
          <Input
            styleInput="outline"
            placeHolder={t("enterAddressTitle")}
            type="text"
            value={newAddress.title}
            name="title"
            change={(e) =>
              setNewAddress({ ...newAddress, title: e.target.value })
            }
          />
          <Input
            styleInput="outline"
            placeHolder={t("enterAddress")}
            type="text"
            value={newAddress.address}
            name="address"
            change={(e) =>
              setNewAddress({ ...newAddress, address: e.target.value })
            }
          />

          <MainBtn
            text={
              state.loader ? (
                <CircularProgress color="inherit" />
              ) : (
                t("submitAddress")
              )
            }
            disabled={state.loader}
            onClick={addAddressHandler}
          />
        </div>
      </PopupContainer>
    )
  );
};

export default AddressPopup;
