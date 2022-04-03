import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth.redux";
import counterReducer from "./counter.redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});

export default store;
