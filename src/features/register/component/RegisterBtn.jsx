import React from 'react';
import '../styles/registerbtn.css'
import { NavLink } from 'react-router-dom';
/**
 * 회원가입 완료 버튼 컴포넌트
 * @returns 
 */

function RegisterBtn ({registerBtnText, registerOnClick, registerNavLink}) {
    return (
            <div>
                <NavLink to={registerNavLink} className='register-btn-navlink'>
                    <button 
                          className='register-complete-btn'
                          onClick={registerOnClick}                    
                    >
                        {registerBtnText}
                    </button>
                </NavLink>
            </div>      
    );
};

export default RegisterBtn;