import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.content.length > 100
          ? props.content.substring(0, 100) + "..."
          : props.content}{" "}
        <Link to={`/posts/${props.id}`}>Read more</Link>
      </p>
    </div>
  );
}

export default PostCard;
