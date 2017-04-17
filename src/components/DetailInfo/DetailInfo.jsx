import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhotoViewer from './PhotoViewer';
import DetailAddons from './DetailAddons';
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

  componentDidMount = () => this.initSpaItemByUrl();
  componentDidUpdate = () => this.initSpaItemByUrl();

  render() {
    const spaItem = this.state.spaItem;

    if (!this.state.id || !spaItem) {
      // TODO: add empty component
      return null;
    }

    const imgCover = spaItem.get('images')
      .find(image => (image && image.get('is_default')));

    return (
      <div className="detail-info">

        <div className="detail-info__details">
          <div className="detail-info__images">
            <PhotoViewer images={spaItem.get('images')} name={spaItem.get('name')} />
          </div>

          <div className="detail-info__description">
            <div className="detail-info__header">
              <header className="detail-info__header__title">
                <h1>
                  {spaItem.get('name')}
                </h1>
              </header>
              <span className="detail-info__header__price">
                { utils.formatMoney(spaItem.get('price_default')) }
              </span>
            </div>
            <p>
              {utils.removeHtmlTags(spaItem.get('description'))}
            </p>
          </div>
        </div>
        <div>
          <DetailAddons addons={spaItem.get('addons')} />
        </div>

      </div>
    );
  }
};

export default DetailInfo;

