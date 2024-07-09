import React from 'react';
import '../login/loginidinput.css'

const LoginIDInput = () => {
    return (
            <div className='login-id-input-area'>
                <label for='login-id-input'></label>
                <input type='text' className='login-id-input' placeholder='아이디'/>
            </div>
    );
};

export default LoginIDInput;