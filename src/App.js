import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/content/Home";
import Post from "./components/post/Post";
import Categories from "./components/content/Categories";
import Profile from "./components/profile/Profile";
import Favourites from "./components/content/Favourites";
import Card from "./components/UI/Card";
import Advert from "./components/adverts/Advert";

function App() {
  return (
    <Router>
      <Card>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
        <Routes>
          <Route path="/categories" element={<Categories />}></Route>
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Routes>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
        <Advert />
      </Card>
    </Router>
  );
}

export default App;
