import React from 'react';
import ToggleOn from '../../icons/toggle-on.svg';
import ToggleOff from '../../icons/toggle-off.svg';

const SettingContentItem = ({ imgSrc, text, toggle, onToggle }) => {
    return (
        <div className='setting-item-container'>
            <div className='setting-item-content'>
                <img src={imgSrc} alt="아이콘" className='icon' />
                <span className='text'>{text}</span>
            </div>
            {toggle ? <img src={ToggleOn} alt="활성화" onClick={onToggle} style={{ cursor: 'default' }}/> 
            : <img src={ToggleOff} alt="비활성화" onClick={onToggle} style={{ cursor: 'default' }}/>}
        </div>
    );
}

export default SettingContentItem;
