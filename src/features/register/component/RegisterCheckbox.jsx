import React, { useState } from 'react';
import '../styles/registercheckbox.css'
/**
 * 회원가입 완료 버튼 컴포넌트
 * @returns 
 */

function RegisterAgreement ({ agreementText, agreementType, checked, onChange }) {

    return (    
        <div className='agreement-container'> 
         
            {agreementType === 'checkbox' && (
                <button onClick={onChange} className='agreement-checkbox'>
                  {!checked ? (
                    <img src="/icons/checkbox/register_checkbox_off.png" alt="회원가입 동의 off" className='agreement-checkbox-image' />

                  ) : (
                    <img src="/icons/checkbox/register_checkbox_on.png" alt="회원가입 동의 on" className='agreement-checkbox-image' />   
                  )}
                </button>
            )} 
            <label htmlFor={'register-agreement-checkbox'}></label>
            <input 
                 type={agreementType}
                 className='register-agreement-checkbox'
            /> <span className='agreement-text-span'>{agreementText}</span>
        </div>
    )
};

export default RegisterAgreement;