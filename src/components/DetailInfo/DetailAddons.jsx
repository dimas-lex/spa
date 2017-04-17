import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import utils from '../../utils';

const getAddonView = (addon, index) => {
  const title = addon.get('title');
  return (
    <div key={`addon-${index}`} className="detail-addons__addon">
      <header className="detail-addons__addon__title">
        {title}
      </header>
      <div className="detail-addons__addon__price">
        { utils.formatMoney(addon.get('price')) }
      </div>
      <div className="detail-addons__addon__images">
        <img
          alt={title}
          className="detail-addons__addon__image"
          src={addon.get('img')}
        />
      </div>
      <div className="detail-addons__addon__description">
        {utils.removeHtmlTags(addon.get('description'))}
      </div>
      <div className="detail-addons__addon__caption">
        {utils.removeHtmlTags(addon.get('caption'))}
      </div>
    </div>
  );
};

const DetailAddons = (props) => {
  const { addons } = props;
  if (!addons) return null;

  let listOfAddons = [];

  addons.toList()
    .map(
      (spaAddon) => spaAddon
        .get('items')
        .forEach(addon => listOfAddons.push(addon))
    );

  listOfAddons = listOfAddons.map(getAddonView);

  return (
    <div className="detail-addons"> {listOfAddons} </div>
  );
};

DetailAddons.propTypes = {
  addons: ImmutablePropTypes.map,
};

export default DetailAddons;

