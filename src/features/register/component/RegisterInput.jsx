import React, { useState, useRef } from 'react';

/**
 * 회원가입 입력 폼 컴포넌트
 * @returns 
 */

function RegisterInput ({
        formClassName, 
        inputType, 
        inputClassName, 
        inputPlaceHolder,
        inputValue,
        imgSrc,
        imgAlt, 
        inputOnChange
}) {
    const [showPassword, setShowPassword] = useState(false);
    const inputLoginRef = useRef(null);

    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={formClassName}>
            <div className='input-write'>
                <img 
                    src={imgSrc}
                    alt={imgAlt}
                    width={"24px"} 
                    height={"24px"}
                />

                <label htmlFor={inputClassName}></label>
                <input 
                    type={ inputType === 'password' && !showPassword ? "password" : "text" }    
                    className={inputClassName}
                    placeholder={inputPlaceHolder}
                    value={inputValue}
                    onChange={inputOnChange}
                    ref={inputLoginRef}
                />
                
                {inputType === 'password' && (
                    <button onClick={showPasswordHandler} className='eyebtn'>
                        {showPassword ? (
                        <img src="./icons/eyeoff.png" alt="패스워드 보기 off" />
                        ) : (
                        <img src="./icons/eyeon.png" alt="패스워드 보기 on" />   
                        )}
                    </button>
                )}
                    
            </div>
        </div>
    );
};

export default RegisterInput;
