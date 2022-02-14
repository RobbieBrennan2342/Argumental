import React from "react";
import classes from "../styling/Profile.module.css";
const UserPosts = () => {
  return (
    <div className={classes.userPostsContainer}>
      <div className={classes.userPost}>
        <h2>Title</h2>
        <p>The body of the post</p>
        <div className={classes.postInter}>
          <span>Likes</span>
          <span>12</span>
        </div>
        <div className={classes.postInter}>
          <span>Follows</span>
          <span>120</span>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
