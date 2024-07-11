import React from "react";
import {
    AuthBtn,
    AuthLogo, 
    AuthInput,
    AuthCheckbox
} from '../features/authentication/index.js'

import '../styles/register.css'

/**
 * 로그인 화면
 * @returns
 */
const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-form'>
          <div className='register-contents'>

                   
               
                    <AuthLogo 
                        logoDivName='naver-signup'
                        logoHref='##2'
                        logoSrc = "./icons/company/naverlogo.png" 
                        logoAlt = "네이버 로그인 아이콘" 
                        logoClassName='naverlogo'
                    />

                    <AuthLogo 
                        logoDivName='kakao-signup'
                        logoHref='##1'
                        logoSrc="./icons/company/kakaologo.png" 
                        logoAlt="카카오 로그인 아이콘" 
                        logoClassName='kakaologo'
                    />
                    
                    <AuthLogo 
                        logoDivName='google-signup'
                        logoHref='##3'
                        logoSrc="./icons/company/googlelogo.png" 
                        logoAlt="구글 로그인 아이콘" 
                        logoClassName='googlelogo'
                    />
                        
          </div>
    
      </div>
    </div>
  );
};

export default Register;
