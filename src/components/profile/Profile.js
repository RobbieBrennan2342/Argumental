import React from "react";
import UserPosts from "../post/UserPosts";
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
          </div>
          <div className={classes.profileInter}>
            <div className={classes.profileInterItems}>
              <span>Likes</span>
              <span>Posts</span>
              <span>Followers</span>
            </div>
            <div className={classes.profileInterTotals}>
              <span>120</span>
              <span>12</span>
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
