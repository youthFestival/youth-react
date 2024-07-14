import React from "react";
import FestivalSlider from "../features/calendar/components/FestivalSlider";
import FestivalCalendar from "../features/calendar/components/FestivalCalendar"

const Calendar = () => {
    return (
        <div>
            <FestivalSlider/>
            <FestivalCalendar/>
        </div>
    );
};

export default Calendar;