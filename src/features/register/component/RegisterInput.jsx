import React, { useState, useRef } from "react";
import "../styles/registerinput.css";
/**
 * 회원가입 입력 폼 컴포넌트
 * @returns
 */

function RegisterInput({
  registerText,
  registerInputType,
  registerInputPlaceHolder,
  registerInputClassName,
  registerInputValue,
  registerInputOnChange,
  name,
}) {
  const [showRegisterPassword, setShowRegisterPassword] = useState(true);
  const inputLoginRef = useRef(null);

  const showPasswordHandler = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };

  return (
    <div className="register-input-form">
      <div className="register-input-write">
        <div className="register-input-row">
          <span className="register-type-text">{registerText}</span>

          <label
            htmlFor="register-input-classname"
            className="register-input-label"
          >
            <input
              type={
                registerInputType === "password" && showRegisterPassword
                  ? registerInputType
                  : "text"
              }
              className={registerInputClassName}
              placeholder={registerInputPlaceHolder}
              value={registerInputValue}
              onChange={registerInputOnChange}
              name={name}
            />
            {registerInputType === "password" && (
              <button onClick={showPasswordHandler} className="register-eyebtn">
                {showRegisterPassword ? (
                  <span className="register-pw-off-span">보기</span>
                ) : (
                  <span className="register-pw-on-span">보기</span>
                )}
              </button>
            )}
          </label>
        </div>
      </div>
    </div>
  );
}

export default RegisterInput;
