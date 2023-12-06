import { combineReducers } from "redux";
//import todoReducer from "./todoReducers";
import todoReducer from "../ducks/todoDucks"

const rootReducer = combineReducers({
    todo:todoReducer
});

export default rootReducer; 