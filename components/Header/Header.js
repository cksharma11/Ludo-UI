import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.style';

const Header = ({ title }) => {
  return (
    <div className="header">
      {title}
      <style jsx>{HeaderStyles}</style>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
