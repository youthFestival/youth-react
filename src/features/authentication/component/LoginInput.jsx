import React from 'react';
import '../styles/logininput.css'

/**
 * 로그인 Input 영역 (ID,PW 입력)
 * @returns 
 */
const LoginInput = () => {
    return (
        <div className='login-input-form'>

                <div className='login-id-input-area'>
                        <img className='login-input-icon' src='./icons/idlogo.png' alt='로그인 아이디 아이콘'  />
                        <label htmlFor='login-id-input'></label>   
                        <input type='text' className='login-id-input' placeholder='아이디'/>      
                </div> 

                <div className='login-pw-input-area'>           
                    <img className='login-input-icon' src='./icons/pwlogo.png' alt='로그인 아이디 아이콘'  />
                    <label htmlFor='login-pw-input'></label> 
                    <input type='password' className='login-pw-input' placeholder='비밀번호'/>         
                </div>

        </div>
    );
};

export default LoginInput;