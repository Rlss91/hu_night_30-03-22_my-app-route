import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import AuthGuardRoute from "./AuthGurad/AuthGuardRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="container">
      <NavbarComponent />
      {/* will popup toast alerts here */}
      <ToastContainer />
      <Switch>
        {/*http://localhost:3000/ */}
        <Route path="/" exact component={HomePage}></Route>
        {/*http://localhost:3000/login */}
        <Route path="/login" component={LoginPage} />
        {/*http://localhost:3000/cardspanel */}
        <AuthGuardRoute path="/cardspanel" component={CardsPanelPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
