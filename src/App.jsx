import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initApp } from './actions/app';

import constants from './Constants';
import MainHeader from './components/MainHeader/MainHeader';
import Loader from './components/Loader/Loader';

@connect(
  state => ({
    isLoading: state.app.get('isLoading'),
  }),
  dispatch => bindActionCreators({
    initApp
  }, dispatch)
)

class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.object,
    initApp: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.props.initApp();
  }

  render() {
    const { children, isLoading } = this.props;

    return (
      <div className="container">
          <MainHeader />
          <Loader isActive={isLoading} />
          <div className="content">
            { children }
          </div>
      </div>
    );
  }
}

export default App;
