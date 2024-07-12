import React, { useState, useRef } from "react";
import {
    AuthBtn,
    AuthLogo, 
    AuthInput,
    AuthCheckbox
} from '../features/authentication/index.js';
import axios from 'axios';
import '../styles/login.css';

/**
 * 로그인 화면
 * @returns
 */
const Login = () => {
  const [inputIdValue, setInputIdValue] = useState(); //아이디 값에 대한 상태관리
  const [inputPwValue, setInputPwValue] = useState(); //비밀번호 값에 대한 상태관리
  const [token, setToken] = useState(null);
  const { userLoginIdRef, userLoginPwRef}  = useRef();
  const apiUrl = process.env.REACT_APP_API_URL;
  

  const authInputIdHandler = (e) => {
    setInputIdValue(e.target.value);
  };

  const authInputPwHandler = (e) => {
    setInputPwValue(e.target.value);
  };

  const loginBtnClickHandler = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/login`,
        {
          userId: inputIdValue,
          password: inputPwValue
        },
        { withCredentials: true }
      );

      console.log(response);
      setToken(response.data.token);
      alert(response.data.message);
    } catch (e) {
      console.error(e);
      alert("로그인 실패!");
    }
  };

  return (
    <div className="login-form">
      <div className="login-container">
        {/* 로그인 메인 폼 */}
        <div className="login-contents">
          <div className="login-logo-box">
            <span className="login-youth">Youth!</span>
          </div>

          <div className="login-input-form">
            <AuthInput
              formClassName="input-id-bar"
              imgSrc={"./icons/idlogo.png"}
              imgAlt="로그인 아이콘"
              inputType="text"
              inputClassName="login-id-input"
              inputPlaceHolder="아이디"
              inputValue={inputIdValue}
              inputOnChange={authInputIdHandler}
              inputRef={userLoginIdRef}
            />

            <AuthInput
              formClassName="input-pw-bar"
              imgSrc={"./icons/pwlogo.png"}
              imgAlt="로그인 아이콘"
              inputType="password"
              inputClassName="login-pw-input"
              inputPlaceHolder="비밀번호"
              inputValue={inputPwValue}
              inputOnChange={authInputPwHandler}
              inputRef={userLoginPwRef}
            />
          </div>

          <div className="login-maintain-container">
            <AuthCheckbox inputType="checkbox" checkBoxText="로그인 상태 유지" />
          </div>

          <AuthBtn
            btnClassName="login-btn"
            btnText="로그인"
            btnOnClick={loginBtnClickHandler}
          />

          <div className="login-userfind-register">
            <a href="!#">아이디 찾기</a>
            <a href="!#">비밀번호 찾기</a>
            <a href="!#">회원가입</a>
          </div>

          <div className="login-companyicons-area">
            <AuthLogo
              logoDivName="login-kakaologo"
              logoHref="##1"
              logoSrc="./icons/company/kakaologo.png"
              logoAlt="카카오 로그인 아이콘"
              logoClassName="kakaologo"
            />

            <AuthLogo
              logoDivName="login-naverlogo"
              logoHref="##2"
              logoSrc="./icons/company/naverlogo.png"
              logoAlt="네이버 로그인 아이콘"
              logoClassName="naverlogo"
            />

            <AuthLogo
              logoDivName="login-googlelogo"
              logoHref="##3"
              logoSrc="./icons/company/googlelogo.png"
              logoAlt="구글 로그인 아이콘"
              logoClassName="googlelogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
