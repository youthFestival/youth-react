import React from 'react';
import '../styles/chatbot-layout.css'
import HomeIcon from '../icons/home-icon'
import InqIcon from '../icons/inquiry-icon'
import SettingIcon from '../icons/setting-icon'
function Navigation({currentPage, setCurrentPage}) {

    return (
        <div className='chatbot-navi'>
            <button
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => setCurrentPage('home')}
            >
                <HomeIcon fill={currentPage === 'home' ? '#89CFF0' : '#5F6368'} />
                <p className={currentPage === 'home' ? 'active' : ''}>홈</p>
            </button>
            <button
                className={currentPage === 'inquiry' ? 'active' : ''}
                onClick={() => setCurrentPage('inquiry')}
            >
                <InqIcon fill={currentPage === 'inquiry' ? '#89CFF0' : '#5F6368'} />
                <p className={currentPage === 'inquiry' ? 'active' : ''}>문의</p>
            </button>
            <button
                className={currentPage === 'setting' ? 'active' : ''}
                onClick={() => setCurrentPage('setting')}
            >
                <SettingIcon fill={currentPage === 'setting' ? '#89CFF0' : '#5F6368'} />
                <p className={currentPage === 'setting' ? 'active' : ''}>설정</p>
            </button>
        </div>
    );
}

export default Navigation;