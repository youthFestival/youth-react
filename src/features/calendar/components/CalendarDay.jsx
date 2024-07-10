import React from 'react';
import "../css/festival-calendar.css";

/**
 * 각 일자별 축제
 */
const CalendarDay = ({ date, events, isPrevMonth, isNextMonth, isFirstColumn, isLastColumn, isToday }) => {
    const displayEvents = events.slice(0, 10);
    const dateClass = isPrevMonth ? 'prev-month' : isNextMonth ? 'next-month' : '';
    const todayClass = isToday ? 'today' : '';
    const columnClass = isFirstColumn ? 'first-column' : isLastColumn ? 'last-column' : '';

    return (
        <td className={`calendar-item ${dateClass} ${columnClass}`}>
            <div className={`calendar-date ${dateClass} ${todayClass}`}>{date}</div>
            {displayEvents.map((event, index) => (
                <div key={index} className={`festival ${event.categories}`}>{event.name}</div>
            ))}
        </td>
    );
};

export default CalendarDay;