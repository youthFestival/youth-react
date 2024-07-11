import React, { useState } from 'react';
import'../styles/authcheckbox.css'

/**
 * Checkbox 
 * @returns 
 */
function AuthCheckbox ({ inputType, inputCheckClassName, checkBoxText}) 
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
                    <img src="./icons/checkbox_off.png" alt="패스워드 보기 off" className='checkbox-image' />

                  ) : (
                    <img src="./icons/checkbox_on.png" alt="패스워드 보기 on" className='checkbox-image' />   
                  )}
                </button>
            )}
            <label htmlFor={inputCheckClassName}></label>
            <input 
                 type={inputType}
                 className='input-checkbox'
            /> {checkBoxText}

          
        </div>
    );
};

export default AuthCheckbox;