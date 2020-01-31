import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function NotFound({ history }) {
  return (
    <div className="container">
      <h1>Oh no dude</h1>
      <h2>We messed up!</h2>
      <Link to="/">Go home</Link>
    </div>
  );
}
