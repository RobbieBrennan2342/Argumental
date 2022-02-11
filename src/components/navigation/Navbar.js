import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiCategory } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaVoteYea, FaAngry } from "react-icons/fa";
import classes from "../styling/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={classes.navContainer}>
        <ul className={classes.navLinks}>
          <div className={classes.navTitle}>
            <FaAngry />
            <h1>Argumental</h1>
          </div>
          <li>
            <input type="search" placeholder="Search..." />
          </li>
          <li>
            <Link to="/">
              <BiHome style={{ marginRight: 2 }} /> Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiHome style={{ marginRight: 2 }} /> Home
            </Link>
          </li>
          <li>
            <Link to="post">
              <IoIosCreate style={{ marginRight: 2 }} />
              Post
            </Link>
          </li>
          <li>
            <Link to="profile">
              <CgProfile style={{ marginRight: 2 }} />
              Profile
            </Link>
          </li>
          <li>
            <Link to="categories">
              <BiCategory style={{ marginRight: 2 }} />
              Categories
            </Link>
          </li>
          <li>
            <Link to="favourites">
              <FaVoteYea style={{ marginRight: 2 }} />
              Favourites
            </Link>
          </li>
          {/* <div className={classes.navProfile}>
            <h1>Robbie Brennan</h1>
            <p>Location</p>
            <p>Image</p>
          </div> */}
        </ul>
      </div>
      <div className={classes.mobileNav}>
        <ul className={classes.mobileNavLinks}>
          <li>
            <Link to="/">
              <BiHome style={{ color: "#769FCD", fontSize: 20 }} />
            </Link>
          </li>
          <li>
            <Link to="post">
              <IoIosCreate style={{ color: "#769FCD", fontSize: 20 }} />
            </Link>
          </li>
          <li>
            <Link to="profile">
              <CgProfile style={{ color: "#769FCD", fontSize: 20 }} />
            </Link>
          </li>
          <li>
            <Link to="categories">
              <BiCategory style={{ color: "#769FCD", fontSize: 20 }} />
            </Link>
          </li>
          <li>
            <Link to="favourites">
              <FaVoteYea style={{ color: "#769FCD", fontSize: 20 }} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
