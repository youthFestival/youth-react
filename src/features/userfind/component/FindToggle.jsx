import React from 'react';
import '../styles/find-toggle.scss';

/**
 * 계정찾기 라디오 토글 컴포넌트
 * @returns 
 */
const FindToggle = ({ findType, findText, toggleContents, toggleText, isOpen, onClick }) => {
    return (
        <div className='id-find'>
            {findType === 'radio' && (
                <button onClick={onClick} className='handler-btn'>
                    {isOpen ? (
                        <img src="/icons/radiobutton/findcheck_on.png" alt="찾기방법 선택 on" className='find-radio-image' />
                    ) : (
                        <img src="/icons/radiobutton/findcheck_off.png" alt="찾기방법 선택 off" className='find-radio-image' />
                    )}
                </button>
            )}

            <input 
                type={findType}
                className='find-radio'
                name='find'
            /> 
            <span className='find-text' onClick={onClick}>{findText}</span>

            <div className={`toggle-content ${isOpen ? 'open' : ''}`}>
                <p className='toggle-text'>{toggleText}</p>
                {toggleContents}
            </div>
        </div>
    );
};

export default FindToggle;