import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="#">
                Home
            </a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </div>
    );
};

export default Nav;
