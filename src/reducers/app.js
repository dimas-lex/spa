import Immutable from 'immutable';

import { ACTIONS } from '../actions/app';

const onLoadedSpaList = (state, data) => {
  const spaList = data && data.list;
  let newState = state.set('spaList', Immutable.fromJS(spaList));
  newState = newState.set('isLoaded', true);
  newState = newState.set('isLoading', false);

  return newState;
};

export default function reducer(state = {}, action = {}) {

  switch (action.type) {
    case ACTIONS.FETCH_SPA_LIST:
      return state.set('isLoading', true);

    case ACTIONS.LOADED_SPA_LIST:
      return onLoadedSpaList(state, action.data);

    // TODO Add errors on loading
    case ACTIONS.ERROR_LOADING_SPA_LIST:
      return state.set('isLoading', false);

    default:
      return state;
  }
}
