import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

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
      </Switch>
    </div>
  );
}

export default App;
