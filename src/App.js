import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/content/Home";
import Post from "./components/post/Post";
import Categories from "./components/categories/Categories";
import Profile from "./components/profile/Profile";
import Favourites from "./components/content/Favourites";
import Card from "./components/UI/Card";
import Advert from "./components/adverts/Advert";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(!auth);
  };

  return (
    <Categories />
    // <Router>
    //   <Card>
    //     {auth ? <Navbar /> : <Login onAuth={handleAuth} />}
    //     <Routes>
    //       <Route path={!auth ? "/login" : "/"} exact element={<Home />}></Route>
    //     </Routes>
    //     <Routes>
    //       <Route path="/post" exact element={<Post />}></Route>
    //     </Routes>
    //     <Routes>
    //       <Route path="/categories" rxact element={<Categories />}></Route>
    //     </Routes>
    //     <Routes>
    //       <Route path="/profile" exact element={<Profile />}></Route>
    //     </Routes>
    //     <Routes>
    //       <Route path="/favourites" exact element={<Favourites />}></Route>
    //     </Routes>
    //   </Card>
    // </Router>
  );
}

export default App;
