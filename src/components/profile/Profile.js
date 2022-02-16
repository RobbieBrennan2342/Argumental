import React from "react";
import UserPosts from "../post/UserPosts";
import { AiOutlineLike } from "react-icons/ai";
import { MdPublic } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import classes from "../styling/Profile.module.css";
const Profile = (props) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileTitle}>
        <span>Profile</span>
      </div>
      <div className={classes.profileCard}>
        <div className={classes.profileInfo}>
          <div className={classes.profileImg}>
            <img
              src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
              alt="profile"
            />
          </div>
          <div className={classes.profileDetails}>
            <span>Name: Robbie Brennan</span>
            <span>Location: Ireland</span>
            <span>Age: 33</span>
            <button className={classes.profileEditBtn}>Edit</button>
          </div>
          <div className={classes.profileInter}>
            <div className={classes.profileInterItems}>
              <AiOutlineLike className={classes.profileInterIcon} />
              <span>Likes</span>
              <span>120</span>
            </div>
            <div className={classes.profileInterItems}>
              <GiBookCover className={classes.profileInterIcon} />
              <span>Posts</span>
              <span>12</span>
            </div>
            <div className={classes.profileInterItems}>
              <MdPublic className={classes.profileInterIcon} />
              <span>Followers</span>
              <span>1200</span>
            </div>
          </div>
        </div>
        <UserPosts />
        <UserPosts />
        <UserPosts />
        <UserPosts />
        <UserPosts />
      </div>
    </div>
  );
};

export default Profile;
