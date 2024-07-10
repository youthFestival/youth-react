import React from "react";
import {
    LoginBtn,
    AuthLogo, 
    LoginInput
} from '../features/authentication/index.js'
import '../styles/login/login.css';


/**
 * 로그인 화면
 * @returns
 */
const Login = () => {
  return (
      <div className='login-form'>

         <div className='login-container'>

            {/* 로그인 메인 폼 */}
            <div className='login-contents'>

                <div className='login-logo-box'>
                    <span className='login-youth'>Youth!</span>  
                </div>
                

                <LoginInput />


                <div className='login-maintain-container'>
                    <label htmlFor='login-maintain-checkbox'> </label>
                    <input type='checkbox' className='login-maintain-checkbox' />로그인 상태 유지
                </div>


                <LoginBtn />
                

                <div className="login-userfind-register">
                    <a href="!#">아이디 찾기</a>
                    <a href="!#">비밀번호 찾기</a>
                    <a href="!#">회원가입</a>
                </div>


                <div className='login-companyicons-area'>
                    <AuthLogo />
                </div>
                

            </div>

        </div>
    </div>
  );
};

export default Login;
