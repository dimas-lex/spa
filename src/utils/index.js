import constants from '../Constants';
import * as currencyFormatter from 'currency-formatter';

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

  // getParameterByName(url, name) {
  //   if (!name) return '';

  //   name = name.replace(/[\[\]]/g, "\\$&");
  //   const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  //   const results = regex.exec(url);

  //   if (!results) return null;
  //   if (!results[2]) return '';
  //   return decodeURIComponent(results[2].replace(/\+/g, " "));
  // },
};
