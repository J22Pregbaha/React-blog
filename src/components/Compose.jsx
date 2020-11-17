import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Compose(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      <h1>Compose</h1>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          props.submitPost(title, content);
          setTitle("");
          setContent("");
          setSubmitted(true);
        }}
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            name="title"
            className="form-control"
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Post</label>
          <textarea
            onChange={(event) => setContent(event.target.value)}
            name="body"
            className="form-control"
            rows="5"
            value={content}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Publish
        </button>
      </form>

      {submitted && <Redirect to="/" />}
    </div>
  );
}

export default Compose;
