import React, { useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { signup } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import classes from "./style.module.css";

/**
 * @author
 * @function RegisterPage
 **/

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const registerUser = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      occupation,
      email,
      password,
    };

    if (firstName === "") {
      alert("First name is required");
      return;
    }
    if (lastName === "") {
      alert("Last name is required");
      return;
    }
    if (occupation === "") {
      alert("Occupation is required");
      return;
    }
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Not a correct email");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }

    dispatch(signup(user));
  };

  if (auth.authenticated) {
    return <Navigate to={`/`} />;
  }

  return (
    <Layout>
      <div className={classes.registerContainer}>
        <Card>
          <form onSubmit={registerUser}>
            <h3 className={classes.middleText}>Sign up</h3>

            <input
              className={classes.inputField}
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />

            <input
              className={classes.inputField}
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />

            <input
              className={classes.inputField}
              name="occupation"
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="Occupation"
            />

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
              <button>Sign up</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterPage;
