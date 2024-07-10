import React from 'react';
import '../styles/loginbtn.css'

/**
 * 로그인 버튼 컴포넌트
 * @returns 
 */
function AuthBtn (btnClassName) {
    return (
        <div>
            <button
                className = {btnClassName}
            />
        </div>
    );
};

export default AuthBtn;