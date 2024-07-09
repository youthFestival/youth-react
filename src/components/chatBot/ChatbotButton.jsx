import React from 'react';
import chatBotOpenButton from './icons/chat-icon.svg'

import './chatbot.css';

const ChatbotButton = ({ onClick }) => (
    <button id='chatbot-icon' onClick={onClick}>
        <img src={chatBotOpenButton} alt='open-button'/>
    </button>
);

export default ChatbotButton;
