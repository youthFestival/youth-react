import React from "react";
import LoginIDInput from '../components/login/LoginIDInput.jsx';
import LoginPWInput from '../components/login/LoginPWInput.jsx';
import {
    LoginBtn,
    KakaoAuthLogo,
    NaverAuthLogo,
    GoogleAuthLogo
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
                
                <div className='login-input-form'>
                        <LoginIDInput />
                        <LoginPWInput />
                </div>

                <div className='login-maintain-container'>
                      <label htmlFor='login-maintain-checkbox'> 
                            <input type='checkbox' className='login-maintain-checkbox' />로그인 상태 유지
                      </label>
                </div>

                <LoginBtn />
                
                <div className='login-userfind-register'>
                        <div className='userfind-register-form'>

                              <div className='login-go-findid-field'>
                                  <button type='button' className='login-go-findid-btn'>아이디 찾기</button>
                              </div>

                              <div className='login-go-findpw-field'>
                                  <button type='button' className='login-go-findpw-btn'>비밀번호 찾기</button>
                              </div>
                              
                              <div className='login-go-register-field'>
                                  <button type='button' className='login-go-register-btn'>회원가입</button>
                              </div>
                        </div>
                </div>

                <div className='login-companyicons-area'>
                    <KakaoAuthLogo />
                    <NaverAuthLogo />
                    <GoogleAuthLogo />
                </div>
                

            </div>

        </div>
    </div>
  );
};

export default Login;
