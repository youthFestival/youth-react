import React from 'react';

/**
 * Auth Input
 * @returns 
 */

function AuthInput({
              formClassName, 
              containerClassName, 
              inputType, 
              inputClassName, 
              inputPlaceHolder,
              imgSrc,
              imgAlt }) 
  {
    return (
      <div className={formClassName}>
        <div className={containerClassName}>
         <img 
                  src={imgSrc}
                  alt={imgAlt}
                  width={"24px"} 
                  height={"24px"}
          />

          <label htmlFor={inputClassName}>
              <input 
                type={inputType}    
                className={inputClassName}
                placeholder={inputPlaceHolder}
              />
          </label>
        </div>
      </div>
    );
  };

export default AuthInput;
