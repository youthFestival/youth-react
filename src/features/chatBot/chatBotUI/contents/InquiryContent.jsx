import React, { useState, useRef, useEffect } from 'react'
import Question from './InquiryContentQuestion'
import Answer from './InquiryContentAnswer'
import MessageIcon from '../../icons/send-message-icon.svg'

import '../../styles/content-inquiry.css'

const InquiryContent = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [index, setIndex] = useState(1);
    const chatAreaRef = useRef(null);

    const handleChat = () => {
        if(!message) return;
        setChatHistory([...chatHistory, 
            { type: 'question', text: message }, 
            { type: 'answer', text: `${index}번째 답변입니다. dkanxmsddddddddddddddddddddddddddddddddddddddddddd` }]);
        setIndex(index + 1);
        setMessage('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
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
            <div className='title'>Yooth에 문의하기</div>
            <div className='chat-area' ref={chatAreaRef}>
                {chatHistory.map((msg, idx) => 
                    msg.type === 'question' ? (
                        <Question key={idx} question={msg.text} />
                    ) : (
                        <Answer key={idx} answer={msg.text} />
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
