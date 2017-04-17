import * as currencyFormatter from 'currency-formatter';
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
  removeHtmlTags(tex) {
    return String(tex)
      .replace(constants.REMOVE_TAGS_REGEX, '');
  },

  formatMoney(value) {
    return currencyFormatter.format(value, constants.DEFAULT_CURRENCY);
  },
};
