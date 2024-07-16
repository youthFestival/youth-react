import React from 'react';
import '../styles/registergenderbtn.css'
/**
 * 회원가입 성별 선택 버튼 컴포넌트
 * @returns 
 */

function RegisterGenderBtn ({}) {
    return (
        <div className='gender-choice'>
            <div className='gender-choice-form'>
                <span className='gender-span'>성별</span>

                <button className='gender-man'>
                    남자 
                </button>
                <button className='gender-woman'>
                    여자
                </button>
            </div>      
        </div>
    );
};

export default RegisterGenderBtn;