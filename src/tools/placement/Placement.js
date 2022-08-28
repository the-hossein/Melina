import React from "react";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { Column, P, PlacementStyle } from "../../../styles/globalStyled";
import SecondlyBtn from "../secondlyBtn/SecondlyBtn";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
const Placement = ({ text, go, btnText }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const backPage = () => {
    if (go !== undefined) {
      router.push({
        pathname: go
      });
    } else {
      window.history.go(-1);
    }
  };
  return (
    <PlacementStyle>
      <Column align>
        <NewReleasesIcon />
        <P centerMode>{text}</P>
        <SecondlyBtn
          text={go !== undefined ? btnText : t("back")}
          onClick={backPage}
        />
      </Column>
    </PlacementStyle>
  );
};

export default Placement;
