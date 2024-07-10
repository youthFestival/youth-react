import React from 'react';
import './styles/chatbot-layout.css'
import chatBotBackButton from './icons/chatbot-backbutton.svg'
function Header({ currentPage }) {
    return (
        <div id='chatbot-header'>
            <button>
                <img src={chatBotBackButton} alt="Back chatbot"/>
            </button>
        </div>
    );
}

export default Header;