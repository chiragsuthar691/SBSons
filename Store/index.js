"use client";

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import TodoSlice from "./Slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
  middleware: [thunk],
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
