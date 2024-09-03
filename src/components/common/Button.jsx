import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
