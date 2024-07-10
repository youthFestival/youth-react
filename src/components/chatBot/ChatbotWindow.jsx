import React from 'react';
import chatBotCloseButton from './icons/close-icon.svg'
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';

import './styles/chatbot-icon.css'


function ChatbotWindow({ onClose }) {
    return(
        <div>
            <div id='chatbot-container'>
                <Header />
                <Content />
                <Navigation />
            </div>
        <button id='chatbot-icon' onClick={onClose}>
            <img src={chatBotCloseButton} alt="Close chatbot" onClick={onClose}/>
        </button>
    </div>
    )
};

export default ChatbotWindow;
