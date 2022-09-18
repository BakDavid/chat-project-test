import classes from "./PersonalUser.module.css";

const PersonalUser = (props) => {
  const { user } = props;

  return (
    <div className={classes.container}>
      <img
        src="https://avatars.githubusercontent.com/u/44194281?v=4"
        alt="Profile pic"
      />
      <span className={classes.personalOnlineStatus}></span>
      <div className={classes.informationSection}>
        <div className={classes.fullName}>
          {user.firstName} {user.lastName}
        </div>
        <div className={classes.occupation}>{user.occupation == undefined ? "Web Developer" : user.occupation}</div>
        <div className={classes.status}>Online</div>
      </div>
    </div>
  );
};

export default PersonalUser;
