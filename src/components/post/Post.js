import React, { useState, useRef } from "react";
import { FaRegLaughWink } from "react-icons/fa";

import classes from "../styling/Post.module.css";
const Post = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [category, setCategory] = useState("");

  const bodyRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();

  const inputChangeHandler = () => {
    setPostTitle(titleRef.current.value);
    setPostBody(bodyRef.current.value);
    setCategory(categoryRef.current.value);
  };

  const postSubmitHandler = (e) => {
    e.preventDefault();
    console.log(postTitle);
    console.log(postBody);
    console.log(category);
  };

  return (
    <div className={classes.mainPostContainer}>
      <div className={classes.formTitle}>
        <span>Post your argument</span>
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={postSubmitHandler}>
          <label htmlFor="title">Title</label>
          <input
            className={classes.postTitleInput}
            ref={titleRef}
            value={postTitle}
            onChange={inputChangeHandler}
            type="text"
            placeholder="Make it stand out!!"
          />
          <label htmlFor="body">Post</label>
          <textarea
            className={classes.postBodyInput}
            onChange={inputChangeHandler}
            ref={bodyRef}
            value={postBody}
            type="text"
            placeholder="Start your argument here!!"
          />
          <input type="file" name="ImageStyle" />
          <label htmlFor="category">Category</label>
          <select
            ref={categoryRef}
            onChange={inputChangeHandler}
            className={classes.catSelect}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
          <button className={classes.postBtn} type="submit">
            Submit <FaRegLaughWink />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
