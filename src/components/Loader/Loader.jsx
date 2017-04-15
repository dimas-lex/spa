import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { isActive } = props;

  return !isActive ? null : (
    <div className="loader" >
      <div className="loader__inner" />
    </div>
  );
};

Loader.propTypes = {
  isActive: PropTypes.bool,
};

export default Loader;
