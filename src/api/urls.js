export const LOGIN_SIGNUP = "api/v1/User/Signup";
export const BASE_URL = "https://melinaapi.karmaagy.com/";
export const GET_PROFILE = "api/v1/User/GetProfile";
export const GET_ALL_PRODUCT = "api/Product/GetAllProduct";
export const GET_PRODUCT = "api/Product/GetProduct?ProductId=";
export const GET_RELATED_PRODUCT = "api/Product/GetRelatedProducts";
export const GET_COURSE = "api/Course/GetCourse";
export const GET_ALL_COURSE = "api/Course/GetAllCourse";
export const GET_ALL_ADDRESS = "api/v1/User/UserAddress";
export const ADD_ADDRESS = "api/v1/User/AddAddress";
export const UPDATE_ADDRESS = "api/v1/User/UpdateAddress";
export const ACTIVE_ADDRESS = "api/v1/User/ActiveAddress";
export const ADD_TO_SAVE_PRODUCT = "api/Product/AddToSaveProduct";
export const GET_USER_SAVE_PRODUCT = "api/Product/GetUserSaveProduct";
export const ADD_PRODUCT_BASKET = "api/v1/Basket/AddBasketDetail";
export const ADD_COURSE_BASKET = "api/v1/Basket/AddCourseBasketDetail";
export const GET_BASKET = "api/v1/Basket/GetBasket";
export const GET_BASKET_DETAIL = "api/v1/Basket/GetBasketDetail";
export const GET_BASKET_DETAILS = "api/v1/Basket/GetBasketDetails";
export const DELETE_BASKET_DETAIL = "api/v1/Basket/DeleteBasketDetail";
export const GET_COURSE_HEADLINE = "api/Course/GetCourseHeadlines";
export const GET_HEADLINE = "api/Course/GetHeadline";
export const GET_RELATED_COURSE = "api/Course/GetRelatedCourse";
export const GET_USER_SUGGESTION = "api/Course/GetUserSuggestion";
export const INCREASE = "api/v1/Basket/Incress";
export const DECREASE = "api/v1/Basket/Decress";
export const UPLOAD_IMAGE = "api/v1/Files/UploadImage";
export const UPDATE_PROFILE = "api/v1/User/UpdateProfile";
export const REMOVE_SAVE_PRODUCT = "api/Product/RemoveFromSaveProduct?SaveProductId="
export const saveProduct = (userId, productId) => `api/Product/AddToSaveProduct?UserId=${userId}&ProductId=${productId}`;