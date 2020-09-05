import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import styles from './Control.module.scss';
import {
  mdiSkipNext,
  mdiSkipPrevious,
  mdiPlay,
  mdiPause,
  mdiFullscreen,
  mdiFullscreenExit,
} from '@mdi/react';

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      isSlideShow: false,
      delay: 1000,
    };
    this.timeoutId = null;
  }

  isSlideShowHandler = () => {
    const { isSlideShow } = this.state;
    this.setState({
      isSlideShow: !isSlideShow,
    });
  };

  delayHandler = ({ target: { value } }) => {
    this.setState({
      delay: value,
    });
  };

  isFullScreenHandler = () => {
    const { isFullScreen } = this.state;
    const { isFullScreenMode } = this.props;
    this.setState({
      isFullScreen: !isFullScreen,
    });
    isFullScreenMode(!isFullScreen);
  };

  componentDidUpdate(prevProps, prevState) {
    const { isSlideShow, delay } = this.state;
    const { next } = this.props;
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
    if (isSlideShow) {
      this.timeoutId = setTimeout(next, delay);
    }
  }

  render() {
    const { isSlideShow, delay, isFullScreen } = this.state;
    const { next, prev } = this.props;
    return (
      <div>
        <div className={styles.slideCont}>
          <div className={styles.delay}>
            <input
              type="range"
              value={delay}
              min={1}
              max={1000}
              onChange={this.delay}
            />
            <div>{delay}</div>
          </div>
          <div className={styles.nextPrev}>
            <Icon onClick={prev} path={mdiSkipPrevious} />
            <Icon onClick={next} path={mdiSkipNext} />
          </div>
          <div className={styles.slideShow}>
            <Icon
              onClick={this.isSlideShowHandler}
              path={isSlideShow ? mdiPause : mdiPlay}
            />
            <Icon
              onClick={this.isFullScreenMode}
              path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}
            />
          </div>
        </div>
      </div>
    );
  }
}

Control.propTypes = {
  isFullScreenMode: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
