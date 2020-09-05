import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide/Slide';
import Control from './Control/Control';
import styles from './Carousel.module.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    const { width, height } = this.props;
    this.state = {
      currentIndex: 0,
      width: width,
      height: height,
    };
  }

  nextIndex = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    this.setState({
      currentIndex: (currentIndex + 1) % slides.length,
    });
  };
  prevIndex = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    this.setState({
      currentIndex: (currentIndex - 1 + slides.length) % slides.length,
    });
  };

  resize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  fullScreenMode = (isFullscreen) => {
    const { width, height } = this.props;
    if (isFullscreen) {
      this.setState({
        width: width,
        height: height,
      });
      window.removeEventListener('resize', this.resize);
    } else {
      this.resize();
      window.addEventListener('resize', this.resize);
    }
    document.body.style.overflow = isFullscreen ? 'initial' : 'hidden';
  };

  render() {
    const { currentIndex, width, height } = this.state;
    const { slides } = this.props;
    const contRatio = width / height;
    const contSize = {
      width: width,
      height: height,
    };
    return (
      <div className={styles.container} style={contSize}>
        <Slide contRatio={contRatio} currentSlide={slides[currentIndex]} />
        <Control
          next={this.nextIndex}
          prev={this.prevIndex}
          fullScreenMode={this.fullScreenMode}
          width={width}
          height={height}
        />
      </div>
    );
  }
}
