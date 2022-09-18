import React, { useEffect, useState } from "react";
import classes from "./style.module.css";
import IconSend from "../../assets/images/IconSend.png"
import Layout from "../../components/Layout";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import {
  getRealtimeUsers,
  updateMessage,
  getRealtimeConversations,
} from "../../actions";
import Logo from "./Logo";
import PersonalUser from "./PersonalUser";
import Search from "./Search";

const HomePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");
  const [userUid, setUserUid] = useState(null);
  let unsubscribe;

  useEffect(() => {
    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
      .then((unsubscribe) => {
        return unsubscribe;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then((f) => f()).catch((error) => console.log(error));
    };
  }, []);

  const initChat = (user) => {
    setChatStarted(true);
    setChatUser(`${user.firstName} ${user.lastName}`);
    setUserUid(user.uid);

    console.log(user);

    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
  };

  const submitMessage = (e) => {
    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message,
    };

    if (message !== "") {
      dispatch(updateMessage(msgObj)).then(() => {
        setMessage("");
      });
    }
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.listOfUsers}>
          <Logo />
          <PersonalUser key={auth.uid} user={auth} />
          <Search />
          {user.users.length > 0
            ? user.users.map((user) => {
                return <User onClick={initChat} key={user.uid} user={user} />;
              })
            : null}
        </div>

        <div className={classes.chatArea}>
          <div className={classes.chatHeader}>
            {chatStarted ? chatUser : ""}
          </div>
          <div className={classes.messageSections}>
            {chatStarted
              ? user.conversations.map((con) => (
                  <div
                    style={{
                      textAlign: con.user_uid_1 == auth.uid ? "right" : "left",
                    }}
                  >
                    <p className={classes.messageStyle}>{con.message}</p>
                  </div>
                ))
              : null}
          </div>
          {chatStarted ? (
            <div className={classes.chatControls}>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here"
              />
              <button onClick={submitMessage}>
                <img src={IconSend} />
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
