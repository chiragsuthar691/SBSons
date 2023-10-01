"use client";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  list: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUsersList: (state, action) => {
      state.list = action.payload;
    },
    setUsersList: (state, action) => {
      state.list = action.payload;
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addUser, getUsersList, setUsersList } = counterSlice.actions;

export default counterSlice.reducer;
