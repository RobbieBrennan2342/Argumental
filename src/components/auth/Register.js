import React, { useState, useRef } from "react";
import classes from "../styling/Register.module.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(12);

  const nameRef = useRef();
  const emailRef = useRef();
  const confirmRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();

  const inputChangeHandler = () => {
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);
    setConfirmEmail(confirmRef.current.value);
    setPassword(passwordRef.current.value);
    setAge(ageRef.current.value);
  };

  const formChangeHandler = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(confirmEmail);
    console.log(password);
    console.log(age);
  };

  return (
    <div className={classes.registerContainer}>
      <div className={classes.registerTitle}>
        <span>Register for Argumental</span>
      </div>
      <div className={classes.registerFormContainer}>
        <form className={classes.registerForm} onSubmit={formChangeHandler}>
          <label htmlFor="name">Full Name</label>
          <input
            ref={nameRef}
            value={name}
            onChange={inputChangeHandler}
            type="text"
            placeholder="Enter full name"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={inputChangeHandler}
            ref={emailRef}
            value={email}
            type="email"
            placeholder="Enter email address"
          />
          <label htmlFor="email">Confirm Email</label>
          <input
            onChange={inputChangeHandler}
            ref={confirmRef}
            value={confirmEmail}
            type="email"
            placeholder="Confirm email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={inputChangeHandler}
            ref={passwordRef}
            value={password}
            type="password"
          />
          <label htmlFor="age">Age</label>
          <input
            onChange={inputChangeHandler}
            ref={ageRef}
            value={age}
            type="number"
            min="12"
          />
          <div className={classes.regTerms}>
            <input type="radio" />
            <label htmlFor="accept">
              By clicking here you accept the terms and conditions of
              Argumental.com
            </label>
          </div>
          <button className={classes.regBtn} type="submit">
            Register
          </button>
        </form>
      </div>
      <div className={classes.registerTagline}>
        <span>
          The place where everyones opinion is right and wrong at the same time.
        </span>
      </div>
    </div>
  );
};

export default Register;
