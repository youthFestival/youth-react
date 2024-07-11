import React from 'react';


/**
 * Checkbox 
 * @returns 
 */
function AuthCheckbox ({ inputType, inputCheckClassName}) {
    return (
        <div>
            <label htmlFor={inputCheckClassName}></label>
            <input 
                 type={inputType}
                 className={inputCheckClassName}
            />
        </div>
    );
};

export default AuthCheckbox;