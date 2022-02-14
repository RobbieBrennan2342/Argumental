import React from "react";
import CategoryItem from "./CategoryItem";
import Advert from "../adverts/Advert";
import classes from "../styling/Categories.module.css";
const Categories = (props) => {
  return (
    <div className={classes.catsContainer}>
      <div className={classes.catsCard}>
        <div className={classes.catsTitle}>
          <span>Categories</span>
          <br />
          <span>(more coming soon...)</span>
        </div>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
      <Advert />
    </div>
  );
};

export default Categories;
