import { createSlice } from "@reduxjs/toolkit";

//create variables that we want redux to store for us
const initialAuthState = {
  loggedIn: false,
};

/*
    this is a redux toolkit pattern to
    create the store for redux it self
    create actions/reducers to manipulate 
    the state of redux and not the state of react
*/
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

//export the actions, so we can modify the variables from other components
export const authActions = authSlice.actions;

//exoirt the auth slice, we can tell redux about the changes we created here
export default authSlice.reducer;
