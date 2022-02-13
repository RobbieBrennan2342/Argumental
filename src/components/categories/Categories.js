import React from "react";
import CategoryItem from "./CategoryItem";
import classes from "../styling/Categories.module.css";
const Categories = (props) => {
  return (
    <div className={classes.catsContainer}>
      <div className={classes.catsCard}>
        <div className={classes.catsTitle}>
          <span>Categories</span>
        </div>
        <CategoryItem />
      </div>
    </div>
  );
};

export default Categories;
