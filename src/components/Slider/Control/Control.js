import React, { Component } from 'react'
import Next from '../Rows/Next'
import Prev from '../Rows/Prev'
import ImageContainer from './../ImageContainer'


export default class Control extends Component {
    constructor(props){
        super(props);
        this.state = {
            delay: Number(),
            isPlaying: null,
            isFullscreen: false,
         }

         
         
    }


    prev =()=>{
        this.props.index = this.state.images 
    }


    componentDidUpdate(prevProps, prevState, snapshot){ 
    const {isPlaying, delay} = this.state;
         const {next} = this.props;
         clearTimeout(this.timeoutId);
         this.timeoutId = null;
         if (isPlaying) {
             this.timeoutId = setTimeout(next, delay);
         }     
        }
    
    }
    
    // render() {
    //     return (
    //         <div className={styles.nextPrev}>
    //                 <Prev onClick={prev} path={mdiSkipPrevious}/>
    //                 <ImageContainer index={index}/>
    //                 <Next onClick={next} path={mdiSkipNext}/>
    //             </div>
//         )
//     }
// }