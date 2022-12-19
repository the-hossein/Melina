import React, { useEffect, useLayoutEffect, useState } from "react";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import i18next from "i18next";
import { changeLang } from "../../redux/lang/langAction";
import { useRouter } from "next/router";
import Image from "next/image";
import { HeaderStyle, StyledBurger, StyledMenu } from "./styleHeader";
import userIcon from "../../../public/Assets/images/user.png";
import basketIcon from "../../../public/Assets/images/basket.png";
import profileIcon from "../../../public/Assets/images/profile.png";
import melina from "../../../public/Assets/images/melina.png";
import { FlexBetween } from "../../../styles/globalStyled";
import useLocalStorage from "../../tools/hooks/useLocalStorage";

import {
  deleteUserData,
  getProfile,
  loginStatusFalse,
  showPopup,
} from "../../redux/register/userRegisterActions";
import { e2p, persianNumber, toPersianNum } from "../../tools/helper";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { notify } from "../../tools/toast/toast";
import { deleteBasketData } from "../../redux/basket/basketActions";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  // const [userToken, setUserToken] = useLocalStorage("userToken", "");
  const [size, setSize] = useState([0]);
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const basket = useSelector((state) => state.stateBasket);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
    var root = document.documentElement;
  }
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const rightDir = () => {
    root.style.setProperty("--dirRi", "rtl");
    root.style.setProperty("--right", "right");
    root.style.setProperty("--dirL", "ltr");
    root.style.setProperty("--left", "left");

    root.style.setProperty("--mainFont", "IRANSansWeb");
    root.style.setProperty("--mainBoldFont", "IRANSansWeb");
  };
  const leftDir = () => {
    root.style.setProperty("--left", "right");

    root.style.setProperty("--dirRi", "ltr");
    root.style.setProperty("--right", "left");
    root.style.setProperty("--dirL", "rtl");

    root.style.setProperty("--mainFont", "RobotoRegular");
    root.style.setProperty("--mainBoldFont", "Roboto");
  };

  const changeHandler = (lng) => {
    dispatch(changeLang(lng));
    i18next.changeLanguage(lng);
    if (lng === "en") {
      leftDir();
    } else {
      rightDir();
    }
  };
  useEffect(() => {
    dispatch(changeLang(Cookies.get("i18next")));

    const lngCookie = Cookies.get("i18next");
    if (lngCookie === undefined) {
      dispatch(changeLang("fa"));
      i18next.changeLanguage("fa");
      rightDir();
    }
    if (lngCookie === "en") {
      dispatch(changeLang("en"));
      i18next.changeLanguage("en");
      leftDir();
    } else {
      dispatch(changeLang("fa"));
      i18next.changeLanguage("fa");
      rightDir();
    }
  }, []);

  useEffect(() => {
    if (ls !== null) {
      const userToken = JSON.parse(ls);
      const tokenExp = userToken.exp;
      const phone = userToken.phone;
      dispatch(getProfile(phone));
      const now = new Date();
      const endDate = new Date(tokenExp);
      if (endDate - now < 0) {
        localStorage.removeItem("userToken");
      }
    }
  }, [user.loginStatus, router.pathname === "/basket"]);
  const exitHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(loginStatusFalse());

    notify(t("logoutText"), "success");
    dispatch(deleteUserData());
    dispatch(deleteBasketData());
    router.push({
      pathname: "/",
    });
  };
  return (
    <HeaderStyle lang={lang} open={open}>
      {size < 992 ? (
        <FlexBetween>
          <FlexBetween className="icons">
            {!user.loginStatus && (
              <LoginIcon onClick={() => dispatch(showPopup())} />
            )}
            <Link href="/basket">
              <a>
                <Image src={basketIcon} alt="logo" width={25} height={25} />

                {basket.itemsCounter > 0 && (
                  <span className="qty">{basket.itemsCounter}</span>
                )}
              </a>
            </Link>
            {/* <Image src={basketIcon} alt="basketIcon" width={30} height={16} /> */}
          </FlexBetween>

          {/* <Image src={melina} alt="basketIcon" width={100} height={40} /> */}
          <StyledBurger open={open} onClick={() => setOpen(!open)} lang={lang}>
            <div />
            <div />
            <div />
          </StyledBurger>
          <StyledMenu open={open} lang={lang}>
            <div className={`menuMobile`}>
              <div className="userInfo">
                <Link href="/profile">
                  <a>
                    <img alt="userProfile" src={user.userImg.path} />
                    {user.loginStatus && user.userId !== "" && (
                      <span>
                        {user.data.user.name !== "" ||
                        user.data.user.family !== ""
                          ? user.data.user.name + " " + user.data.user.family
                          : lang === "fa"
                          ? e2p(user.data.user.phoneNumber)
                          : user.data.user.phoneNumber}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
              <ul>
                <li className={router.pathname === "/" && "active"}>
                  <Link href="/">
                    <a>{t("home")}</a>
                  </Link>
                </li>
                <li className={router.pathname === "/shop" && "active"}>
                  <Link href="/shop">
                    <a>{t("shop")}</a>
                  </Link>
                </li>
                <li className={router.pathname === "/courses" && "active"}>
                  <Link href="/courses">
                    <a>{t("course")}</a>
                  </Link>
                </li>
                <li className={router.pathname === "/contactus" && "active"}>
                  <Link href="/contactus">
                    <a>{t("contactUs")}</a>
                  </Link>
                </li>
                <li className={router.pathname === "/aboutus" && "active"}>
                  <Link href="/aboutus">
                    <a>{t("aboutUs")}</a>
                  </Link>
                </li>
                <li className={router.pathname === "/ourTeam" && "active"}>
                  <Link href="/ourTeam">
                    <a>{t("ourTeam")}</a>
                  </Link>
                </li>
                <li
                  onClick={() =>
                    lang === "fa" ? changeHandler("en") : changeHandler("fa")
                  }
                >
                  Fa/En
                </li>
              </ul>
              {user.loginStatus && (
                <span className="logout" onClick={exitHandler}>
                  {t("logout")}
                </span>
              )}
            </div>
          </StyledMenu>
        </FlexBetween>
      ) : (
        <FlexBetween>
          <nav>
            <Link href="/">
              <a>
                <Image src={melina} alt="logo" />
              </a>
            </Link>
            <div></div>
            <ul>
              <li className={router.pathname === "/ourTeam" && "active"}>
                <Link href="/ourTeam">
                  <a>{t("ourTeam")}</a>
                </Link>
              </li>
              <li className={router.pathname === "/aboutus" && "active"}>
                <Link href="/aboutus">
                  <a>{t("aboutUs")}</a>
                </Link>
              </li>

              <li className={router.pathname === "/contactus" && "active"}>
                <Link href="/contactus">
                  <a>{t("contactUs")}</a>
                </Link>
              </li>
              <li className={router.pathname === "/courses" && "active"}>
                <Link href="/courses">
                  <a>{t("course")}</a>
                </Link>
              </li>
              <li className={router.pathname === "/shop" && "active"}>
                <Link href="/shop">
                  <a>{t("shop")}</a>
                </Link>
              </li>
              <li className={router.pathname === "/" && "active"}>
                <Link href="/">
                  <a>{t("home")}</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <ul className="items">
              <li>
                {lang === "en" ? (
                  <span onClick={() => changeHandler("fa")}>Fa</span>
                ) : (
                  <span onClick={() => changeHandler("en")}>En</span>
                )}
              </li>
              {user.loginStatus ? (
                <li className="profile">
                  <Link href="/profile">
                    <a>
                      <span>{t("profile")}</span>
                      <img src={user.userImg.path} alt="userIcon" />
                    </a>
                  </Link>
                </li>
              ) : (
                <li onClick={() => dispatch(showPopup())}>
                  <span>{t("loginSignUp")}</span>
                  <Image src={userIcon} alt="userIcon" width={30} height={30} />
                </li>
              )}
              <li>
                <Link href="/basket">
                  <a>
                    <Image src={basketIcon} alt="logo" width={25} height={25} />
                    {basket.itemsCounter > 0 && (
                      <span className="qty">{basket.itemsCounter}</span>
                    )}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </FlexBetween>
      )}
    </HeaderStyle>
  );
};
export default Header;
