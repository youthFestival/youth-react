import React from 'react';

/**
 * 로그인 버튼 컴포넌트
 * @returns 
 */

function AuthBtn ({ btnNavi, btnClassName, btnText, btnOnClick}) {
    return (
        <div>
            <a
                href={btnNavi}
            >
                <button
                    className = {btnClassName}
                    onClick={btnOnClick}
                >  
                    {btnText} 
                </button> 
            </a>
        </div>
   
    );
};

export default AuthBtn;