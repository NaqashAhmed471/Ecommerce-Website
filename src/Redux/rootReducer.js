import { combineReducers } from "redux";
import categoryReducer from "./categories/categoryReducer";
const rootReducer = combineReducers({categoryReducer});
export default rootReducer
