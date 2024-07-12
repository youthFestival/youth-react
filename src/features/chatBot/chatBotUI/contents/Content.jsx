import React from 'react';
import Home from './HomeContent'
import '../../styles/chatbot-layout.css'
function Content({ currentPage }) {
    const getContent = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'inquiry':
                return 'Inquiry';
            case'setting':
                return 'Setting';
            default:
                return <Home />;
        }
    }

    return (
        <div className='chatbot-content'>
            <h1>{getContent()}</h1>
        </div>
    );
}

export default Content;