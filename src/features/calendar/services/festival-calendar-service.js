import axios from "axios";
import fakeFestivals from "./fake-festivals"

/**
 * 축제 정보를 가져오는 api 호출 부분(진짜로 바꿔야 됨)
 */
export const fetchFestivalCalendar = async (year, month) => {
    // 실제 API 호출 대신 가짜 데이터 반환
    const festivalsForMonth = fakeFestivals.filter(festival => {
        const date = new Date(festival.date);
        return date.getFullYear() === year && date.getMonth() + 1 === month;
    });
    return festivalsForMonth;

};