import React, { Component } from 'react'
import ImageContainer from '../ImageContainer/ImageContainer'



export default function MainBody() {
    return (
        <div>
            
        </div>
    )
}




































// export default class MainBody extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             images: [
//                 '',
//                 '',
//                 '',
//             ],
//             currentImageIndex: 0,
//             isCycleMode: false,
//             canGoPrev: false,
//             canGoNext: true,
//         };
    

//     this.nextSlideHandler = this.nextSlideHandler.bind(this);
// }

// nextSlideHandler(e) {
//     let newIndex = this.state.currentImageIndex;

//     if (e.currentTarget.dataset.direction === 'next'){
//         if(newIndex < this.state.images.length - 1){
//             newIndex = this.state.currentImageIndex+1;
//             this.state.canGoPrev = true;
//         }
//         if (newIndex === this.state.images.length - 1){
//             this.state.canGoNext = false;
//         }
//     } else{
//         if(newIndex > 0){
//            newIndex = this.state.currentImageIndex-1; 
//            this.state.canGoNext = true;
//         }
//         if (newIndex === 0) {
//             this.state.canGoPrev = false;
//         }
        
//     }
//     this.setState({currentImageIndex: newIndex});
// }



//     render() {
//         return (
//             <div>
//                 <div> 
//                     <button disable ={ !this.state.canGoPrev } data-direction='prev' onClick={this.nextSlideHandler.bind(this)}>
//                         prev
//                         </button>
//                         </div>
//                 <div>
//                     <img src ={this.state.images[this.state.currentImageIndex]} alt=''/>
//                 </div>
//                 <div> 
//                     <button disable ={ !this.state.canGoNext } data-direction='next' onClick={this.nextSlideHandler.bind(this)}>
//                         next
//                         </button>
//                         </div>
//             </div>
//         )
//     }
// }
