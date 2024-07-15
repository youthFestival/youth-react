import React from 'react';
import '../styles/registerform.css'
import {
    RegisterInput
} from '../index.js';


const RegisterForm = () => {
    return (
        <div className='register-write-container'>
             <div className='register-write-form'>    

                  <RegisterInput
                        registerText='아이디'
                        registerInputType='text'
                        registerInputPlaceHolder='6~20자 영문, 숫자'   
                  />

                  <RegisterInput
                        registerText='비밀번호'
                        registerInputType='password'
                        registerInputPlaceHolder='8~12자 영문, 숫자, 특수문자'   
                  />

                 <RegisterInput
                        registerText='비밀번호 확인'
                        registerInputType='password'
                        registerInputPlaceHolder='8~12자 영문, 숫자, 특수문자'   
                  />

                  <RegisterInput
                        registerText='이름'
                        registerInputType='text'
                        registerInputPlaceHolder='6~20자 영문, 숫자'   
                  />

             </div>
        </div>
    );
};

export default RegisterForm;