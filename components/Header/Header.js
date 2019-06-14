import React from "react";
import PropTypes from "prop-types";
import HeaderStyles from "./Header.style";

const Header = ({ title }) => {
  return (
    <div className="header">
      {title}
      <style jsx>{HeaderStyles}</style>
    </div>
  );
};

export default Header;
