import callApi from "../../api/callApi";
import {
  ADD_COURSE_BASKET,
  ADD_PRODUCT_BASKET,
  DECREASE,
  DELETE_BASKET_DETAIL,
  GET_BASKET,
  GET_BASKET_DETAIL,
  GET_BASKET_DETAILS,
  INCREASE
} from "../../api/urls";
import { notify } from "../../tools/toast/toast";
import { userDataLoader } from "../register/userRegisterActions";

export const addBasket = (user, product, t, setLoader) => {
  return (dispatch) => {
    var raw = JSON.stringify({
      userid: user.userId,
      title: product.title,
      phonenumber: user.phone,
      description: product.description,
      qty: 1,
      amount: product.price,
      productid: product.id
    });
    const addBasketReq = async () => {
      const response = await callApi(ADD_PRODUCT_BASKET, true, raw, "POST");
      if (response.status === 200) {
        notify(t("addBasketSuccessfully"), "success");
        dispatch(addItem(product));
        dispatch(getBasket(user.userId));
      } else if (response.status === 201) {
        notify(t("readyInBasket"), "success");
      } else if (response.status === 206) {
        notify(t("noQty"), "warning");
      } else {
        notify(t("systemError"), "error");
      }
      setLoader(false);
    };
    addBasketReq();
  };
};
export const addCourseBasket = (user, course, t, setLoader) => {
  return (dispatch) => {
    var raw = JSON.stringify({
      userid: user.userId,
      title: course.title,
      phonenumber: user.phone,
      description: "course",
      qty: 1,
      amount: course.price,
      courseid: course.id
    });
    const addBasketReq = async () => {
      const response = await callApi(ADD_COURSE_BASKET, true, raw, "POST");
      if (response.status === 200) {
        notify(t("addBasketSuccessfully"), "success");
        dispatch(getBasket(user.userId));
      } else if (response.status === 201) {
        notify(t("readyCourseInBasket"), "success");
      } else {
        notify(t("systemError"), "error");
      }
      setLoader(false);
    };
    addBasketReq();
  };
};
export const basketType = (type) => {
  return {
    type: "BASKET_TYPE",
    payload: type
  };
};
export const getBasket = (userId) => {
  return (dispatch) => {
    const getBasketReq = async () => {
      const response = await callApi(
        `${GET_BASKET}?UserId=${userId}`,
        true,
        "{}",
        "GET"
      );
      if (response.status === 200) {
        if (response.data !== null) {
          dispatch(
            getBasketDetails(response.data.id, response.data.basketType)
          );
        } else {
          dispatch(getBasketDetails(response.data, response.data));
        }
      }
    };
    getBasketReq();
  };
};
export const setbasketDetails = (data) => {
  return {
    type: "SET_BASKET_DETAILS",
    payload: data
  };
};
export const getBasketDetails = (basketId, type) => {
  return (dispatch) => {
    const getBasketDetailsReq = async () => {
      const response = await callApi(
        `${GET_BASKET_DETAILS}?id=${basketId}`,
        true,
        "{}",
        "GET"
      );

      if (response.status === 200) {
        dispatch(setbasketDetails(response.data));
        dispatch(basketType(type));
      }
    };
    getBasketDetailsReq();
  };
};
export const deleteBasketData = () => {
  return {
    type: "DELETE_BASKET_DATA"
  };
};

export const increase = (data, setPreload, t) => {
  return (dispatch) => {
    const increaseReq = async () => {
      const response = await callApi(
        `${INCREASE}?BasketDetailId=${data.id}`,
        true,
        "{}",
        "POST"
      );
      if (response.status === 200) {
        setPreload(false);
        dispatch(increaseQty(data));
      } else if (response.status === 206) {
        setPreload(false);

        notify(t("noQty"), "error");
      }
    };
    increaseReq();
  };
};
export const decrease = (data, setPreload) => {
  return (dispatch) => {
    const decreaseReq = async () => {
      const response = await callApi(
        `${DECREASE}?BasketDetailId=${data.id}`,
        true,
        "{}",
        "POST"
      );
      if (response.status === 200) {
        dispatch(decreaseQty(data));
      } else {
        setPreload(false);
      }
      setPreload(false);
    };
    decreaseReq();
  };
};

export const addItem = (productdata) => {
  return {
    type: "ADD_ITEM",
    payload: productdata
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product
  };
};
export const remove = (data) => {
  return (dispatch) => {
    const deleteReq = async () => {
      const response = await callApi(
        `${DELETE_BASKET_DETAIL}?BasketDetailId=${data.id}`,
        true,
        "{}",
        "POST"
      );
      if (response.status === 200) {
        dispatch(removeItem(data));
      }
    };
    deleteReq();
  };
};

export const increaseQty = (product) => {
  return {
    type: "INCREASE",
    payload: product
  };
};

export const decreaseQty = (product) => {
  return {
    type: "DECREASE",
    payload: product
  };
};
