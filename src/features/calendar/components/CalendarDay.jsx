import React from 'react';
import "../css/festival-calendar.css";

/**
 * 각 일자별 축제
 */
const CalendarItem = ({ date, events }) => {
    const displayEvents = events.slice(0, 10);

    return (
        <td className="calendar-item">
            <div className="calendar-date">{date}</div>
            {displayEvents.map((event, index) => (
                <div key={index} className="festival">{event.name}</div>
            ))}
        </td>
    );
};

export default CalendarItem;
