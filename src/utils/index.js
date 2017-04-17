import constants from '../Constants';

export default {
  getSpaLink(spa) {
    if (!spa) {
      return {
        pathname: constants.URL.LIST,
      };
    }

    return {
      pathname: constants.URL.DETAIL,
      query: {
        name: spa.get('name'),
        id: spa.get('id'),
      },
    };
  },
};
