import React from 'react';
import '../styles/authlogo.css';

/**
 * 연동로그인 아이콘
 * @returns 
 */
const AuthLogo = () => {
    return (
        <div className='authlogo-form'>
               <div className='authlogo-container'>
                    <div className='kakao-logo-background'>
                         <img className="kakao-login-logo" src='./icons/company/kakaologo.png' alt='카카오 로그인 아이콘'/>
                    </div>

                    <div className='naver-logo-background'>
                         <img className="naver-login-logo" src='./icons/company/naverlogo.png' alt='네이버 로그인 아이콘'/>
                    </div>
                    <div className='google-logo-background'>
                         <img className="google-login-logo" src='./icons/company/googlelogo.png' alt='구글 로그인 아이콘'/>
                    </div>
               </div>
        </div>
    );
};

export default AuthLogo;