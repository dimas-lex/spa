export const ACTIONS = {
  FETCH_SPA_LIST: 'FETCH_SPA_LIST',
  LOADED_SPA_LIST: 'LOADED_SPA_LIST',
};

export function initApp() {
  return {
    type: ACTIONS.FETCH_SPA_LIST,
  };
}
