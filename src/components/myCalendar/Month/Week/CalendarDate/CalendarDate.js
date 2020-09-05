import React from 'react'
import styles from './CalendarDate.module.scss'
import {format, isSameDay, isSameMonth} from 'date-fns';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const CalendarDate = ({dayDate, date, currentDate}) => {
    
    const isCurrent = isSameDay(dayDate, currentDate) && isSameMonth(dayDate, currentDate);
    const className= classNames(styles.box, {
        [styles.currentDay]: isCurrent,
        [styles.otherMonth]: !isSameMonth(dayDate,date),
    }) 
    return <li className={className}> {format(dayDate,'d')}</li>;
}

CalendarDate.propTypes = {
    dayDate: PropTypes.instanceOf(Date).isRequired, 
    date: PropTypes.instanceOf(Date).isRequired, 
    currentDate: PropTypes.instanceOf(Date),
}
CalendarDate.defaultTypes = {
    currentDate: new Date(),
};

export default CalendarDate
















// function Date(props) {
//     const {date, currentDate} = props;
//     const today = getDate(currentDate);
//     const currentMonth = getMonth(currentDate);
//     const className = classNames(
//         styles.day,
//         getDate(date) === today && getMonth(date) ===currentMonth  && styles.today,
//         getMonth(date) !== currentMonth && styles.otherMonth);

//     return (
//     <li className={className}> {getDate(date)}</li>
//     );
// }

// export default Date;