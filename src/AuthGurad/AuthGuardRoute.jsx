import { Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const AuthGuardRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Route
      {...rest}
      element={loggedIn === true ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default AuthGuardRoute;
