import React, { useState, useRef, useEffect } from 'react'
import Question from './InquiryContentQuestion'
import Answer from './InquiryContentAnswer'
import MessageIcon from '../../icons/send-message-icon.svg'

import '../../styles/content-inquiry.css'
import axios from 'axios'

const apiURL = process.env.REACT_APP_FLASK_URL;

const InquiryContent = () => {
    const [message, setMessage] = useState('');
    const [botAnswer, setBotAnswer] = useState('');
    const [link, setLink] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const chatAreaRef = useRef(null);

    const handleChat = async () => {
        if (!message) return;

        const userMessage = message;
        setChatHistory([...chatHistory, { type: 'question', text: userMessage }]);
        setMessage('');

        try {
            const response = await axios.post(apiURL + '/chatbot', {
                question: userMessage,
            });
            const answer = response.data.answer;
            const link = response.data.link;
            setBotAnswer(answer);
            setLink(link);
            setChatHistory([...chatHistory, { type: 'question', text: userMessage }, { type: 'answer', text: answer.replace(link, ''), link: link }]);
        } catch (error) {
            console.error('Error Chat:', error);
            setChatHistory([...chatHistory, { type: 'question', text: userMessage }, { type: 'answer', text: 'Error occurred. Please try again.' }]);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            //console.log(message);
            handleChat();
        }
    }

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className='inquiry-container'>
            <div className='inquiry-title'>Yooth에 문의하기</div>
            <div className='chat-area' ref={chatAreaRef}>
                {chatHistory.map((msg, idx) => 
                    msg.type === 'question' ? (
                        <Question key={idx} question={msg.text} />
                    ) : (
                        <Answer key={idx} answer={msg.text} link={msg.link}/>
                    )
                )}
            </div>
            <div className='send-message'>
                <input 
                    type="text" 
                    placeholder="메세지 내용을 입력하세요" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}/>
                <img src={MessageIcon} alt="메세지 전송 아이콘" onClick={handleChat}/>
            </div>
        </div>
    )
}

export default InquiryContent
