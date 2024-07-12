import React from "react";
import {
    AuthBtn,
    AuthLogo, 
    AuthInput,
    AuthCheckbox,
} from '../features/authentication/index.js'

import '../styles/register.css'

/**
 * 로그인 화면
 * @returns
 */
const Register = () => {
  return (
    <div className='register-container'>

      <div className='register-form'>

          <div className='register-contents'>





              <div className='register-youth'>
                  
              </div>



               
              <div className='register-logo-container'>


                <div className='register-logo-form'>




                    <div className='register-kakao'>
                        <AuthLogo 
                            logoSrc='./icons/company/kakaologo.png'
                        />

                        <AuthBtn
                            btnClassName='kakao-signup-btn'
                            btnText = '카카오로 가입'
                         />
                    </div>

                    <div className='register-naver'>
                        <AuthLogo 
                            logoSrc='./icons/company/naverlogo.png'
                        />
                        
                        <AuthBtn
                            btnClassName='naver-signup-btn'
                            btnText = '네이버로 가입'
                         />
                    </div>

                    <div className='register-google'>
                        <AuthLogo 
                            logoSrc='./icons/company/googlelogo.png'
                        />
                        
                        <AuthBtn
                            btnClassName='google-signup-btn'
                            btnText = '구글로 가입'
                         />
                    </div>




                  </div>
                  
              </div>
                    
                        
          </div>
    
      </div>
    </div>
  );
};

export default Register;
