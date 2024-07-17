import React, { useEffect, useRef } from 'react';
import ToggleTop from '../../icons/toggle-allow-top.svg';
import ToggleBottom from '../../icons/toggle-allow-bottom.svg';
import HelpIcon from '../../icons/help-icon.svg';

import '../../styles/content-list-item.css';

const HomeContentListItem = ({ question, answer, isOpen, onToggle }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        if (isOpen && itemRef.current) {
            const parentElement = itemRef.current.parentElement;
            const rect = itemRef.current.getBoundingClientRect();
            const parentRect = parentElement.getBoundingClientRect();
            if (rect.bottom > parentRect.bottom) {
                parentElement.scrollBy({
                    top: rect.bottom - parentRect.bottom,
                    behavior: 'smooth',
                });
            } else if (rect.top < parentRect.top) {
                parentElement.scrollBy({
                    top: rect.top - parentRect.top,
                    behavior: 'smooth',
                });
            }
        }
    }, [isOpen]);

    return (
        <div ref={itemRef} className={`content-list-item-container ${isOpen ? 'open' : ''}`}>
            <div className='item-list-title' onClick={onToggle}>
                <img src={HelpIcon} alt="?아이콘" className='help-icon' />
                <div className='title-text'>{question}</div>
                <img src={isOpen ? ToggleTop : ToggleBottom} alt='토글방향' className='toggle-icon'/>
            </div>
            {isOpen && <div className='item-list-content'>{answer}</div>}
        </div>
    );
};

export default HomeContentListItem;
