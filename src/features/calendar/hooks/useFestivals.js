import { useState, useEffect } from 'react';
import { fetchFestivalCalendar } from "../services/festival-calendar-service";

const useFestivals = (year, month) => {
    const [festivals, setFestivals] = useState([]);
    const [prevMonthFestivals, setPrevMonthFestivals] = useState([]);
    const [nextMonthFestivals, setNextMonthFestivals] = useState([]);

    useEffect(() => {
        const getFestivals = async () => {
            try {
                const data = await fetchFestivalCalendar(year, month);
                setFestivals(data);

                const prevMonth = month === 1 ? 12 : month - 1;
                const prevYear = month === 1 ? year - 1 : year;
                const prevData = await fetchFestivalCalendar(prevYear, prevMonth);
                setPrevMonthFestivals(prevData);

                const nextMonth = month === 12 ? 1 : month + 1;
                const nextYear = month === 12 ? year + 1 : year;
                const nextData = await fetchFestivalCalendar(nextYear, nextMonth);
                setNextMonthFestivals(nextData);
            }
            catch (error) {
                console.error(error);
            }
        };

        getFestivals();
    }, [year, month]);

    return { festivals, prevMonthFestivals, nextMonthFestivals };
};

export default useFestivals;
