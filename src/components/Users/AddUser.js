import React, { useState } from "react";
import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";
import ErrorPopup from "../UI/ErrorPopup.js";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age.'
        });
        return;
    } 
    if (+age < 1){
        setError({
            title: 'Invalid age',
            message: 'Age must be a positive number.'
        });
        return;
    } 

    props.onAddUser(username, age, Math.random().toString());

    setUsername("");
    setAge("");
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorPopup title={error.title} message={error.message} onDismiss={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={formSubmitionHandler}>
          <label htmlFor="username">Username:</label>
          <input
            onChange={usernameHandler}
            value={username}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age:</label>
          <input onChange={ageHandler} value={age} type="number" id="age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
