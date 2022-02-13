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
    // Maybe add an image to the top of category card????
    <div className={classes.catsItem} onClick={catClick}>
      <div className={classes.catsLogo}>
        <FaAngry /> <span>Argumental</span>
      </div>
      <div className={classes.catsImg}>
        <img src="https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo=" />
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
            <GiBookCover onClick={interClick} />
          </div>
          <div className={classes.catsTotal}>
            <span>280</span>
          </div>
        </div>
        <div className={classes.catsInterItem}>
          <div className={classes.catsIcon}>
            <MdPublic onClick={interClick} />
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
