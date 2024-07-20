import React, { useState, useRef, useContext } from "react";
import {
    AuthBtn,
    AuthLogo, 
    AuthInput,
    AuthCheckbox
} from '../features/authentication/index.js';
import axios from 'axios';
import '../styles/login.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext.jsx';

/**
 * 로그인 페이지 
 * @returns
 */
const Login = () => {

  const { dispatch } = useContext(AuthContext);

  const [credentials, setCredentials ] = useState({
    userId: undefined,
    password: undefined,
  })
  
  const handleChange = (e) => {
       setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const loginBtnClickHandler = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log(`API URL: ${apiUrl}`)
      const response = await axios.post(`${apiUrl}/auth/login`,credentials,{ withCredentials: true });
      console.log(response.data);
      dispatch({ type: "LOGIN", payload: response.data});
      alert(response.data.message);
    } catch (err) {
      if(err.response && err.response.data && err.response.data.message){
        alert(err.response.data.message);
      } else {
        alert("로그인 정보 잘못되었습니다. 다시 시도해주세요.")
      }
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
              id={"userId"}
              inputOnChange={handleChange}
            />


            <AuthInput
              formClassName="input-pw-bar"
              imgSrc={"./icons/pwlogo.png"}
              imgAlt="로그인 아이콘"
              inputType="password"
              inputClassName="login-pw-input"
              inputPlaceHolder="비밀번호"
              inputOnChange={handleChange}
              id={"password"}
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

            <NavLink className={'find-id'} to={'/userfind'} >아이디 찾기</NavLink>
            <NavLink className={'find-pw'} to={'/userfind'}>비밀번호 찾기</NavLink>
            <NavLink className={'go-register'} to={'/register'}>회원가입</NavLink>

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
