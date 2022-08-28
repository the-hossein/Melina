import React from "react";
import { FooterContainer } from "./styleFooter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import mel from "../../../public/Assets/images/melDark.png";
import footerImg from "../../../public/Assets/images/footerImg.png";

import Image from "next/image";
import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
  ColumnBetween,
  FlexBetween,
  Section
} from "../../../styles/globalStyled";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector } from "react-redux";
const Footer = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <FooterContainer>
      <Section>
        <FlexBetween align className="contactUs">
          <div>
            <Link href="https://www.instagram.com/melinataj/">
              <a target="_blank">
                <InstagramIcon />
              </a>
            </Link>
            <Link href="https://wa.me/+989300729515">
              <a target="_blank">
                <WhatsAppIcon />
              </a>
            </Link>
          </div>
          <a href="tel:+989300729515">
            <FlexBetween align>
              <h3>{t("tel")}</h3>
              <PhoneInTalkIcon />
            </FlexBetween>
          </a>
        </FlexBetween>
        <div className="row  footerDetail">
          <div className="enamad col-lg-4 col-md-3 col-10">
            <img src="/Assets/images/enamd.png" />
          </div>
          <div className="col-lg-4 col-md-5 col-10 items">
            <ul>
              <li>
                <Link href="/contactus">
                  <a>{t("contactUs")}</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a>{t("course")}</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/profile">
                  <a>{t("profile")}</a>
                </Link>
              </li>
              <li>
                <Link href="/basket">
                  <a>{t("basket")}</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/">
                  <a>{t("home")}</a>
                </Link>
              </li>
              <li>
                <Link href="/aboutus">
                  <a>{t("aboutUs")}</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a>{t("shop")}</a>
                </Link>
              </li>
            </ul>
          </div>
          <ColumnBetween className="col-lg-4 col-md-4 col-10 melCosmetic">
            <Image alt="footer image" src={footerImg} />
            <div className="address">
              <h4>{t("address")}</h4>
              <LocationOnOutlinedIcon />
            </div>
          </ColumnBetween>
        </div>
      </Section>
      {lang === "fa" ? (
        <span className="copyRight">
          کلیه حقوق این سایت محفوظ و متعلق به شرکت
          <a href="https://karmaagy.com/"> کارما </a>
          می‌باشد.
        </span>
      ) : (
        <span className="copyRight">
          All rights of this are reserved and belong to{" "}
          <a href="https://karmaagy.com/">Karma Company</a>
        </span>
      )}
    </FooterContainer>
  );
};

export default Footer;
