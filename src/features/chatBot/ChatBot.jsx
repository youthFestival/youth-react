import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatbotWindow from './ChatbotWindow';

const Chatbot = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const handleOpen = () => {
    setIsChatbotOpen(true);
    };

    const handleClose = () => {
    setIsChatbotOpen(false);
    };

    return (
        <div>
            <div>
                {isChatbotOpen ? 
                ( <ChatbotWindow onClose={handleClose} /> ) 
                : ( <ChatbotButton onClick={handleOpen} /> )}
            </div>
        </div>
    );
};

export default Chatbot;
