import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  });
  
  const fetchPost = async () => {
    const fetchPost = await fetch('/posts/' + postId);

    const post = await fetchPost.json();

    console.log(post);

    setPost(() => {
      return post;
    });
  };

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
