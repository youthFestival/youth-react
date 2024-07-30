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



/**
 * Date를 지정된 형식으로 포맷팅하는 함수
 * @param {String} dateStr - 포맷팅할 String 객체
 * @returns {String} date - 포맷팅된 날짜 문자열
 */
export function formatDay1(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
}

export function formatDay2(dateStr) {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${month}.${day}`;
}

export function formatDay3(dateStr) {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2);
    const day = String(date.getDate()).padStart(2, '0');
    const week = ['월','화','수','목','금','토','일'];
    const dayOfWeek = week[date.getDay()];
    const hours = String(date.getHours() ).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');

    return `${month}.${day}(${dayOfWeek}) ${hours}:${minutes}`;
}


/**
 * 문자열에서 html 코드를 삭제해주는 함수
 * ReactQuill 에서 내용에서 <> 태그들을 삭제하기 위함. 
 * @param {} str 
 * @returns 삭제가 된 순수한 문자열
 */

export function removeHtmlTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}