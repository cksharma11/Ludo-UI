import React from 'react';
import PropTypes from 'prop-types';
import HeadingStyles from './Heading.style';

const Heading = ({ content, weight }) => {
  return (
    <div className={weight}>
      {content}
      <style jsx>{HeadingStyles}</style>
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
