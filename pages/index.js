import Head from "next/head";
import Footer from "../src/components/footer/Footer";

import Header from "../src/components/header/Header";
import HeroSections from "../src/components/landing/HeroSections";
import JoinJurnal from "../src/components/landing/JoinJurnal";
import VideoSlider from "../src/components/landing/VideoSlider";
import WelcomeToShop from "../src/components/landing/WelcomeToShop";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Home() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.stateRegister);
  return (
    <div>
      <Head>
        <title>{t("home")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSections />
        <VideoSlider />
        <WelcomeToShop />
        <JoinJurnal />
      </main>
      <Footer />
    </div>
  );
}
