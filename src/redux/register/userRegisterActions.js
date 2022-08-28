import callApi from "../../api/callApi";
import {
  ADD_TO_SAVE_PRODUCT,
  GET_ALL_ADDRESS,
  GET_BASKET,
  GET_BASKET_DETAIL,
  GET_PROFILE,
  GET_USER_SAVE_PRODUCT,
  LOGIN_SIGNUP,
} from "../../api/urls";
import { notify } from "../../tools/toast/toast";
import { getBasket } from "../basket/basketActions";
export const showPopup = () => {
  return {
    type: "SHOW_POPUP",
  };
};
export const showPopupAddress = () => {
  return {
    type: "SHOW_POPUP_ADDRESS",
  };
};
export const hidePopup = () => {
  return {
    type: "HIDE_POPUP",
  };
};
export const getUserData = (data, id) => {
  return {
    type: "GET_USER_DATA",
    data,
    id,
  };
};
export const registerLoaderFalse = () => {
  return {
    type: "REGISTER_LOADER_FALSE",
  };
};
export const registerLoadertrue = () => {
  return {
    type: "REGISTER_LOADER_TRUE",
  };
};
export const sendCodeSuccess = () => {
  return {
    type: "SEND_CODE_SUCCESS",
  };
};
export const sendCodeFailed = () => {
  return {
    type: "SEND_CODE_FAILED",
  };
};
export const loginStatusTrue = () => {
  return {
    type: "LOGIN_STATUS_TRUE",
  };
};
export const loginStatusFalse = () => {
  return {
    type: "LOGIN_STATUS_FALSE",
  };
};
export const userDataLoader = () => {
  return {
    type: "USER_DATA_LOADER",
  };
};
export const registerReq = (phone, t) => {
  return (dispatch) => {
    const registerApi = async () => {
      try {
        dispatch(registerLoadertrue());
        var raw = JSON.stringify({
          methodname: 5,
          checkPhoneNumber: {
            phonenumber: phone,
          },
        });
        const response = await callApi(LOGIN_SIGNUP, false, raw, "POST");
        if (response.status === 200 || response.status === 201) {
          notify(t("sendCodeSuccessfully"), "success");
          // setPhonePreload(false);
          // setStatus(true);
          dispatch(sendCodeSuccess());
        } else {
          dispatch(sendCodeFailed());

          notify(t("sendCodeFailed"), "error");

          // setPhonePreload(false);
        }
      } catch (error) {
        notify(t("systemError"), "error");
      }
    };
    registerApi();
  };
};
export const checkOtpReq = (phone, code, t, setUserToken) => {
  return (dispatch) => {
    const otpApi = async () => {
      var raw = JSON.stringify({
        methodname: 2,
        otpCheck: {
          phoneNumber: phone,
          code: code,
          referralSite: "string",
          type: 0,
        },
      });
      dispatch(registerLoadertrue());

      const response = await callApi(LOGIN_SIGNUP, false, raw, "POST");
      if (response.status === 201) {
        const data = {
          token: response.data.token,
          exp: response.data.expiration,
          phone: phone,
        };
        setUserToken(data);
        dispatch(loginStatusTrue());
        // notify(t("signUpSuccess"), "success");
      } else if (response.status === 200) {
        const data = {
          token: response.data.token,
          exp: response.data.expiration,
          phone: phone,
        };

        setUserToken(data);
        dispatch(loginStatusTrue());
        dispatch(userDataLoader());
        // notify(t("loginSuccess"), "success");
      } else {
        dispatch(loginStatusFalse());

        notify(t("wrongCode"), "error");
      }
    };
    otpApi();
  };
};
export const getProfile = (phone, t) => {
  return (dispatch) => {
    dispatch(userDataLoader());

    const profile = async () => {
      var raw = JSON.stringify({
        phonenumber: `${phone}`,
      });
      try {
        const user = await callApi(GET_PROFILE, true, raw, "POST");

        if (user.status === 200 && user.data !== null) {
          await dispatch(getUserData(user.data, user.data.user.id));
          await dispatch(getSaveProducts(user.data.user.id));
          await dispatch(getBasket(user.data.user.id));
        } else {
          notify(t("systemError"), "error");
        }
      } catch {
        localStorage.removeItem("userToken");
        dispatch(loginStatusFalse());
      }
    };
    profile();
  };
};
export const deleteUserData = () => {
  return {
    type: "LOGOUT",
  };
};
export const userAddress = (address) => {
  return {
    type: "GET_USER_ADDRESS",
    payload: address,
  };
};
export const getUserAddress = (t, userId) => {
  return (dispatch) => {
    const userAddressReq = async () => {
      try {
        dispatch(registerLoadertrue());
        const response = await callApi(
          `${GET_ALL_ADDRESS}?UserId=${userId}`,
          true,
          "{}",
          "POST"
        );
        if (response.status === 200) {
          dispatch(userAddress(response.data));
        } else {
          dispatch(registerLoaderFalse());
        }
      } catch (error) {
        dispatch(registerLoaderFalse());

        notify(t("systemError"), "warning");
      }
    };
    userAddressReq();
  };
};
export const selectedAddress = (address) => {
  return { type: "ACTIVE_ADDRESS", payload: address };
};
export const watchList = (datas) => {
  return {
    type: "WATCH_LIST",
    payload: datas,
  };
};
export const getSaveProducts = (userId) => {
  return (dispatch) => {
    const getSavePro = async () => {
      const response = await callApi(
        `${GET_USER_SAVE_PRODUCT}?UserId=${userId}`
      );
      if (response.status === 200) {
        dispatch(watchList(response.data));
      } else {
        dispatch(watchList(""));
      }
    };
    getSavePro();
  };
};
export const saveProduct = (userId, id, t, setLoader_2) => {
  return (dispatch) => {
    const saveProductReq = async () => {
      try {
        const response = await callApi(
          `${ADD_TO_SAVE_PRODUCT}?UserId=${userId}&ProductId=${id}`,
          false,
          "{}",
          "POST"
        );
        if (response.status === 200) {
          dispatch(getSaveProducts(userId));
          notify(t("sucessSaveProduct"), "success");
        } else {
          notify(t("alreadyBeenSaved"), "warning");
        }
      } catch (error) {
        notify(t("failedSaveProduct"), "error");
      }
      setLoader_2(false);
    };
    saveProductReq();
  };
};
export const updateUserimg = (path, id) => {
  return { type: "UPDATE_USER_IMAGE", path, id };
};
