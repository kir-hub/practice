import React from 'react'
import styles from './Week/Week.module.scss'
import {eachWeekOfInterval, startOfMonth, endOfMonth, format} from 'date-fns';
import Week from './Week/Week.js';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const getWeeks = ({ date, currentDate}) => {
    return eachWeekOfInterval({
        start:  startOfMonth(date) ,
        end: endOfMonth(date),
    }).map((weekDate) => (<Week 
    key={weekDate}
    date={date} 
    weekDate={weekDate}  
    currentDate={currentDate}/>))}

const Month = props => {
    const {date} = props;
    const className = classNames(styles.box, styles.dayName);
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{format(date,'LLLL y')}</div> 
             <ul className={styles.row}>
                 <li className={className}>s</li>
                 <li className={className}>m</li>
                 <li className={className}>t</li>
                 <li className={className}>w</li>
                 <li className={className}>th</li>
                 <li className={className}>f</li>
                 <li className={className}>sa</li>
             </ul>
                 {getWeeks(props)}
         </div>
    )
}

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate:  PropTypes.instanceOf(Date),
}
export default Month;

// function Month(props){
//     const {month: {name, number}, year, currentDate} = props;
//     const getWeeks = () =>{
//         const firstWeek = getWeek(new Date(year, number, 1));
//         const weeksInMonth = getWeeksInMonth(new Date(year, number, 1));
//         const weeks = [];
//         for( let i=firstWeek; i<firstWeek + weeksInMonth; i++){
//             weeks.push(<Week key={i} week={i} year={year} currentDate={currentDate}/>);
//         }
//         return weeks;
//     }
//     return(
//         <div>
//             <div> {name} {year}</div>
//             <ul>
//                 <li className={styles.dayName}>s</li>
//                 <li className={styles.dayName}>m</li>
//                 <li className={styles.dayName}>t</li>
//                 <li className={styles.dayName}>w</li>
//                 <li className={styles.dayName}>th</li>
//                 <li className={styles.dayName}>f</li>
//                 <li className={styles.dayName}>sa</li>
//             </ul>
//             <div>
//                 {getWeeks()}
//             </div>
//         </div>
//     )
// }


