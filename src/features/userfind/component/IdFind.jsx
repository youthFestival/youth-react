import React, { useState } from 'react';
import '../styles/idfind.scss';

const IdFind = ({ findType, findText, togleContents, toggleText }) => {
    const [findRadio, setFindRadio] = useState(true);
    const [isToggled, setIsToggled] = useState(false);

    const findRadioCheckHandler = () => {
        setFindRadio(!findRadio);
        setIsToggled(!isToggled);
    };

    return (
        <div className='id-find'>
            {findType === 'radio' && (
                <button onClick={findRadioCheckHandler} className='handler-btn'>
                    {findRadio ? (
                        <img src="/icons/radiobutton/findcheck_off.png" alt="찾기방법 선택 off" className='find-radio-image' />
                    ) : (
                        <img src="/icons/radiobutton/findcheck_on.png" alt="찾기방법 선택 on" className='find-radio-image' />
                    )}
                </button>
            )}
            <label htmlFor={'find-radio'}></label>
            <input 
                type={findType}
                className='find-radio'
            /> <span className=''>{findText}</span>

            {isToggled && (
                <div className='toggle-content'>
                    <p className='to'>{toggleText}</p>
                    {togleContents}
                </div>
            )}
        </div>
    );
};

export default IdFind;
