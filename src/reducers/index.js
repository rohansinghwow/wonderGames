import { combineReducers } from "redux";
import gamesReducer from "./gameReducer";

export const allReducers = combineReducers({
    games : gamesReducer,
})

