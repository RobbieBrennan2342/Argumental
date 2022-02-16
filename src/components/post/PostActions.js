import React from "react";
import classes from "../styling/Post.module.css";
const PostActions = () => {
  return (
    <div className={classes.postActions}>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default PostActions;
