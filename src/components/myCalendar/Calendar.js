import React, { Component } from 'react';
import Day from './Day/Day';
import Month from './Month/Month';
//import {format} from 'date-fns'
import styles from './Calendar.module.scss';
import PropTypes from 'prop-types';

const Calendar = ({ currentDate }) => {
  return (
    <article className={styles.container}>
      <Day currentDate={currentDate} />
      <Month date={currentDate} currentDate={currentDate} />
    </article>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};
Calendar.defaultProps = {
  currentDate: new Date(),
};

// class Calendar extends Component{
//     constructor (props){
//         super(props);
//         this.state ={
//             currentDate: new Date(),
//         }
//     }
//     render(){
//         const {currentDate} = this.state;
//         const dayName = format(currentDate, 'iiii');
//         const currentDay = format(currentDate, 'd');
//         const month = {
//             name: format(currentDate, 'LLL'),
//             number: format(currentDate, 'LL')-1,
//         }
//         const year=format(currentDate, 'yyyy');
//         return(
//             <article>
//                 <Day dayName={dayName} number={currentDay}/>
//                 <Month month={month} year={year} currentDate={currentDate}/>
//             </article>
//         )
//     }
// }
export default Calendar;
