import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const fetchPost = async () => {
    const fetchPost = await fetch('/posts/' + postId);

    const currentPost = await fetchPost.json();

    setPost(() => {
      return currentPost;
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
