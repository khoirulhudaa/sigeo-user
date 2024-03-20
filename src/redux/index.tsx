// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import coordinateSlice from "./informationSlice";

const rootReducer = combineReducers({
    Coordinate: coordinateSlice,
});

export default rootReducer;
