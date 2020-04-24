import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles, { HeaderGlobalStyles } from './Header.style';

const Header = ({ title }) => {
  return (
    <div className="header">
      {title}
      <style jsx>{HeaderStyles}</style>
      <style jsx>{HeaderGlobalStyles}</style>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
