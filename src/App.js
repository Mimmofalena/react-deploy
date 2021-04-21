import React, { useState } from "react";
import UsernameList from "./components/UsernameList/UsernameList";

import UsernameForm from "./components/UsernameForm/UsernameForm";
import classes from "./App.module.css";

// const DUMMY_USERNAMES = [
//   { username: "Dome", age: "31" },
//   { username: "Enri", age: "33" },
//   { username: "Ale", age: "34" },
//   { username: "Gio", age: "36" },
// ];

function App() {
  const [username, setUsernames] = useState("");

  const addUsername = (usernameData) => {
    setUsernames((prevUsername) => {
      return [usernameData, ...prevUsername];
    });
  };

  return (
    <div className={classes.app}>
      <UsernameForm onSaveUsernameData={addUsername} user={username} />
      <UsernameList usernameData={username}></UsernameList>
    </div>
  );
}

export default App;
