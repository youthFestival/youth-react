import React from 'react';
import '../login/loginpwinput.css'

const LoginPWInput = () => {
    return (
            <div className='login-pw-input-area'>
                <label htmlFor='login-pw-input'></label>
                <input type='password' className='login-pw-input' placeholder='비밀번호'/>
            </div>
    );
};

export default LoginPWInput;