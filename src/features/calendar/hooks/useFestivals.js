import {useState, useEffect} from 'react';
import {fetchFestivalCalendar} from "../services/festival-calendar-service";

const useFestivals = (year, month) => {
    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        const getFestivals = async() => {
            try {
                const data = await fetchFestivalCalendar(year, month);
                setFestivals(data);
            }
            catch(error) {
                console.error(error);
            }
        };

        getFestivals();
    }, [year, month]);

    return festivals;
};

export default useFestivals;