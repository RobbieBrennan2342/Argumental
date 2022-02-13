import React from "react";

import { AiOutlineLike } from "react-icons/ai";
import { MdPublic } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { FaAngry } from "react-icons/fa";
import classes from "../styling/Categories.module.css";
const CategoryItem = (props) => {
  function catClick() {
    console.log("frame clicked");
  }

  function interClick(event) {
    event.stopPropagation();
    console.log("button clicked");
  }

  return (
    <div className={classes.catsItem} onClick={catClick}>
      <div className={classes.catsLogo}>
        <FaAngry /> <span>Argumental</span>
      </div>
      <div className={classes.catsName}>
        <span>Random</span>
      </div>
      <div className={classes.catsInter}>
        <div className={classes.catsInterItem}>
          <div className={classes.catsIcon}>
            <AiOutlineLike onClick={interClick} />
          </div>
          <div className={classes.catsTotal}>
            <span>2,300</span>
          </div>
        </div>
        <div className={classes.catsInterItem}>
          <div className={classes.catsIcon}>
            <GiBookCover />
          </div>
          <div className={classes.catsTotal}>
            <span>280</span>
          </div>
        </div>
        <div className={classes.catsInterItem}>
          <div className={classes.catsIcon}>
            <MdPublic />
          </div>
          <div className={classes.catsTotal}>
            <span>12,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
