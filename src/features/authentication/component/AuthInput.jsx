import React from 'react';
import '../styles/authinput.css';

/**
 * Auth Input 영역
 * @returns 
 */

function AuthInput({
              formClassName, 
              containerClassName, 
              inputType, 
              inputClassName, 
              inputPlaceHolder }) 
  {
    return (
      <div className={formClassName}>
        <div className={containerClassName}>
          <label htmlFor={inputClassName}></label>
          <input 
            type={inputType}    
            className={inputClassName}
            placeholder={inputPlaceHolder}
          />
        </div>
      </div>
    );
  };

export default AuthInput;
