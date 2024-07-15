import React, { useState } from 'react';

/**
 * 회원가입 입력 폼 확인 Checkbox 
 * @returns 
 */
function RegisterCheckbox ({ inputType, inputCheckClassName, checkBoxText}) 
{
    
    const [checkedBox, setCheckedBox] = useState(true)
    
    const showCheckedBoxHandler = () => {
        setCheckedBox(!checkedBox);
    };
    
    return (    
        <div className='checkbox-container'> 
        
            {inputType === 'checkbox' && (
                <button onClick={showCheckedBoxHandler} className='custom-checkbox'>
                  {checkedBox ? (
                    <img src="./icons/checkbox_off.png" alt="패스워드 보기 off" className='register-checkbox-image' />

                  ) : (
                    <img src="./icons/checkbox_on.png" alt="패스워드 보기 on" className='register-checkbox-image' />   
                  )}
                </button>
            )}
            <label htmlFor={inputCheckClassName}></label>
            <input 
                 type={inputType}
                 className='register-input-checkbox'
            /> {checkBoxText}

          
        </div>
    );
};

export default RegisterCheckbox;