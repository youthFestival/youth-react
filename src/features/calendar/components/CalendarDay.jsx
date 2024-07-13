import React from 'react';
import "../styles/festival-calendar.css";

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

    const getEventClass = (event) => {
        const startDate = new Date(event.startDate).getDate();
        const endDate = new Date(event.endDate).getDate();
        if (endDate > startDate) { // 축제 기간이 하루를 넘는 경우
            if (date === startDate) {
                return `festival ${categoryToClassName(event.categories)} festival-continued`;
            } else if (date === endDate && isFirstColumn) {
                return `festival ${categoryToClassName(event.categories)}`;
            } else if (date > startDate && date < endDate) {
                return `festival ${categoryToClassName(event.categories)} festival-continued`;
            }
        }
        return `festival ${categoryToClassName(event.categories)}`;
    };

    return (
        <td className={`calendar-item ${dateClass} ${columnClass}`}>
            <div className={`calendar-date ${dateClass} ${todayClass}`}>{date}</div>
            {displayEvents.map((event, index) => (
                <div key={index} className={getEventClass(event)}>
                    {(date === new Date(event.startDate).getDate() || (date === new Date(event.endDate).getDate() && isFirstColumn)) ? event.name : ""}
                </div>
            ))}
        </td>
    );
};

export default CalendarDay;