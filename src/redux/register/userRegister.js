const initializedState = {
  data: [],
  allAddress: [],
  watchList: "",
  addressLoader: true,
  activeAddress: "",
  loader: false,
  codeStatus: false,
  loginStatus: false,
  userDataLoader: false,
  userId: "",
  showPopup: false,
  addressPopUp: false,
  phone: "",
  userImg: {
    path: "/Assets/images/profile.png",
    id: ""
  }
};
const userRegister = (state = initializedState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        data: action.data,
        userDataLoader: false,
        userId: action.id,
        loginStatus: true,
        phone: action.data.user.phoneNumber,
        userImg: {
          path:
            action.data.profilePic !== null
              ? action.data.profilePic.filePath
              : "/Assets/images/profile.png",
          id: action.data.profilePic !== null ? action.data.profilePic.id : ""
        }
      };
    case "USER_DATA_LOADER":
      return {
        ...state,
        userDataLoader: true
      };
    case "REGISTER_LOADER_FALSE":
      return {
        ...state,
        loader: false
      };
    case "REGISTER_LOADER_TRUE":
      return {
        ...state,
        loader: true
      };
    case "SEND_CODE_SUCCESS":
      return {
        ...state,
        codeStatus: true,
        loader: false
      };
    case "SEND_CODE_FAILED":
      return {
        ...state,
        codeStatus: false,
        code: "",
        loader: false
      };
    case "LOGIN_STATUS_TRUE":
      return {
        ...state,
        loginStatus: true,
        loader: false
      };
    case "LOGIN_STATUS_FALSE":
      return {
        ...state,
        loginStatus: false,
        loader: false,
        userDataLoader: false
      };
    case "LOGOUT":
      return {
        data: [],
        allAddress: [],
        watchList: "",
        addressLoader: true,
        activeAddress: "",
        loader: false,
        codeStatus: false,
        loginStatus: false,
        userDataLoader: false,
        userId: "",
        showPopup: false,
        addressPopUp: false,
        phone: "",
        userImg: {
          path: "/Assets/images/profile.png",
          id: ""
        }
      };
    case "SHOW_POPUP":
      return {
        ...state,
        showPopup: true
      };
    case "HIDE_POPUP":
      return {
        ...state,
        showPopup: false,
        codeStatus: false,
        addressPopUp: false
      };
    case "GET_USER_ADDRESS":
      return {
        ...state,
        allAddress: action.payload,
        loader: false
      };
    case "SHOW_POPUP_ADDRESS":
      return {
        ...state,
        addressPopUp: true
      };
    case "ACTIVE_ADDRESS":
      return {
        ...state,
        activeAddress: action.payload
      };
    case "UPDATE_USER_IMAGE":
      return {
        ...state,
        userImg: {
          path: action.path,
          id: action.id
        }
      };
    case "WATCH_LIST":
      return {
        ...state,
        watchList: action.payload
      };
    default:
      return state;
  }
};

export default userRegister;
