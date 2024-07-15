import React from "react";
import {
    AuthBtn,
    AuthLogo, 
} from '../features/authentication/index.js'

import '../styles/register.css'
import { NavLink } from 'react-router-dom';

/**
 * 회원가입 화면
 * @returns
 */
const Register = () => {
  return (
    <div className='register-container'>

      <div className='register-form'>

          <div className='register-contents'>

           <div className='register-logo-container'>
            <div className='register-youth-form'>
                    <p className='youth-p'>
                        <span className='youth-span'>Youth!</span>회원가입
                    </p>
            </div>

            <p className='register-guide'>
                지금 회원가입 하신 후 Youth!에서 다양한 서비스를 경험해보세요 
            </p>

            <AuthBtn 
                btnClassName='normal-register-btn'
                btnText='개인 회원가입'
                btnNavi='/registerform'
            />



            <div className='register-logo-form'>

                <div className='register-kakao'>
                    <AuthLogo 
                        logoSrc='./icons/company/kakaologo.png'
                        logoClassName='kakao-logo'
                    />
                    
                    <NavLink to={''} className={'company-navlink'}>
                        <span className='kakao-span'>
                                    카카오로 가입 
                        </span>
                    </NavLink>
                       
                </div>

                <div className='register-naver'>
                        <AuthLogo 
                            logoSrc='./icons/company/naverlogo.png'
                            logoClassName='naver-logo'
                        />
                        
                        <NavLink to={''} className={'company-navlink'}>
                            <span className='naver-span'>
                                        네이버로 가입</span>
                        </NavLink>
                        
                </div>

                <div className='register-google'>
                    <AuthLogo 
                        logoSrc='./icons/company/googlelogo.png'
                        logoClassName='google-logo'
                    />
                        
                    <NavLink to={''} className={'company-navlink'}>
                        <span className='google-span'>
                                    구글로 가입
                        </span>
                    </NavLink>
                        
                </div>
            </div>
        

            <p className='limit-age-guide'>
                SNS계정 회원가입(만 14세 이상 가능) 
            </p>

            </div>
            </div>       
        </div>          
    </div>
  );
};

export default Register;
