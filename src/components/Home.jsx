import React from "react";
import PostCard from "./PostCard";

function Home(props) {
  return (
    <div className="container">
      <h1>Home</h1>

      {props.allPosts.map((post, index) => {
        return (
          <PostCard
            key={index}
            id={post._id}
            title={post.title}
            content={post.body}
          />
        );
      })}
    </div>
  );
}

export default Home;
