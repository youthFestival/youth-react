import React from "react";
import '../styles/login/login.css';
import {
    LoginBtn
} from '../features/authentication/index.js'
/**
 * 로그인 화면
 * @returns
 */
const Login = () => {

    
  return (
      <div className='login-form'>

         <div className='login-container'>

            {/* 로그인 메인 폼 */}
            <div className='login-contents'>
                <div className='login-logo-box'>
                    <span className='login-youth'>Youth!</span>  
                </div>
                
                <div className='login-write-form'>
                      
                </div>

                <div className='login-maintain-container'>
                      <label for='login-maintain-checkbox' className='login-checkbox-label'> 
                            <input type='checkbox' className='login-maintain-checkbox' />로그인 상태 유지
                      </label>
                </div>

                <LoginBtn />
                
                <div className='login-userfind-register'>
                        <div className='userfind-register-form'>

                              <div className='login-go-findid-field'>
                                  <button type='button' className='login-go-findid-btn'>아이디 찾기</button>
                              </div>

                              <div className='login-go-findpw-field'>
                                  <button type='button' className='login-go-findpw-btn'>비밀번호 찾기</button>
                              </div>
                              
                              <div className='login-go-register-field'>
                                  <button type='button' className='login-go-register-btn'>회원가입</button>
                              </div>
                        </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Login;
