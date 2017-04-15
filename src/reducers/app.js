import { ACTIONS } from '../actions/app';

export default function reducer(state = {}, action = {}) {

  switch (action.type) {
    case ACTIONS.FETCH_SPA_LIST:
      return state.set('isLoading', true);

    default:
      return state;
  }
}
