import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import constants from '../../Constants';

const getThumbImg = (image, index) => {
  const key = `thu-${index}`;
  return (
    <img
      key={key}
      className="spa-thumbnails__image"
      src={image.get('url')}
      alt={image.get('description')}
    />
  );
};

const SpaThumbnails = (props) => {
  const { images } = props;
  if (!images) return null;

  const imageNodes = images.reduce((imgList, image, index) => {
    if (!image.get('is_default') &&
      imgList.length < constants.MAX_PREVIEW_THUMBS
    ) {

      imgList.push(getThumbImg(image, index));
    }

    return imgList;
  }, []);

  return (
    <div className="spa-thumbnails"> {imageNodes} </div>
  );
};


SpaThumbnails.propTypes = {
  images: ImmutablePropTypes.list,
};

export default SpaThumbnails;
