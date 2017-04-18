import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class PhotoViewer extends Component {

  static propTypes = {
    images: ImmutablePropTypes.list,
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: -1,
    };
  }

  componentDidMount = () => this.initViewer();

  onClickButton(delta) {
    const { currentIndex } = this.state;
    const { images } = this.props;
    let next = currentIndex + delta;

    if (next >= images.size) {
      next = 0;

    } else if (next < 0) {
      next = images.size - 1;
    }

    this.setState({
      currentIndex: next,
    });
  }

  initViewer() {
    const { images } = this.props;
    if (images === this.state.images) return;

    const imgCoverIndex = images.findIndex(image => (image && image.get('is_default')));

    this.setState({
      images,
      currentIndex: imgCoverIndex,
    });
  }

  render() {
    const { images, name } = this.props;
    const { currentIndex } = this.state;


    if (!images || currentIndex < 0) {
      // TODO: add empty component
      return null;
    }

    const image = images.get(currentIndex);


    return (
      <div className="photo-viewer">
        <button
          className="photo-viewer__left-btn"
          onClick={() => this.onClickButton(-1)}
        >
          <img
            alt="Previous"
            width="24"
            height="24"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QQRFAElRdkaFwAAAKJJREFUSMft1DEKwkAQRuEvCagIC4KCWNl7AsFG9ASC57DwQJ7RWgRtElhEjDErguSvd9/bmVmGLn+frOWdW93hoiG8QA/9Ep5UUGCIMQKuuNRJ8obwCWZY4/xOi/OG8ClWOKX6BHkJn2OJY9T72wczfPr6ERY4xPAQQhJBVcHmEZ5KUFURsP9GBS8lKQWxZBcJ8tSrpcAA21KQ/XwXdenSPnev8COWs9y9tAAAAABJRU5ErkJggg=="
          />
        </button>
        <img
          alt={`${name}-${image.get('description')}`}
          className="photo-viewer__img"
          src={image.get('url')}
        />
        <button
          className="photo-viewer__right-btn"
          onClick={() => this.onClickButton(1)}
        >
          <img
            alt="Next"
            width="24"
            height="24"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QQRFAEG575rZQAAALRJREFUSMft1E1qwzAYhOHHdnAhoE0v0Gtk7RsUeoJcIOBL5gS5Q0tDCBgCoT/KRgsvCpUTpZt6dgIxr4ZvPjFr1q2qrrgXpwDqTPNvdHhAUzplnV4d8YxQGtKMABEvpSFNCCHeE9KEEOIPkA7L3+ZY51KGYRgfN3hFO6GJ2TPoscJTToLFRFiPLd5wwDlVuAhgjR3esccJXyU2uU6NecQnjrnmuYAqJW2T6Ueu+Z/8RbP+gS7KmyxZi4aVeAAAAABJRU5ErkJggg=="
          />

        </button>
      </div>
    );
  }
}

export default PhotoViewer;
