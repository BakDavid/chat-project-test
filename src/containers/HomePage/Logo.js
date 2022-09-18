import React from "react";
import mainLogo from "../../assets/images/Logo.png";
import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.logoSection}>
      <img src={mainLogo} alt="Logo" />
    </div>
  );
}
