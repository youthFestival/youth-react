/**
 * GET 요청 시, Param을 전달하기 위한 함수
 * @param {Object} obj - 전달할 파라미터 객체
 * @returns {String} - 전달할 파라미터 문자열
 */

export function withParams(obj) {
    let str = "?";
    for (const [key, value] of Object.entries(obj)) {
        str += (key + "=" + value + "&")
    }
    return str.slice(0, -1);
}


/**
 * Date를 지정된 형식으로 포맷팅하는 함수
 * @param {String} dateStr - 포맷팅할 String 객체
 * @returns {String} date - 포맷팅된 날짜 문자열
 */
export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
}