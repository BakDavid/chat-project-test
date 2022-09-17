import React, { useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { signin } from "../../actions";
import classes from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
  };

  if (auth.authenticated) {
    return <Navigate to={`/`} />;
  }

  return (
    <Layout>
      <div className={classes.loginContainer}>
        <Card>
          <form onSubmit={userLogin}>
            <h3 className={classes.middleText}>Login</h3>
            <input
              className={classes.inputField}
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              className={classes.inputField}
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <div className={classes.buttonField}>
              <button>Login</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
