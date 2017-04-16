import api from '../api';

export const ACTIONS = {
  FETCH_SPA_LIST: 'FETCH_SPA_LIST',
  LOADED_SPA_LIST: 'LOADED_SPA_LIST',
  ERROR_LOADING_SPA_LIST: 'LOADED_SPA_LIST',
};

const fetchSpaList = () => ({
  type: ACTIONS.FETCH_SPA_LIST,
});
const onErrorSpaListLoading = (ex) => ({
  type: ACTIONS.ERROR_LOADING_SPA_LIST,
  data: {
    error: ex,
  },
});

const onLoadedSpaList = (list) => ({
  type: ACTIONS.LOADED_SPA_LIST,
  data: {
    list,
  },
});

export function initApp() {
  return (dispatch) => {

    api.getSpaList()
      .then(json => dispatch(onLoadedSpaList(json.result)))
      .catch(ex => dispatch(onErrorSpaListLoading(ex)));

    return dispatch(fetchSpaList());
  };
}
