import React from "react";
import classes from "./Username.module.css";
import Card from "../UI/Card/Card";

const Username = (props) => {
  // console.log(props);
  // console.log(props.usernamesData[0].username);
  // const displayUsername = props.usernamesData.map((username) => {
  //   return username.username;
  // });
  // const displayUsernameAge = props.usernamesData.map((username) => {
  //   return username.age;
  // });
  // console.log(displayUsername);

  return (
    <Card>
      <li className={classes.container}>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
      </li>
    </Card>
  );
};

export default Username;
