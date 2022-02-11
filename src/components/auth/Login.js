import React from "react";
import { FaAngry } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";
import classes from "../styling/Login.module.css";
const Login = (props) => {
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginTitle}>
        <FaAngry style={{ fontSize: 40 }} />
        <h2>Welcome to Argumental</h2>
        <br />
        <span>
          Where <em>complete strangers</em> come to tell you <br /> that your
          opinion is completely <em>wrong</em>.
        </span>
      </div>
      <div className={classes.loginFormContainer}>
        <div className={classes.loginSocials}>
          <button className={`${classes.socialBtn} ${classes.google}`}>
            Login with Google <BsGoogle />
          </button>
          <button className={`${classes.socialBtn} ${classes.facebook}`}>
            Login with Facebook <BsFacebook />
          </button>
          <button className={`${classes.socialBtn} ${classes.twitter}`}>
            Login with Twitter <BsTwitter />
          </button>
        </div>
        <form className={classes.loginForm}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button
            onClick={props.onAuth}
            className={classes.loginBtn}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className={classes.notRegistered}>
        <button className={`${classes.socialBtn} ${classes.notRegBtn}`}>
          Dont have an account? Click here!
        </button>
      </div>
    </div>
  );
};

export default Login;
