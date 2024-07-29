import React from 'react';
import '../styles/registergenderbtn.css'
/**
 * 회원가입 성별 선택 버튼 컴포넌트
 * @returns 
 */

function RegisterGenderBtn ({registerInputValue, registerInputOnChange, name}) {
    return (
        <div className='gender-choice'>
            <div className='gender-choice-form'>
                
                <span className='gender-span'>성별</span>
                
                <div className='register-gender-btn'>
                    <button 
                        className={`gender-man ${registerInputValue === '남자' ? 'checked' : ''}`} 
                        name={name} 
                        onClick={registerInputOnChange} 
                        value='여자'>
                        남자
                    </button>
                    <button 
                        className={`gender-woman ${registerInputValue === '여자' ? 'checked' : ''}`} 
                        name={name} 
                        onClick={registerInputOnChange} 
                        value='남자'>
                        여자
                    </button>
                </div>
            </div>      
        </div>
    );
};

export default RegisterGenderBtn;