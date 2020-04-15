import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/sample">Sample Code</Link>
        <Link to="/contact">Contact</Link>
        <button
          onClick={() => {
            window.open(
              "https://qunliw.github.io/us-covid19/",
              "Popup",
              "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
            );
          }}
        >
          COVID Live!
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
