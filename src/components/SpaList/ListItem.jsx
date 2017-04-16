import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const ListItem = (props) => {
  const { spaItem } = props;

  return (
    <div className="" > { spaItem.get('name') } </div>
  );
};

ListItem.propTypes = {
  spaItem: ImmutablePropTypes.map,
};

export default ListItem;
