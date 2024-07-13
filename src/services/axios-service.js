  import axios from 'axios';


  /**
   * 
   * @param method Http 메소드 (POST GET PUL DELETE 등)
   * @param url 요청할 URL
   * @param data  요청할 데이터
   * @param handlers  성공, 실패 핸들러 {onSuccess: (res) => {}, onFailure: (e) => {}} 구조 이며, 성공 시, 매개변수는 응답 객체, 실패 시 매개변수는 에러 객체
   * @param withCredentials  쿠키 전송 여부
   */
export const sendRequest = async (method, url, data, handlers, withCredentials = false) => {
  const { onSuccess, onFailure } = handlers || {};
  try {
    const res = await axios({
      method,
      url,
      data,
      withCredentials
    });
    onSuccess?.(res);
  } catch (e) {
    console.log("에러발생");
    console.log(e);
    onFailure?.(e);
  }
};

export const login = async (data, handlers) => {
  await sendRequest('post', 'api/auth/login', data, handlers, true);
};

export const register = async (data, handlers) => {
  await sendRequest('post', 'api/auth/register', data, handlers);
};

export const logout = async (handlers) => {
  await sendRequest('get', 'api/auth/logout', null, handlers, true);
};

export const getSession = async (handlers) => {
  await sendRequest('get', 'api/auth/session', null, handlers, true);
}

export const googleAuth = async (data, handlers) => {
  await sendRequest('post', 'api/auth/login-via-google', data, handlers);
}

export const checkUsernameAvailability = async (username, handlers) => {
  await sendRequest('post', `api/auth/username-duplication`, { username }, handlers, false);
}