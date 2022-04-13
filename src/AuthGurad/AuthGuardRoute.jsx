import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const AuthGuardRoute = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return loggedIn === true ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuardRoute;
