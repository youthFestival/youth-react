import React from 'react';
import {
    RegisterInput,
    RegisterGenderBtn,
    RegisterBtn,
    RegisterAgreement
} from '../index.js';
import '../styles/registerform.css'


const RegisterForm = () => {
    return (
        <div className='register-write-container'>

             
            <div className='register-header'>

                  <span className='register-header-youth'>Youth!</span>

                        <div className='register-header-center'>

                              <div className='register-center-main'>
                                    <span className='register-header-text'>회원가입</span>
                              </div>
                              
                        </div>
            </div>


            <div className='register-write-form'>   
                 <div className='input-with-btn'>
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
                 

                  <div className='input-with-btn'>
                        <RegisterInput
                              registerText='주소'
                              registerInputType='text'
                              registerInputPlaceHolder='주소를 입력하세요.'  
                              registerInputClassName='register-address-input' 
                        />
                        <button className='register-check-btn'>주소찾기</button>
                  </div>

                  <RegisterInput
                          registerText='상세주소'
                          registerInputType='text'
                          registerInputPlaceHolder='상세주소를 입력하세요.'  
                          registerInputClassName='register-detail-address'
                  />

                  <div className='email-with-dropdown'>
                        <RegisterInput
                              registerText='이메일'
                              registerInputType='email'
                              registerInputPlaceHolder='이메일을 입력하세요.'  
                              registerInputClassName='register-email-input'
                        />
                        <select name="" id="email-dropdown">
                              <option value='직접입력' className='email-option'>직접입력</option>
                              <option value='@naver.com' className='email-option'>@naver.com</option>
                              <option value='@hanmail.net' className='email-option'>@hanmail.net</option>
                              <option value='@gmail.com' className='email-option'>@gmail.com</option>
                              <option value='@nate.com' className='email-option'>@nate.com</option>
                        </select>
                  </div>

                  <div className='input-with-btn'>
                        <RegisterInput
                              registerText='휴대폰'
                              registerInputType='tel'
                              registerInputPlaceHolder='휴대폰 번호를 입력하세요.'  
                              registerInputClassName='register-phone-input' 
                        />
                        <button className='register-check-btn'>인증번호받기</button>
                  </div>

                  <br/>

                  <RegisterAgreement
                         agreementType='checkbox'
                         agreementText='SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)'
                  />

                  <RegisterAgreement
                         agreementType='checkbox'
                         agreementText='14세 미만입니다.'
                  />
                  <span className='register-age-limit-span'>만 14세 미만 회원은 법정대리인(부모님)동의를 받은 경우만 회원가입이 가능합니다.</span>
                  <RegisterBtn/>



             </div>
        </div>
    );
};

export default RegisterForm;