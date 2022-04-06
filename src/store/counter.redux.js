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
    addNumber(state, action) {
      state.count += action.payload;
    },
    subNumber(state, action) {
      state.count -= action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
