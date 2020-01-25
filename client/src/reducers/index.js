import { combineReducers } from "redux";
import authAdminReducer from "./authAdminReducer";
// eslint-disable-next-line

export default combineReducers({
  // authStudent: authStudentReducer,
  authAdmin: authAdminReducer
});
