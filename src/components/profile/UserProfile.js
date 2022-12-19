import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Column,
  FlexBetween,
  P,
  Section,
  SectionTitle,
  Title,
} from "../../../styles/globalStyled";
import { ProfileContainer } from "./styleProfile";
import CircleIcon from "@mui/icons-material/Circle";
import MainBtn from "../../tools/mainBtn/MainBtn";
import Address from "./Address";
import SecondlyBtn from "../../tools/secondlyBtn/SecondlyBtn";
import SimilarCourse from "../courses/SimilarCourse";
import SuggestedCourse from "./SuggestedCourse";
import { useDispatch, useSelector } from "react-redux";
import {
  getSaveProducts,
  getUserAddress,
  showPopup,
  showPopupAddress,
} from "../../redux/register/userRegisterActions";
import AddressPopup from "../../tools/popups/AddressPopup";
import Loader from "../../tools/loader/Loader";
import { e2p } from "../../tools/helper";
import SquareProduct from "../shop/SquareProduct";
import EditProfile from "./EditProfile";
import SliderSaveItem from "../sliderSaveItem/SliderSaveItem";

const UserProfile = () => {
  const { t } = useTranslation();
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAddress(t, user.userId));
  }, []);
  return (
    <>
      <AddressPopup />

      <Section>
        <ProfileContainer lang={lang}>
          <Title size="big" bold dir>
            {t("profile")}
          </Title>
          <FlexBetween>
            <div className="col-lg-8 col-12 userInfo">
              {open ? (
                <EditProfile />
              ) : (
                <FlexBetween align className="mb-4 info">
                  <img src={user.userImg.path} alt="profile Image" />
                  <FlexBetween className="align-items-end">
                    <ul>
                      {user.data.length === 0 ? (
                        <li className="username">{t("userName")}</li>
                      ) : (
                        <li className="username">
                          {user.data.user.name !== "" ||
                          user.data.user.family !== ""
                            ? user.data.user.name + " " + user.data.user.family
                            : t("userName")}
                        </li>
                      )}

                      <li>
                        <CircleIcon
                          sx={{
                            color: "var(--greenColor)",
                            fontSize: "10pt",
                          }}
                        />
                        {t("activeCourse")} :<span>0</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        {t("email")} :
                        <span>
                          {user.data.user.email === null
                            ? t("nullEmail")
                            : user.data.user.email}
                        </span>
                      </li>
                      <li>
                        {t("phoneNumber")} :
                        <span>
                          {lang === "fa"
                            ? e2p(user.data.user.phoneNumber)
                            : user.data.user.phoneNumber}
                        </span>
                      </li>
                    </ul>
                  </FlexBetween>
                  <MainBtn text={t("edit")} onClick={() => setOpen(true)} />
                </FlexBetween>
              )}

              <Column align>
                {user.loader ? (
                  <Loader />
                ) : user.allAddress.length === 0 ? (
                  <P>{t("noAddress")}</P>
                ) : (
                  <>
                    <Address datas={user.allAddress} />
                  </>
                )}
                <SecondlyBtn
                  text={t("addAddress")}
                  borderColor
                  onClick={() => dispatch(showPopupAddress())}
                />
              </Column>
            </div>
            <div className="col-lg-4 col-12 userCourse">
              {
                more
                // ? test.map((item) => (
                //     <>
                //       <SimilarCourse noBorder />
                //     </>
                //   ))
                // : test.slice(0, 2).map((item) => (
                //     <>
                //       <SimilarCourse noBorder />
                //     </>
                //   ))
              }
              {!more && (
                <span className="more" onClick={() => setMore(true)}>
                  {t("moreCourse")}
                </span>
              )}
            </div>
          </FlexBetween>
        </ProfileContainer>
      </Section>

      <Section dir>
        {user.watchList !== "" && (
          <>
            <Title dir bold>
              {t("watchList")}
            </Title>
            {/* <SuggestedCourse /> */}
            <br />
            <SliderSaveItem saveProduct={user.watchList} />
          </>
        )}
      </Section>
    </>
  );
};

export default UserProfile;
