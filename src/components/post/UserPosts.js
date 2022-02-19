import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostActions from "./PostActions";
import { AiOutlineLike } from "react-icons/ai";
import { MdPublic } from "react-icons/md";
import classes from "../styling/Post.module.css";
const UserPosts = (props) => {
  const maxLength = 50;

  const body = props.body;

  return (
    <div className={classes.userPostsContainer}>
      <div className={classes.userPost}>
        <div className={classes.userPostImage}>
          <img
            src="https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg"
            alt="userpost"
          />
        </div>
        <h3>{props.title}</h3>
        {body.length > maxLength ? (
          <span>
            {`${body.substring(0, maxLength)}...`}
            <Link to="posts/123">Read More</Link>
          </span>
        ) : (
          <span>{props.body}</span>
        )}

        <div className={classes.postInterContainer}>
          <div className={classes.postInter}>
            <AiOutlineLike />
            <span>12</span>
          </div>
          <div className={classes.postInter}>
            <MdPublic />
            <span>120</span>
          </div>
        </div>
        {/* <PostActions /> */}
      </div>
    </div>
  );
};

export default UserPosts;
