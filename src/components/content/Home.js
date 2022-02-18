import React from "react";
import UserPosts from "../post/UserPosts";
import Navbar from "../navigation/Navbar";
import classes from "../styling/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { dummyData } from "../../test data/dummyData";

const Home = () => {
  return (
    <>
      <div className={classes.homeContainer}>
        <h1>Cases</h1>
        <div className={classes.homeContent}>
          <InfiniteScroll
            dataLength={dummyData.length}
            hasMore={false}
            loader={<h4>Loading...</h4>}
          >
            {dummyData.map((posts) => (
              <UserPosts key={posts.id} title={posts.title} body={posts.body} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Home;
