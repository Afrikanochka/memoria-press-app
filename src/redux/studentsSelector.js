import { createSelector } from "@reduxjs/toolkit";

export const getAllStudents = (state) => state.students.items;
export const getErrorStudents = (state) => state.students.error;

