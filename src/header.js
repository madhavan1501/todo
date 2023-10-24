import React from "react";
const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <h2 className="heading">Simple Application</h2>
      <input
        type="text"
        className="search"
        placeholder="search"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Header;
