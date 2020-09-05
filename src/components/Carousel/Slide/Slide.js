import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.module.scss';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    const img = new Image();
    img.addEventListener('load', this.handleLoad);
    this.state = {
      img,
      isLoaded: false,
    };
  }

  handleLoad = () => {
    this.setState({
      isLoaded: true,
    });
  };

  load = () => {
    const { img } = this.state;
    const {
      currentSlide: { src },
    } = this.props;
    img.src = src;
  };
  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoaded } = this.state;
    const {
      currentSlide: { img },
    } = this.props;
    if (img !== prevProps.currentSlide && isLoaded) {
      this.load();
    }
  }

  render() {
    const { img, isLoaded } = this.state;
    const { currentSlide, contRatio } = this.props;
    const imageRatio = img.width / img.height;
    const imageSize = {
      [imageRatio > contRatio ? 'width' : 'height']: 'inherit',
    };
    return (
      <div>
        {isLoaded && (
          <figure className={styles.container} title={currentSlide.title}>
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              style={imageSize}
            />
            <figcaption className={styles.caption}>
              <h2>{currentSlide.title}</h2>
              <p>{currentSlide.description}</p>
            </figcaption>
          </figure>
        )}
      </div>
    );
  }
}

Slide.propTypes = {
  contRatio: PropTypes.number.isRequired,
  currentSlide: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
