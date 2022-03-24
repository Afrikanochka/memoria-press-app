import { createAction } from "@reduxjs/toolkit";

export const getAllStudentsRequest = createAction("students/getAllStudentsRequest");
export const getAllStudentsSuccess = createAction("students/getAllStudentsSuccess");
export const getAllStudentsError = createAction("students/getAllStudentsError");