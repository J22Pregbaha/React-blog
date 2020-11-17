import React, { useState } from "react";

import Header from "./partials/Header";
import Footer from "./partials/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Compose from "./Compose";
import Contact from "./Contact";
import Home from "./Home";
import Post from "./Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title, content) {
    setPosts((previousPosts) => {
      return [...previousPosts, { title: title, content: content }];
    });
  }

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home allPosts={posts} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/compose">
            <Compose submitPost={addPost} />
          </Route>
          <Route path={"/posts/:postIndex"}>
            <Post allPosts={posts} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
