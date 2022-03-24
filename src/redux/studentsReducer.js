import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getAllStudentsError, getAllStudentsRequest, getAllStudentsSuccess } from "./studentsAction";

const studentsListReducer = createReducer([], {
    [getAllStudentsSuccess]: (_, action) => action.payload.students,
});

const isLoadingReducer = createReducer(false, {
  [getAllStudentsRequest]: () => true,
  [getAllStudentsSuccess]: () => false,
  [getAllStudentsError]: () => false,
});

const errorReducer = createReducer("", {
  [getAllStudentsRequest]: () => "",
  [getAllStudentsError]: (_, { payload }) => payload,
});

const studentsReducer = combineReducers({
    items: studentsListReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
});

export default studentsReducer;