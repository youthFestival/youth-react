import React from 'react';
import "../styles/festival-calendar.css";

/**
 * 각 일자별 축제
 */
const CalendarDay = ({ date, events, isPrevMonth, isNextMonth, isFirstColumn, isLastColumn, isToday }) => {
    const displayEvents = events.slice(0, 10);
    const dateClass = isPrevMonth ? 'prev-month' : isNextMonth ? 'next-month' : '';
    const todayClass = isToday ? 'today' : '';
    const columnClass = isFirstColumn ? 'first-column' : isLastColumn ? 'last-column' : '';

    const categoryToClassName = (category) => {
        const categoryMap = {
            "대학축제": "university-festival",
            "페스티벌": "general-festival"
        };
        return categoryMap[category] || "unknown-category";
    };

    return (
        <td className={`calendar-item ${dateClass} ${columnClass}`}>
            <div className={`calendar-date ${dateClass} ${todayClass}`}>{date}</div>
            {displayEvents.map((event, index) => (
                <div key={index} className={`festival ${categoryToClassName(event.categories)}`}>{event.name}</div>
            ))}
        </td>
    );
};

export default CalendarDay;