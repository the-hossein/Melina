import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../../styles/globalStyled";
import { PopupContainer } from "./stylePopup";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  checkOtpReq,
  hidePopup,
  registerReq
} from "../../redux/register/userRegisterActions";
import Image from "next/image";
import doneIcon from "../../../public/Assets/images/done.gif";
import MainBtn from "../mainBtn/MainBtn";
import useLocalStorage from "../hooks/useLocalStorage";
import { validateCode, validatingRegister } from "./validateRegister";
import { notify } from "../toast/toast";
import { TypeNumber, TypepersianNumber } from "../helper";
import Input from "../Input/Input";
const RegisterPopup = () => {
  const state = useSelector((state) => state.stateRegister);
  const { t } = useTranslation();
  const [userToken, setUserToken] = useLocalStorage("userToken", "");
  const [user, setUser] = useState({
    phone: "",
    code: ""
  });
  const [error, setError] = useState({});
  const [errorCode, setErrorCode] = useState({});
  const [phonePreload, setPhonePreload] = useState(false);
  const [codePreload, setCodePreload] = useState(false);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const [focus, setFocus] = useState({});
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: TypepersianNumber(e.target.value) });
  };
  const focusHandler = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };
  useEffect(() => {
    setError(validatingRegister(user));
    setErrorCode(validateCode(user));
  }, [user]);
  const loginHandler = () => {
    if (!Object.keys(error).length && user.phone.length !== 0) {
      dispatch(registerReq(user.phone, t));
    } else {
      notify(t("compliteData"), "error");
    }
  };
  const checkOtpHandler = () => {
    if (!Object.keys(errorCode).length && user.code.length !== 0) {
      dispatch(checkOtpReq(user.phone, user.code, t, setUserToken));
    } else {
      notify(t("enterCode"), "error");
    }
  };
  useEffect(() => {
    if (state.loginStatus === true) {
      setTimeout(() => {
        dispatch(hidePopup());
        setUser({
          phone: "",
          code: ""
        });
        setError({});
        setErrorCode({});
      }, 3000);
    }
  }, [state.loginStatus]);
  return (
    state.showPopup && (
      <PopupContainer width={"400px"}>
        <div className="loginForm">
          {state.loginStatus ? (
            <div className="success">
              <Image src={doneIcon} alt="doneIcon" width={60} height={60} />
              <p>{t("success")}</p>
            </div>
          ) : (
            <>
              <CloseIcon
                onClick={() => dispatch(hidePopup())}
                sx={{
                  color: "var(--grayPen)",
                  cursor: "pointer",
                  marginBottom: "1rem",
                  float: "var(--left)"
                }}
              />
              <h5>{t("loginSignUp")}</h5>
              {state.codeStatus ? (
                <>
                  <Input
                    styleInput="outline"
                    placeHolder={t("enterCode")}
                    type="text"
                    value={user.code}
                    name="code"
                    legth={6}
                    keyDown={() => TypeNumber()}
                    change={changeHandler}
                    onFocus={focusHandler}
                    valiStatus={errorCode.code && focus.code}
                    textError={errorCode.code}
                    loader={state.loader}
                    loaderText={t("loggingIn")}
                    resend
                    resendFunc={() => dispatch(registerReq(user.phone, t))}
                  />

                  <MainBtn
                    text={t("login")}
                    color="gray"
                    disabled={state.loader}
                    onClick={checkOtpHandler}
                  />
                </>
              ) : (
                <>
                  <Input
                    styleInput="outline"
                    placeHolder={t("enterPhone")}
                    type="text"
                    value={user.phone}
                    name="phone"
                    legth={11}
                    keyDown={() => TypeNumber()}
                    change={changeHandler}
                    onFocus={focusHandler}
                    valiStatus={error.phone && focus.phone}
                    textError={error.phone}
                    loader={state.loader}
                    loaderText={t("sendingCode")}
                  />
                  <MainBtn
                    text={t("sendCode")}
                    color="gray"
                    disabled={state.loader}
                    onClick={loginHandler}
                  />
                </>
              )}
            </>
          )}
        </div>
      </PopupContainer>
    )
  );
};

export default RegisterPopup;
