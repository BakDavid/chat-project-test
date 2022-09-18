import React from "react";
import classes from "./Search.module.css";

export default function Search() {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.activeChats}>
        Active Chats<button>+</button>
      </div>
      <input placeholder="Search people" />
    </div>
  );
}
