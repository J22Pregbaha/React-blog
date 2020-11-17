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
            index={index}
            title={post.title}
            content={post.content}
            allPosts={props.allPosts}
          />
        );
      })}
    </div>
  );
}

export default Home;
