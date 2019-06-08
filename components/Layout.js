import React from "react";
import PropTypes from "prop-types";
import { NavBar } from ".";
import "../styles/index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <NavBar />
      <div className="page-wraper">
        <div className="page">{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
