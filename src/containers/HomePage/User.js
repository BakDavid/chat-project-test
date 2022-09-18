import classes from "./User.module.css";

const User = (props) => {
  const { user, onClick } = props;

  return (
    <div onClick={() => onClick(user)} className={classes.displayName}>
      <div className={classes.displayPic}>
        <img
          src="https://avatars.githubusercontent.com/u/44194281?v=4"
          alt=""
        />
      </div>
      <div className={classes.displayUser}>
        <span className={classes.displayFullName}>
          {user.firstName} {user.lastName}
        </span>
        <span
          className={user.isOnline ? classes.onlineStatus : classes.onlineStatusOff}
        ></span>
      </div>
    </div>
  );
};

export default User;
