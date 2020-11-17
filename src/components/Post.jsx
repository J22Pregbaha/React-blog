import React from "react";
import { useParams } from "react-router-dom";

function Post(props) {
  let { postIndex } = useParams();
  return (
    <div className="container">
      <h1>{props.allPosts[postIndex].title}</h1>
      <p>{props.allPosts[postIndex].content}</p>
    </div>
  );
}

export default Post;
