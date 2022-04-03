import { createSlice } from "@reduxjs/toolkit";

const initialCounteState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounteState,
  reducers: {
    add1(state) {
      state.count++;
    },
    sub1(state) {
      state.count--;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
