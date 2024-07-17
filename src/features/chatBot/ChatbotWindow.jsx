import React, { useState } from 'react';
import chatBotCloseButton from './icons/close-icon.svg'
import Header from './chatBotUI/Header';
import Content from './chatBotUI/contents/Content';
import Navigation from './chatBotUI/Navigation';

import './styles/chatbot-icon.css'


function ChatbotWindow({ onClose }) {
    const [currentPage, setCurrentPage] = useState('home');
    return(
        <div>
            <div className='chatbot-container'>
                <Header currentPage={currentPage} onClose={onClose}/>
                <Content currentPage={currentPage}/>
                <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        <button className='chatbot-icon' onClick={onClose}>
            <img src={chatBotCloseButton} alt="Close chatbot"/>
        </button>
    </div>
    )
};

export default ChatbotWindow;
