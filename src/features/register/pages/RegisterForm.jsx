import React from 'react';
import '../styles/registerform.css'
import {
    RegisterInput,
    RegisterGenderBtn
} from '../index.js';



const RegisterForm = () => {
    return (
        <div className='register-write-container'>
             <div className='register-write-form'>   

                 <div className='register-with-btn'>
                        <RegisterInput
                              registerText='아이디'
                              registerInputType='text'
                              registerInputPlaceHolder='6~20자 영문, 숫자'  
                              registerInputClassName='register-id-input' 
                        />
                        <button className='register-check-btn'>중복확인</button>
                  </div>
                  
                  <RegisterInput
                        registerText='비밀번호'
                        registerInputType='password'
                        registerInputPlaceHolder='8~12자 영문, 숫자, 특수문자' 
                        registerInputClassName='register-pw-input'   
                  />

                 <RegisterInput
                        registerText='비밀번호 확인'
                        registerInputType='password'
                        registerInputPlaceHolder='8~12자 영문, 숫자, 특수문자'
                        registerInputClassName='register-pwcheck-input'    
                  />
                   
                  <RegisterGenderBtn/>

                  <RegisterInput
                        registerText='이름'
                        registerInputType='text'
                        registerInputPlaceHolder='이름을 입력하세요.'
                        registerInputClassName='register-name-input'  
                  />
                 

                  <div className='register-with-btn'>
                        <RegisterInput
                              registerText='주소'
                              registerInputType='text'
                              registerInputPlaceHolder='6~20자 영문, 숫자'  
                              registerInputClassName='register-address-input' 
                        />
                        <button className='register-check-btn'>주소찾기</button>
                  </div>

             </div>
        </div>
    );
};

export default RegisterForm;