import React from "react";

function Alert(props) {
  return <div className={`alert alert-${props.type}`}>{props.output}</div>;
}

export default Alert;
