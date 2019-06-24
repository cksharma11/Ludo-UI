import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from '../../Header/Header.style';

const Heading = ({ content, weight }) => {
  return (
    <div className={weight}>
      {content}
      <style jsx>{HeaderStyles}</style>
    </div>
  );
};

Heading.defaultProps = {
  content: '',
  weight: 'h1'
};

Heading.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weight: PropTypes.string
};

export default Heading;
