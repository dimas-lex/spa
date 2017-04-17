import React from 'react';
import PropTypes from 'prop-types';


const CoverImage = (props) => {
  const { url, coverDescription } = props;

  return (
    <div className="cover-image">
      <img
        className="cover-image-image"
        src={url}
        alt={coverDescription}
      />
      <span className="cover-image-desc">
        {coverDescription}
      </span>
    </div>
  );
};

CoverImage.propTypes = {
  url: PropTypes.string,
  coverDescription: PropTypes.string,
};

export default CoverImage;
