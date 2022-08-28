import Head from "next/head";
import ContactUs from "../src/components/contactUs/ContactUs";

import Header from "../src/components/header/Header";
import { useTranslation } from "react-i18next";
export default function ContactUsPage() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t("contactUs")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <ContactUs />
      </main>
    </div>
  );
}