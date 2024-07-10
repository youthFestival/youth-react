import React from "react";
import {
    AuthBtn,
    AuthLogo, 
    AuthInput
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
                    <AuthInput 
                        inputType='text'
                        inputClassName='login-id-input'
                        inputPlaceHolder="아이디"
                    />
                    <AuthInput 
                        inputType='password'
                        inputClassName='login-pw-input'
                        inputPlaceHolder='패스워드'
                    />
                </div>
                


                <div className='login-maintain-container'>
                    <label htmlFor='login-maintain-checkbox'> </label>
                    <input type='checkbox' className='login-maintain-checkbox' />로그인 상태 유지
                </div>


                <AuthBtn 
                    btnClassName = 'login-btn'
                />
                

                <div className="login-userfind-register">
                    <a href="!#">아이디 찾기</a>
                    <a href="!#">비밀번호 찾기</a>
                    <a href="!#">회원가입</a>
                </div>


                <div className='login-companyicons-area'>

                    <AuthLogo 
                        logoDivName='login-kakaologo'
                        logoHref='##1'
                        logoSrc="./icons/company/kakaologo.png" 
                        logoAlt="카카오 로그인 아이콘" 
                        logoClassName='kakaologo'
                    />
                    
                    <AuthLogo 
                        logoDivName='login-naverlogo'
                        logoHref='##2'
                        logoSrc = "./icons/company/naverlogo.png" 
                        logoAlt = "네이버 로그인 아이콘" 
                        logoClassName='naverlogo'
                    />

                    <AuthLogo 
                        logoDivName='login-googlelogo'
                        logoHref='##3'
                        logoSrc="./icons/company/googlelogo.png" 
                        logoAlt="구글 로그인 아이콘" 
                        logoClassName='googlelogo'
                    />

                </div>
                

            </div>

        </div>
    </div>
  );
};

export default Login;
