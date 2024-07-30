import React from 'react';

const SettingContentItem = ({ imgSrc, text, toggle, onToggle }) => {
    return (
        <div className='setting-item-container'>
            <div className='setting-item-content'>
                <img src={imgSrc} alt="아이콘" className='icon' />
                <span className='text'>{text}</span>
            </div>
            <div className={`setting-item-toggle-container ${toggle ? 'active' : ''}`} onClick={onToggle}>
                <div className={`setting-item-toggle-circle ${toggle ? 'active' : ''}`}></div>
            </div>
        </div>
    );
}

export default SettingContentItem;
