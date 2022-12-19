import React, { useState } from "react";
import { InputContainer, InputStyle } from "./styleInput";
import { useTranslation } from "react-i18next";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CountdownTimer from "react-component-countdown-timer";
import { useSelector } from "react-redux";

const Input = ({
  placeHolder,
  valiStatus,
  textError,
  type,
  value,
  change,
  name,
  keyDown,
  legth,
  onFocus,
  disabled,
  styleInput,
  loader,
  loaderText,
  resend,
  resendFunc,
  label,
  id
}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);

  const [again, setAgain] = useState(false);
  const endTimerHandler = () => {
    setAgain(true);
  };
  const againHandler = () => {
    setAgain(false);
    resendFunc();
  };
  return (
    <InputContainer
      styleInput={styleInput}
      className="form"
      valiStatus={valiStatus}
      lang={lang}
    >
      {label !== undefined && <label htmlFor={id}>{label}</label>}
      <InputStyle
        styleInput={styleInput}
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={change}
        name={name}
        onKeyDown={keyDown}
        maxLength={legth}
        onFocus={onFocus}
        disabled={disabled}
        id={id !== undefined && id}
      />
      {resend && (
        <div className="resend">
          {again ? (
            <span onClick={againHandler}>
              {t("resend")} <AutorenewIcon />
            </span>
          ) : (
            <span>
              <CountdownTimer
                color="var(--blueColor)"
                size={12}
                count={120}
                backgroundColor={"none"}
                hideDay={true}
                hideHours={true}
                onEnd={endTimerHandler}
              />
            </span>
          )}
        </div>
      )}
      {loader && <span className="loader">{loaderText}</span>}
      {valiStatus && <span className="error">{t(`${textError}`)}</span>}
    </InputContainer>
  );
};

export default Input;
