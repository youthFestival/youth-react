import React, {useEffect, useState, useRef} from 'react';
import '../styles/authinput.css'
/**
 * Auth Input
 * @returns 
 */

function AuthInput({
              formClassName, 
              inputType, 
              inputClassName, 
              inputPlaceHolder,
              inputValue,
              imgSrc,
              imgAlt, 
              inputOnChange,
              id
    }) 
    {
    
      const [showPassword, setShowPassword] = useState(true);
      const inputLoginRef = useRef();

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
                type={ inputType === 'password' && showPassword ? inputType : "text"  }    
                className={inputClassName}
                placeholder={inputPlaceHolder}
                value={inputValue}
                onChange={inputOnChange}
                ref={inputLoginRef}
                id={id}
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

export default AuthInput;
