import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initApp } from '../../actions/app';
import constants from '../../Constants';

import ListItem from './ListItem';

@connect(
  state => ({
    spaList: state.app.get('spaList'),
  })
)

class SpaList extends Component {
  static propTypes = {
    spaList: ImmutablePropTypes.list,
  }

  getEmptyList () {
    return (
      <div>
        <h2>
          Sorry, there are no any available SPA Treatments now. <br/>
          Please try later...
        </h2>
      </div>
    );
  }

  renderList(spaList) {
    if (!spaList || !spaList.size) {
      return this.getEmptyList();
    }

    return spaList.entrySeq()
      .map(
        ([key, spa]) => (<ListItem key={key} spaItem={spa} />)
      );
  }

  render() {
    const spaList = this.props.spaList;
    const count = (spaList && spaList.size) || '';

    return (
      <main className="list">
        <div className="list__banner">
          <h2>The {count} Best SPA Treatment</h2>
        </div>
        <div className="list__content">
          { this.renderList(spaList) }
        </div>
      </main>
    );
  };
};

export default SpaList;
