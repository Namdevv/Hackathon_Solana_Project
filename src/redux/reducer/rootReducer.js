import { combineReducers } from "redux";
import userReducer from "./useReducer";

export let rootReducer = combineReducers({ userReducer });
