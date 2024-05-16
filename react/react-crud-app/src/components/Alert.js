import React from "react";
import "../styles/Alert.css";

function Alert({ type, text }) {
  return <div className={`alert alert-${type}`}>{text}</div>;
}

export default Alert;
