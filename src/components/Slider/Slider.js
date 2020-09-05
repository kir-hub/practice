import React, { Component } from 'react'
import styles from './Slider.module.css';

export default class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                'https://i.ytimg.com/vi/bziVFvq8cLQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCiWdP2CqklRjC2K7em90JF0GOUJQ',
                'https://i.ytimg.com/an_webp/YdYyYMFPa44/mqdefault_6s.webp?du=3000&sqp=COr6uPoF&rs=AOn4CLDb-tgApdBXN8BfOObrb7dT_mKgPA',
                'https://i.ytimg.com/an_webp/9KJxaFHotqI/mqdefault_6s.webp?du=3000&sqp=CPDguPoF&rs=AOn4CLDj2ziPRDwOQID6M3hbr2c2wctPdQ',
            ],
            currentImageIndex: 0,
            delay: 0,
            slideShow: true,
            isFullScreen: false,
            
        }
        this.handlerNext = this.handlerNext.bind(this);
        this.handlerPrev = this.handlerPrev.bind(this);
    }
handlerNext =() =>{
    this.setState({
        currentImageIndex: this.state.currentImageIndex+1 
    })
}
handlerPrev = ()=>{
    this.setState({
        currentImageIndex: this.state.currentImageIndex-1 
    })
}
handlerNextDelay =() =>{
    setTimeout(this.handlerNext, 2000)
}
handlerPrevDelay = ()=>{
    setTimeout(this.handlerPrev, 2000)
}
handlerSlideShow=()=>{
    if(this.state.slideShow){
        for( let i = 0; i <=this.state.images.length - 1; i++){
        setTimeout(this.handlerNext,0)

    }
    }
}
startShow=()=>{
    this.setState({
        slideShow: true
    })
    this.handlerSlideShow()
}
setFullScreen=()=>{
    this.setState({
        isFullScreen: !this.state.isFullScreen
    })
}
    render() {

        const emailStyleClass = `${styles.imageSlider} ${this.state.isFullScreen && styles.fullScreen}`;
        return (
            <div className={styles.container}>
                <div className={styles.Btns}>
                <button onClick={this.handlerPrevDelay} value='next' >{'<'}delay</button>
                <button onClick={this.handlerPrev} value='next' >{'<'}</button>  
                <button onClick={this.setFullScreen}>Fullscreen</button>
                </div>
                <div className={emailStyleClass}>
        <img src={this.state.images[this.state.currentImageIndex]} alt=''/> <p>{this.state.currentImageIndex} </p>
                </div>
                <div className={styles.Btns}>
                <button onClick={this.handlerNext}>{'>'}</button>
                <button onClick={this.handlerNextDelay}>{'>'}delay</button>
                <button onClick={this.handlerSlideShow}>start</button>
                </div>
            </div>
        )
    }
}
