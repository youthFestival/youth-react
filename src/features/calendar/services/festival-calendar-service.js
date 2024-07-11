import axios from 'axios';

/**
 * 축제 정보를 가져오는 api 호출 부분(진짜로 바꿔야 됨)
 */
export const fetchFestivalCalendar = async (year, month) => {
    try {
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log(`${apiUrl}/calendar-festivals`);
        const response = await axios.get(`${apiUrl}/calendar-festivals`);
        console.log({response : response});
        const data = response.data;
        console.log(data);

        // 실제 API 호출 대신 가짜 데이터 반환
        const festivalsForMonth = data.filter(festival => {
            const startDate = new Date(festival.startDate);
            const endDate = new Date(festival.endDate);
            return (
                (startDate.getFullYear() === year && startDate.getMonth() + 1 === month) ||
                (endDate.getFullYear() === year && endDate.getMonth() + 1 === month)
            );
        });
        return festivalsForMonth;
    }
    catch(error) {
        console.error(error);
        alert("오류가 발생했습니다.")
    }
};