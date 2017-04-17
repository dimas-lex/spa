import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Lightbox from 'react-images';

import utils from '../../utils';
import constants from '../../Constants';

@connect(
  state => ({
    isLoaded: state.app.get('isLoaded'),
    spaList: state.app.get('spaList'),
  })
)
class DetailInfo extends Component {

  static propTypes = {
    spaList: ImmutablePropTypes.list,
    isLoaded: PropTypes.bool,
    location: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      spaItem: {},
    };
  }

  initSpaItemByUrl() {
    const { location, spaList, isLoaded } = this.props;
    const query = location && location.query;
    const id = query && query.id;

    if (isLoaded && id >= 0 && id !== this.state.id ) {
      this.setState({
        id,
        spaItem: this.props.spaList.get(id),
      });
    }
  }

  componentDidMount = ()=> this.initSpaItemByUrl();
  componentDidUpdate = ()=> this.initSpaItemByUrl();

  render() {
    const spaItem = this.state.spaItem;

    if (!this.state.id || !spaItem) {
      // TODO: add empty component
      return null;
    }

    const id = '1';

    return (
      <div className="detail-info">
        <header className="detail-info__title">
          <h1>
            {spaItem.get('name') }
          </h1>
        </header>

        <div className="detail-info__details">
          <div className="detail-info__images">
            <img
              className="detail-info__img"
              src="http://beta-assets.simplifiedinventory.com/photos/e4a6222cdb5b34375400904f03d8e6a5/swedish-massage-massage-massage-19-2.jpg"
            />
          </div>

          <div className="detail-info__description">
            <p>
              {utils.removeHtmlTags(spaItem.get('description'))}
            </p>
          </div>
        </div>

      </div>
    );
  }
};

export default DetailInfo;
