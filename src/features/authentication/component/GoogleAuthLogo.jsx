import React from 'react';
import '../styles/googlelogo.css';

const GoogleAuthLogo = () => {
    return (
        <div>
             <button type='button' className='google-login-area'>
                <img className="google-login-logo" src='./icons/company/googlelogo.png' alt='구글 로그인'/>
            </button>
        </div>
    );
};

export default GoogleAuthLogo;