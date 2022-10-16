import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder=" Find a user " />
      </div>
      <div className="userChat">
        <img
          src="https://sportshub.cbsistatic.com/i/2021/08/09/b6fa15e8-0a86-4c77-b602-bb22b59c4bac/naruto-kakashi-cosplay-1274250.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
