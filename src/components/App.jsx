import React, { useState, useEffect } from "react";

import Header from "./partials/Header";
import Footer from "./partials/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import About from "./About";
import Compose from "./Compose";
import Contact from "./Contact";
import Home from "./Home";
import Post from "./Post";

export default function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {    
    const intervalId = setInterval(async () => {
        const fetchPosts = await fetch('/posts');
        const allPosts = await fetchPosts.json();
        console.log(allPosts);
        
        setPosts(() => allPosts);
      }, 1000
    );

    return () => {
      clearInterval(intervalId);
    };
  };

  function addPost(title, content) {
    const postData = {title: title, body: content};

    axios
      .post('/compose', postData)
      .then((response) => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
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
          <Route path={"/posts/:postId"}>
            <Post />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
