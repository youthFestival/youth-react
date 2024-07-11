import React from 'react';

/**
 * 로그인 버튼 컴포넌트
 * @returns 
 */
function AuthBtn ({btnClassName, btnText}) {
    return (
        <div>
            <button
                className = {btnClassName}
            >  
                {btnText} 
            </button>
        </div>
    );
};

export default AuthBtn;