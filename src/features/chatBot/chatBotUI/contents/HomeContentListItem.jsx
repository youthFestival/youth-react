import React, { useState } from 'react';
import ToggleTop from '../../icons/toggle-allow-top.svg';
import ToggleBottom from '../../icons/toggle-allow-bottom.svg';
import HelpIcon from '../../icons/help-icon.svg';

import '../../styles/content-list-item.css'

const HomeContentListItem = ({ question, answer }) => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <div className='content-list-item-container'>
            <div className='item-list-title' onClick={() => setIsToggle(!isToggle)}>
                <img src={HelpIcon} alt="?아이콘" />
                <div className='title-text'>{question}</div>
                <img src={isToggle ? ToggleTop : ToggleBottom} alt='토글방향' className='toggle-icon'/>
            </div>
            {isToggle && <div className='item-list-content'>{answer}</div>}
        </div>
    );
};

export default HomeContentListItem;
