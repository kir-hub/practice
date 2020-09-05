import React from 'react'

import {eachDayOfInterval, startOfWeek, endOfWeek} from 'date-fns';
import CalendarDate from './CalendarDate/CalendarDate'
import styles from './Week.module.scss';
import PropTypes from 'prop-types';

const getWeekDays = ({weekDate, date, currentDate}) => eachDayOfInterval({
    start:  startOfWeek(weekDate) ,
    end: endOfWeek(weekDate),
}).map((dayDate) => <CalendarDate
     key={dayDate} 
     dayDate={dayDate} 
     date={date} 
     currentDate={currentDate}/>)

const Week = props => <ul className={styles.row}>{getWeekDays(props)}</ul>;

Week.propTypes = {
    weekDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate:  PropTypes.instanceOf(Date),
}

export default Week;



// function Week (props){
//     const{currentDate, week, year} = props;
//     const getWeek = ()=>{

//         const start = parse(`${year} ${week}`, 'Y w', new Date());
//         const days = [];

//         for( let i=0; i<7; i++){
//             const date = setDate(start, getDate(start));
//             days.push(<CalendarDate key={date} date={date} currentDate={currentDate}/>);
//             start.setDate(getDate(start)+1);
//         }
//         return days;
//     };
// return <ul> {getWeek()} </ul>;
// }
// 