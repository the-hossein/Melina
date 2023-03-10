import Head from "next/head";
import { useTranslation } from "react-i18next";
import AboutUs from "../src/components/aboutUS/AboutUs";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
export default function AboutUsPage() {
const {t}=useTranslation()
  return (
    <div>
      <Head>
        <title>{t("aboutUs")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
