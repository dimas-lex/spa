import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router';

import utils from '../../utils';
import ShortSpaInfo from './ShortSpaInfo';
import SpaThumbnails from './SpaThumbnails';
import CoverImage from './CoverImage';

const ListItem = (props) => {
  const { spaItem } = props;
  const images = spaItem.get('images');

  const imgCover = images.find(image => (image && image.get('is_default')));
  const coverDescription = imgCover.get('description') || spaItem.get('name');

  return (
    <article className="spa-item" >
      <div className="spa-item__wrapper" >
        <div className="spa-item__box spa-item__box__cover">
          <Link
            className="short-spa-info__title"
            to={utils.getSpaLink(spaItem)}
          >
            <CoverImage
              url={imgCover.get('url')}
              coverDescription={coverDescription}
            />
          </Link>
        </div>

        <div className="spa-item__box spa-item__box__thumb">
          <Link
            className="short-spa-info__title"
            to={utils.getSpaLink(spaItem)}
          >
            <SpaThumbnails images={images} />
          </Link>
        </div>

        <div className="spa-item__box spa-item__box__info " >
          <ShortSpaInfo spaItem={spaItem} />
        </div>
      </div>
    </article>
  );
};

ListItem.propTypes = {
  spaItem: ImmutablePropTypes.map,
};

export default ListItem;

          // <img
          //   className="spa-item__box__cover-image"
          //   src={imgCover.get('url')}
          //   alt={coverDescription}
          // />
          // <span className="spa-item__box__cover-desc">
          //   {coverDescription}
          // </span>
