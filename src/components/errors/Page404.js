import React from "react";
import { Center, Column } from "../../../styles/globalStyled";
import { Page404Container } from "./styleErrors";
import Image from "next/image";
import errorImg from "../../../public/Assets/images/404.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Page404 = () => {
  const { t } = useTranslation();
  return (
    <Center>
      <Page404Container>
        <div>
          <h1>{t("404")}</h1>
          <Column>
            <p>{t("404Text")}</p>
            <span>{t("notFoundPage")}</span>
            <Link href="/">
              <a>{t("backHome")}</a>
            </Link>
          </Column>
        </div>
        <Image src={errorImg} alt="404Image" />
      </Page404Container>
    </Center>
  );
};

export default Page404;
