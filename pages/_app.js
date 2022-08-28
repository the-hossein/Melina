import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextProgress from "next-progress";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { store } from "../src/redux/store";
import "../styles/globals.css";

import "swiper/css";
import "swiper/css/scrollbar";

import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "react-image-gallery/styles/css/image-gallery.css";
import RegisterPopup from "../src/tools/popups/RegisterPopup";
import Header from "../src/components/header/Header";

//set lang
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "fa",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: `/locales/{{lng}}/transliation.json`
    },
    react: {
      useSuspense: false
    }
  });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <RegisterPopup />
      </Provider>
      <NextProgress
        options={{ showSpinner: false }}
        height={"8px"}
        color="var(--mainColor)"
      />
      <ToastContainer />
    </>
  );
}

export default MyApp;
