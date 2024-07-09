import React from 'react';
import '../styles/loginbtn.css'

/**
 * 로그인 버튼 컴포넌트
 * @returns 
 */
const LoginBtn = () => {
    return (
        <div>
            <button type='submit' className='login-btn'>로그인</button>
        </div>
    );
};

export default LoginBtn;