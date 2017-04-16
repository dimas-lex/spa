import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as currencyFormatter from 'currency-formatter';

import AddonList from './AddonList';
import constants from '../../Constants';

const ShortSpaInfo = (props) => {
  const { spaItem } = props;
  if (!spaItem) return null;

  const caption = String(spaItem.get('caption'))
    .replace(constants.REMOVE_TAGS_REGEX, '');

  return (
    <div className="short-spa-info" >
      <h1 className="short-spa-info__title">
        { spaItem.get('name') }
      </h1>
      <div className="short-spa-info__caption">
        <p> { caption } </p>
      </div>
      <div className="short-spa-info__addons">
        <AddonList addons={spaItem.get('addons')} />
      </div>
      <div className="short-spa-info__price">
        {
          currencyFormatter.format(
            spaItem.get('price_default'), constants.DEFAULT_CURRENCY)
        }
      </div>
    </div>
  );
};


ShortSpaInfo.propTypes = {
  spaItem: ImmutablePropTypes.map,
};

export default ShortSpaInfo;
