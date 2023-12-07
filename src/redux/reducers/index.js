import { combineReducers } from "redux";
//import todoReducer from "./todoReducers";
//import todoReducer from "../ducks/todoDucks"
import todoReducer from "../slice/todoSlice"; 

const rootReducer = combineReducers({
    todo:todoReducer
});

export default rootReducer; 