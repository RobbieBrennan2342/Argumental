import React from "react";
import PostActions from "./PostActions";
import { AiOutlineLike } from "react-icons/ai";
import { MdPublic } from "react-icons/md";
import classes from "../styling/Post.module.css";
const UserPosts = (props) => {
  return (
    <div className={classes.userPostsContainer}>
      <div className={classes.userPost}>
        <h3>{props.title}</h3>
        <span>{props.body}</span>
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
        <PostActions />
      </div>
    </div>
  );
};

export default UserPosts;
