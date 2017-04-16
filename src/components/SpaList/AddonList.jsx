import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const AddonList = (props) => {
  const { addons } = props;
  if (!addons) return null;

  let listOfAddons = [];

  addons.toList()
    .map(
      (spaAddon) => spaAddon.get('items')
        .forEach(
          addon => listOfAddons.push(addon.get('title'))
        )
    );

  listOfAddons = listOfAddons.map(
    (addon, index) => (<li key={`addon-${index}`}>{addon}</li>)
  );

  return (
    <ul className="addon-list"> {listOfAddons} </ul>
  );
};

AddonList.propTypes = {
  addons: ImmutablePropTypes.map,
};

export default AddonList;
