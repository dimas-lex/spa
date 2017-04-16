import 'isomorphic-fetch';

const API = {
  GET_SPA_LIST: '/api/spa',
};

export default {
  getSpaList() {
    return fetch(API.GET_SPA_LIST, {
      method: 'GET',
    })
    .then((res) => res.json())
    .catch((ex) => {
      console.error(`API ${API.GET_SPA_LIST} response parsing failed`, ex);
    });
  },
};
