import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/auth-btn.css'

/**
 * 로그인 버튼 컴포넌트
 * @returns 
 */

function AuthBtn ({ btnNavi, btnClassName, btnText, btnOnClick}) {
    return (
        <div> 
            <NavLink
                    to={btnNavi}
                    className='auth-navlink'
                >
                    <button
                        className = {btnClassName}
                        onClick={btnOnClick}
                    >  
                

                        {btnText} 
                    </button> 
            </NavLink>     
        </div>
   
    );
};

export default AuthBtn;