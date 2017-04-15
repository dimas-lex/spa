import React from 'react';
import PropTypes from 'prop-types';

const DetailInfo = (props) => {
  const id = props.params.id;

  return (
    <div>
      <p> Some text hear DetailInfo for {id} </p>
    </div>
  );
};

DetailInfo.propTypes = {
  params: PropTypes.obj,
};

export default DetailInfo;
