import React, { useState } from 'react';
import useFestivals from "../hooks/useFestivals";
import CalendarDay from '../components/CalendarDay';
import leftArrow from '../../../assets/left-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import "../styles/festival-calendar.css";

/**
 * 달력 페이지 UI
 * @returns 축제 일정(달력)
 */
const FestivalCalendar = () => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const { festivals, prevMonthFestivals, nextMonthFestivals } = useFestivals(year, month);

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
        const lastMonthDays = new Date(year, month - 1, 0).getDate();
        const rows = [];
        let cells = [];

        // 오늘 날짜 확인
        const isToday = (day) => {
            return day === today.getDate() && month === today.getMonth() + 1 && year === today.getFullYear();
        };

        // 이전 달의 날짜를 추가
        for (let i = 0; i < firstDay; i++) {
            const prevDate = lastMonthDays - firstDay + i + 1;
            const events = prevMonthFestivals.filter(festival => {
                const startDate = new Date(festival.startDate);
                const endDate = new Date(festival.endDate);
                return prevDate >= startDate.getDate() && prevDate <= endDate.getDate();
            });
            cells.push(<CalendarDay key={`prev-${i}`} date={prevDate} events={events} isPrevMonth isFirstColumn={i === 0} />);
        }

        // 현재 달의 날짜를 추가
        for (let day = 1; day <= daysInMonth; day++) {
            const events = festivals.filter(festival => {
                const startDate = new Date(festival.startDate);
                const endDate = new Date(festival.endDate);
                return day >= startDate.getDate() && day <= endDate.getDate();
            });
            cells.push(<CalendarDay key={day} date={day} events={events} isToday={isToday(day)} isFirstColumn={cells.length === 0} isLastColumn={(day + firstDay - 1) % 7 === 6} />);
            if ((day + firstDay) % 7 === 0) {
                rows.push(<tr key={`row-${day}`}>{cells}</tr>);
                cells = [];
            }
        }

        // 다음 달의 날짜를 추가
        let nextMonthDay = 1;
        while (cells.length < 7) {
            const addNextMonthDay = (day) => {
                const events = nextMonthFestivals.filter(festival => {
                    const startDate = new Date(festival.startDate);
                    const endDate = new Date(festival.endDate);
                    return day >= startDate.getDate() && day <= endDate.getDate();
                });
                cells.push(<CalendarDay key={`next-${day}`} date={day} events={events} isNextMonth isLastColumn={cells.length === 6} />);
            };
            addNextMonthDay(nextMonthDay);
            nextMonthDay++;
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
                        <span id='calendar-current-date'>{year}년 {month}월</span>
                        <button id="calendar-previous-btn" onClick={handlePreviousMonth}>
                            <img src={leftArrow} alt="Previous Month"/>
                        </button>
                        <button id="calendar-next-btn" onClick={handleNextMonth}>
                            <img src={rightArrow} alt="Next Month"/>
                        </button>
                    </div>
                </div>
                <div id="calendar-content">
                    <table id="calendar-table">
                        <thead>
                            <tr id='weekdays'>
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