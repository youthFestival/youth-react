import React from 'react';
import chatBotOpenButton from './icons/chat-icon.svg'

import './styles/chatbot-icon.css'

const ChatbotButton = ({ onClick }) => (
    <button className='chatbot-icon' onClick={onClick}>
        <img src={chatBotOpenButton} alt='open-button'/>
    </button>
);

export default ChatbotButton;
