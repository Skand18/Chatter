import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatter</span>
      <div className="user">
        <img
          src="https://sportshub.cbsistatic.com/i/2021/08/09/b6fa15e8-0a86-4c77-b602-bb22b59c4bac/naruto-kakashi-cosplay-1274250.jpg"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
