import React from 'react';
import '../styles/chatbot-layout.css';
import chatBotBackButton from '../icons/chatbot-backbutton.svg';
import profileImage from '../icons/profile_image.png';

function Header({ currentPage, onClose }) {
    const getHeaderTitle = () => {
        switch (currentPage) {
            case 'home':
                return '자주 묻는 질문';
            case 'inquiry':
                return 'Youth Supporter';
            default:
                return '';
        }
    };
    const getHeaderContent = () => {
        switch (currentPage) {
            case 'home':
                return '안녕하세요. 어떻게 도와드릴까요?';
            case 'inquiry':
                return '몇 분 내 답변을 받으실 수 있어요.';
            default:
                return '';
        }
    }

    return (
        <div className='chatbot-header'>
            <button onClick={onClose} className='back-button'>
                <img src={chatBotBackButton} alt="Back chatbot" />
            </button>
            {currentPage === 'inquiry' ? <img className='profile' src={profileImage} alt="프로필이미지" /> : ''}
            <div className='header-text'>
                <span className='header-title'>{getHeaderTitle()}</span>
                <span className='header-content'>{getHeaderContent()}</span>
            </div>
        </div>
    );
}

export default Header;
