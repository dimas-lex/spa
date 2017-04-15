import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';
import constants from './Constants';

import App from './App';
import SpaList from './components/SpaList/SpaList';
import DetailInfo from './components/DetailInfo/DetailInfo';

import './index.less';

ReactDOM.render(
  <Provider store={store}>

    <Router history={browserHistory}>

      <Route path={constants.URL.MAIN} component={App}>
        <IndexRoute component={SpaList} />

        <Route path={constants.URL.DETAIL} component={DetailInfo} />
        <Route path={constants.URL.ANY} component={SpaList} />
      </Route>

    </Router>
  </Provider>,

  document.getElementById('root')
);

