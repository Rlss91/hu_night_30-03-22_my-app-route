import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import AuthGuardRoute from "./AuthGurad/AuthGuardRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import NotFoundPage from "./pages/NotFoundPage";
import CounterPage from "./pages/CounterPage";
import CardsNumberPage from "./pages/CardsNumberPage";
import QueryParamsPage from "./pages/QueryParamsPage";
import ParamsPage from "./pages/ParamsPage";
import UseCallBackPage from "./pages/UseCallBackPage";

import useRandomNumber from "./hooks/useRandomNumber";

function App() {
  const rndNumber = useRandomNumber(50, 100);

  return (
    <div className="container">
      <NavbarComponent />
      {/* will popup toast alerts here */}
      <ToastContainer />
      <Routes>
        {/*http://localhost:3000/ */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />}></Route>
        {/*http://localhost:3000/login */}
        <Route path="/login" element={<LoginPage />} />
        {/*http://localhost:3000/cardspanel */}
        {/* <AuthGuardRoute path="/cardspanel" component={CardsPanelPage} /> */}
        <Route path="/cardspanel" element={<AuthGuardRoute />}>
          <Route element={<CardsPanelPage />} />
        </Route>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/cardsnumber" element={<CardsNumberPage />} />
        <Route path="/qparams" element={<QueryParamsPage />} />
        <Route path="/params/:key" element={<ParamsPage />} />
        <Route path="/usecallbackpage" element={<UseCallBackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <h3>{rndNumber}</h3>
    </div>
  );
}

export default App;
