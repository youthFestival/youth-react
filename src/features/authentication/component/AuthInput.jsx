import React from 'react';
import '../styles/authinput.css';

/**
 * Auth Input 영역
 * @returns 
 */

function AuthInput({ inputType, inputClassName, inputPlaceHolder }) {
  return (
    <div className='input-form'>
      <div className='input-content'>
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
