import React from 'react';
import { Link } from 'react-router';
import ImmutablePropTypes from 'react-immutable-proptypes';

import AddonList from './AddonList';
import utils from '../../utils';

const ShortSpaInfo = (props) => {
  const { spaItem } = props;
  if (!spaItem) return null;

  const caption = utils.removeHtmlTags(spaItem.get('caption'));

  return (
    <div className="short-spa-info" >
      <Link
        className="short-spa-info__title"
        to={utils.getSpaLink(spaItem)}
      >
        <h1>{ spaItem.get('name') }</h1>
      </Link>
      <div className="short-spa-info__caption">
        <p> { caption } </p>
      </div>
      <div className="short-spa-info__addons">
        <AddonList addons={spaItem.get('addons')} />
      </div>
      <Link to={utils.getSpaLink(spaItem)}>
        <div className="short-spa-info__price">
          { utils.formatMoney(spaItem.get('price_default')) }
        </div>
      </Link>
    </div>
  );
};


ShortSpaInfo.propTypes = {
  spaItem: ImmutablePropTypes.map,
};

export default ShortSpaInfo;
