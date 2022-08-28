import { combineReducers } from "redux";
import basketReducer from "./basket/basketReducer";
import langReducer from "./lang/langReducer";
import userRegister from "./register/userRegister";

const rootReducer = combineReducers({
  stateLang: langReducer,
  stateRegister: userRegister,
  stateBasket: basketReducer
});

export default rootReducer;
