import React from 'react';
import '../styles/naverlogo.css';

const NaverAuthLogo = () => {
    return (
        <div>
            <button type='button' className='naver-login-area'>
                <img className="naver-login-logo" src='./icons/company/naverlogo.png' alt='네이버 로그인'/>
            </button>
        </div>
    );
};

export default NaverAuthLogo;