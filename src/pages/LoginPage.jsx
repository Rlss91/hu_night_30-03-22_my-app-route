import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";

import { authActions } from "../store/auth.redux";

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //routes
  const history = useHistory();

  //redux
  const dispatch = useDispatch();

  const handleEmailChange = (ev) => {
    setEmailInput(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPasswordInput(ev.target.value);
  };
  const handleSubmit = (ev) => {
    //prevent refresh because react alerjic to refresh
    ev.preventDefault();
    //send http post request to the server with body (email, password)
    axios
      .post("/auth", { email: emailInput, password: passwordInput })
      .then((response) => {
        console.log("response", response);
        //save token from server to local storage
        localStorage.setItem("tokenKey", response.data.token);
        dispatch(authActions.login());
        history.push("/cardspanel");
      })
      .catch((err) => {
        console.log("err.request", err.request);
        if (err.response) {
          //error from server
          toast(err.response.data);
        } else if (err.request) {
          //error if server not responding
          toast("Something went wrong");
        } else {
          toast("Something went wrong");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={emailInput}
          onChange={handleEmailChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
