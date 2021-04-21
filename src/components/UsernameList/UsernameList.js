import React from "react";
import classes from "./UsernameList.module.css";
import Username from "../Username/Username";

const UsernameList = (props) => {
  const usernames = props.usernameData;

  if (usernames.length === 0) {
    return <h2 className={classes["username-list"]}>No names found</h2>;
  }

  return (
    <div className={classes["username-list"]}>
      {usernames.map((username) => {
        return (
          <Username
            name={username.username}
            age={username.age}
            key={Math.random().toString()}
          />
        );
      })}
      {/* <Username usernamesData={usernames}></Username> */}
    </div>
  );
};
export default UsernameList;

//usernames.length > 0 &&
