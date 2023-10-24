import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to={"/"} className="ft-button">
        Home
      </Link>
      <Link to={"/Newpost"} className="ft-button addbtn">
        +
      </Link>
      <Link to={"/About"} className="ft-button">
        About
      </Link>
    </div>
  );
};

export default Footer;

/*
 */
