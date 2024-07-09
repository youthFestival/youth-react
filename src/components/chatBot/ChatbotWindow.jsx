import React from 'react';
import chatBotCloseButton from './icons/close-icon.svg'
import Header from './Header';
import Body from './Body';
import Navigation from './Navigation';

import './chatbot.css';


function ChatbotWindow({ onClose }) {
    return(
        <div>
            <div id='chatbot-container'>
                <Header />
                <Body />
                <Navigation />
            </div>
        <button id='chatbot-icon' onClick={onClose}>
            <img src={chatBotCloseButton} alt="Close chatbot" onClick={onClose}/>
        </button>
    </div>
    )
};

export default ChatbotWindow;
