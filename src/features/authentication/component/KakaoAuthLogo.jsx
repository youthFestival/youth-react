import React from 'react';
import '../styles/kakaologo.css';

const KakaoAuthLogo = () => {
    return (
        <div>
            <button type='button' className='kakao-login-area'>
                <img className="kakao-login-logo" src='./icons/company/kakaologo.png' alt='카카오 로그인'/>
            </button>
        </div>
    );
};

export default KakaoAuthLogo;