import { Map } from 'immutable';
import createLogger from 'redux-logger';

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    Object.keys(state).forEach((key) => {
      const stateItem = state[key];

      if (Map.isMap(stateItem)) {
        newState[key] = stateItem.toJS();
      } else {
        newState[key] = stateItem;
      }
    });

    return newState;
  },
});

export default logger;
