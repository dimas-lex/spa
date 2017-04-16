import Immutable from 'immutable';

import { ACTIONS } from '../actions/app';

const onLoadedSpaList = (state, data) => {
  const spaList = data && data.list;
  const newState = state.set('spaList', Immutable.fromJS(spaList));

  return newState.set('isLoading', false);
};

export default function reducer(state = {}, action = {}) {

  switch (action.type) {
    case ACTIONS.FETCH_SPA_LIST:
      return state.set('isLoading', true);

    case ACTIONS.LOADED_SPA_LIST:
      return onLoadedSpaList(state, action.data);

    // TODO Add errors on loading
    case ACTIONS.ERROR_LOADING_SPA_LIST:
      console.log('ERROR_LOADING_SPA_LIST', action);
      return state.set('isLoading', false);

    default:
      return state;
  }
}
