import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

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
      <Switch>
        {/*http://localhost:3000/ */}
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={HomePage}></Route>
        {/*http://localhost:3000/login */}
        <Route path="/login" component={LoginPage} />
        {/*http://localhost:3000/cardspanel */}
        <AuthGuardRoute path="/cardspanel" component={CardsPanelPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/cardsnumber" component={CardsNumberPage} />
        <Route path="/qparams" component={QueryParamsPage} />
        <Route path="/params/:key" component={ParamsPage} />
        <Route path="/usecallbackpage" component={UseCallBackPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <h3>{rndNumber}</h3>
    </div>
  );
}

export default App;
