import React, { useState } from "react";
import classes from "./UsernameForm.module.css";
import InvalidInput from "../InvalidInput/InvalidInput";

const UsernameForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const invalidUsernameMessage = "Please, enter a valid username and age";

  const invalidAgeMessage = "Please, enter a Age which is greater than 0";

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const usernameData = {
      username: enteredUsername,
      age: enteredAge,
    };

    errorHandlerFunction(usernameData.username, usernameData.age);

    props.onSaveUsernameData(usernameData);

    // setEnteredUsername("");
    // setEnteredAge("");
  };

  const errorHandlerFunction = (username, age) => {
    if (username.length <= 0 || age.length <= 0) {
      setInvalidInput(true);
      console.log("lenght <= 0");
    } else if (age < 0) {
      setInvalidInput(true);
      console.log("age < 0");
    }
  };

  const hideBackdrop = () => {
    setInvalidInput(false);
    setEnteredUsername(enteredUsername);
    setEnteredAge(enteredAge);
  };

  return (
    <div>
      {invalidInput === true && (
        <InvalidInput
          username={enteredUsername}
          age={enteredAge}
          onChangeInvalidInput={setInvalidInput}
          errorHandler={errorHandlerFunction}
          hideModal={hideBackdrop}
        >
          <p className={classes.error}>
            {enteredUsername.length <= 0 || enteredAge.length <= 0
              ? invalidUsernameMessage
              : ""}
            {enteredAge < 0
              ? "Please, enter a Age which is greater than 0"
              : " "}
          </p>
        </InvalidInput>
      )}

      <form onSubmit={submitHandler} className={classes.container}>
        <div className={classes.username}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            onChange={usernameChangedHandler}
            name="username"
          ></input>
        </div>
        <div className={classes.age}>
          <label htmlFor="age">Age</label>
          <input
            value={enteredAge}
            onChange={ageChangedHandler}
            name="age"
            type="number"
            // min="0"
          ></input>
        </div>

        <button type="submit" className={invalidInput ? "classes.invalid" : ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
