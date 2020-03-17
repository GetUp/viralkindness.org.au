import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>Viral Kindness heading</h1>
    <p>Subheading paragraph</p>
    <div>
      <Link to="/register">Register</Link>
    </div>
    <div>
      <Link to="/join">Find a group</Link>
    </div>
    <div>
      <Link to="/faq">How to</Link>
    </div>
  </div>
);
