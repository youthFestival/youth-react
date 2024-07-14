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


