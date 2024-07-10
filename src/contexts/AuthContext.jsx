/**
 * @desc 이 파일은 React 앱에서 사용되는 AuthContext와 관련된 컴포넌트와 리듀서를 정의합니다.
 */

import React, { createContext, useEffect, useReducer } from "react";

/**
 * Context로 공유할 데이터의 초기값을 담는 객체
 * Context 특성상 새로고침 시, 초기값으로 초기화되므로 sessionStorage에 사용자 정보를 저장합니다.
 */
const INITIAL_STATE = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  isLoggedIn: sessionStorage.getItem("user") ? true : false,
  error: null,
  dispatch: null,
};

/**
 * Context 객체를 생성합니다.
 */
export const AuthContext = createContext(INITIAL_STATE);

/**
 * Reducer는 state와 action을 받아 새로운 state를 반환하는 함수입니다.
 *
 * @param {*} state - 이전 상태
 * @param {*} action.type  - action의 타입
 */
const AuthReducer = (state, action) => {
  switch (action.type) {
    // 로그인 성공 시
    case "LOGIN":
      return {
        user: action.payload,
        isLoggedIn: true,
        error: null,
      };
    // 로그아웃 시
    case "LOGOUT":
      return {
        user: null,
        isLoggedIn: false,
        error: null,
      };
    // 로그인 실패 시
    case "LOGIN_FAILURE":
      return {
        user: null,
        isLoggedIn: false,
        error: action.payload,
      };
    // 사용자 정보 업데이트 시
    case "UPDATE_USER_DATA":
      return {
        user: action.payload,
        isLoggedIn: false,
        error: null,
      };
    // 기본값
    default:
      return state;
  }
};

/**
 * @desc AuthContext.Provider 컴포넌트를 렌더링하는 함수형 컴포넌트
 *
 */
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        dispatch,
        user: state.user,
        error: state.error,
        isLoggedIn: state.isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
