import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Alert from "./Alert";

function Compose(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function resetForm() {
    title === "" && content !== ""
      ? setResponseMessage("Please provide a title")
      : title !== "" && content === ""
      ? setResponseMessage("Please provide content")
      : title === "" && content === ""
      ? setResponseMessage("Please fill all entries")
      : props.submitPost(title, content);

    title !== "" && content !== "" && setSubmitted(true);
  }

  return (
    <div className="container">
      {responseMessage !== "" ? (
        <Alert type="warning" output={responseMessage} />
      ) : null}

      <h1>Compose</h1>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();

          resetForm();
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
