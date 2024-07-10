import React, { useState } from 'react';
import './styles/chatbot-layout.css'
import homeIcon from './icons/chatbot-home.svg'
import inqIcon from './icons/chatbot-inquiry.svg'
import settingIcon from './icons/chatbot-setting.svg'
function Navigation() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div id='chatbot-navi'>
            <button className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>
                <img src={homeIcon} alt='홈' />
            </button>
            <button onClick={() => setCurrentPage('inquiry')}>
                <img src={inqIcon} alt='문의' />
            </button>
            <button onClick={() => setCurrentPage('setting')}>
                <img src={settingIcon} alt='설정' />
            </button>
        </div>
    );
}

export default Navigation;