import React, { useState } from 'react';
import useFestivals from "../hooks/useFestivalsCalendar"
import CalendarDay from '../components/CalendarDay';
import "../css/festival-calendar.css";

/**
 * 달력 페이지 UI
 * @returns 축제 일정(달력)
 */
const FestivalCalendar = () => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const festivals = useFestivals(year, month);


    /**
     * 이전 달 이동 핸들러
     */
    const handlePreviousMonth = () => {
        if (month === 1) {
            setYear(year - 1);
            setMonth(12);
        } else {
            setMonth(month - 1);
        }
    };

    /**
     * 다음 달 이동 핸들러
     */
    const handleNextMonth = () => {
        if (month === 12) {
            setYear(year + 1);
            setMonth(1);
        } else {
            setMonth(month + 1);
        }
    };

    const renderCalendar = () => {
        const daysInMonth = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, month - 1, 1).getDay();
        const rows = [];
        let cells = [];

        for (let i = 0; i < firstDay; i++) {
            cells.push(<td className="day empty" key={`empty-${i}`}></td>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const events = festivals.filter(festival => new Date(festival.date).getDate() === day);
            cells.push(<CalendarDay key={day} date={day} events={events} />);
            if ((day + firstDay) % 7 === 0) {
                rows.push(<tr key={`row-${day}`}>{cells}</tr>);
                cells = [];
            }
        }

        if (cells.length) {
            rows.push(<tr key="last-row">{cells}</tr>);
        }

        return rows;
    };

    return (
        <div id="calendar-page">
            <div id='calendar-container'>
                <div id="calendar-header">
                    <div>
                        <span id='calendar-year-month'>{year}년 {month}월</span>
                        <button id="calendar-previous-btn" onClick={handlePreviousMonth}>&lt;</button>
                        <button id="calendar-next-btn" onClick={handleNextMonth}>&gt;</button>
                    </div>
                </div>
                <div id="calendar-body">
                    <table id="calendar-table">
                        <thead>
                            <tr>
                                <th className="weekday">일</th>
                                <th className="weekday">월</th>
                                <th className="weekday">화</th>
                                <th className="weekday">수</th>
                                <th className="weekday">목</th>
                                <th className="weekday">금</th>
                                <th className="weekday">토</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderCalendar()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FestivalCalendar;