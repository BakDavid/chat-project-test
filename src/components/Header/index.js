import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch(logout())
  // }

  return (
    <header className={classes.header}>
      <div style={{ display: "flex" }}>
        <div className={classes.logo}>Chat Application</div>

        {!auth.authenticated ? (
          <ul className={classes.leftMenu}>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>Sign up</NavLink>
            </li>
          </ul>
        ) : null}
      </div>
      <div style={{ margin: "20px 0", color: "#fff", fontWeight: "bold" }}>
        {auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ""}
      </div>
      <ul className={classes.menu}>
        {auth.authenticated ? (
          <li>
            <Link
              to={"#"}
              onClick={() => {
                dispatch(logout(auth.uid));
              }}
            >
              Logout
            </Link>
          </li>
        ) : null}
      </ul>
    </header>
  );
};

export default Header;
