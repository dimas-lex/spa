import React from 'react';
import PropTypes from 'prop-types';

const SpaList = (props) => {
  const count = props.count;
  return (
    <div>
      <div className="list-banner">
        <h2>The Best {count} SPA Treatment</h2>
      </div>
      <div id="content">
        <p> SpaList Some text hear </p>
      </div>
    </div>
  );
};

SpaList.propTypes = {
  count: PropTypes.number,
};

export default SpaList;
