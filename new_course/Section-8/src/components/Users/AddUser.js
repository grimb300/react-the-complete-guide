import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  // Inputs can be handled either using refs...
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // ...or state
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // If we're using refs, have to get the name and age out of the DOM directly
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // When using refs, clear the input directly (could be dangerous)
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // Or when using state, use the update state function
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // Uncomment when using state
  // const usernameChangedHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // Uncomment when using state
  // const ageChangedHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorClearHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClear={errorClearHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // Uncomment when using state
            // onChange={usernameChangedHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // Uncomment when using state
            // onChange={ageChangedHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
