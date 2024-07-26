import axios from 'axios';

/**
 * 축제 정보를 가져오는 api 호출
 */
export const fetchFestivalCalendar = async (year, month) => {
    try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(apiUrl + "/festival/calender", {
            params: { year, month }
        });
        const data = response.data;

        // 실제 API 호출 대신 가짜 데이터 반환
        const festivalsForMonth = data?.festivals.filter(festival => {
            const startDate = new Date(festival.startDate);
            const endDate = new Date(festival.endDate);
            return (
                (startDate.getFullYear() === year && startDate.getMonth() + 1 === month) ||
                (endDate.getFullYear() === year && endDate.getMonth() + 1 === month)
            );
        });
        return festivalsForMonth;
    }
    catch (error) {
        if (error?.response?.status === 404) {
            return [];
        }
        else {
            console.error(error);
            alert("축제 정보를 가져오는데 실패했습니다.");
        }
    }
};