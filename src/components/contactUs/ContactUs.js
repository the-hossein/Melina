import React, { useLayoutEffect, useState } from "react";
import { FlexBetween, MainTitle, Section } from "../../../styles/globalStyled";
import { ContactUSContainer } from "./styleContactUs";
import Image from "next/image";
import imgContactUs from "../../../public/Assets/images/imgContactUs.jpg";
import { useTranslation } from "react-i18next";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { useSelector } from "react-redux";
import ImagegScroller from "../../tools/imagegScroller/ImagegScroller";
const ContactUs = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const [size, setSize] = useState([0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <Section section={size > 768 && "sideway"} lang={lang}>
      <ContactUSContainer lang={lang}>
        <FlexBetween>
          <div className="col-lg-7 col-md-7">
            <MainTitle>{t("contactUs")}</MainTitle>
            <p>{t("contactUsText")}</p>
            <ul>
              <li>{t("addressTitle") + " : " + t("address")}</li>
              <li>{t("phone") + " : " + t("tel")}</li>
              <li>{t("mobile") + " : " + t("whatsapp")}</li>
              <li>
                <WhatsAppIcon />
                <Link href="https://www.instagram.com/melinataj/">
                  <a target={"_blank"}>
                    <InstagramIcon />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <ImagegScroller />
        </FlexBetween>
      </ContactUSContainer>
    </Section>
  );
};

export default ContactUs;
