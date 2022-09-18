import classes from "./User.module.css";

const User = (props) => {
  const { user, onClick } = props;

  return (
    <div onClick={() => onClick(user)} className={classes.container}>
      <img src="https://avatars.githubusercontent.com/u/44194281?v=4" />
      <span
        className={
          user.isOnline
            ? classes.personalOnlineStatus
            : classes.personalOfflineStatus
        }
      ></span>
      <div className={classes.informationSection}>
        <div className={classes.fullName}>
          {user.firstName} {user.lastName}
        </div>
        <div className={classes.occupation}>
          {user.occupation == undefined ? "Web Developer" : user.occupation}
        </div>
        {user.isOnline ? (
          <div className={classes.onlineStatus}>Online</div>
        ) : (
          <div className={classes.offlineStatus}>Offline</div>
        )}
      </div>
    </div>
  );
};

export default User;
