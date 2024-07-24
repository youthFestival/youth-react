import React, { useState, useEffect } from 'react';
import '../styles/id-find-email-input.scss';

const PwFindEmailInput = ({ onSubmit, requestSent }) => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('직접입력');
    const [timeLeft, setTimeLeft] = useState(180);

    useEffect(() => {
        if (requestSent) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [requestSent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullEmail = domain === '직접입력' ? email : `${email}@${domain}`;
        onSubmit(userId, fullEmail);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <form className="input-container" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="아이디" 
                className="input-element" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)}
            />
            <div className="input-element email-dropdown">
                <input 
                    type="text" 
                    placeholder="이메일" 
                    className="email-input" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <select 
                    className="email-select" 
                    value={domain} 
                    onChange={(e) => setDomain(e.target.value)}
                >
                    <option value="직접입력">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="daum.net">daum.net</option>
                </select>
            </div>
            {requestSent && (
                <>
                    <div className="verification-container">
                        <input 
                            type="text" 
                            placeholder="인증코드 입력" 
                            className="verification-input" 
                        />
                        <span className="timer">{formatTime(timeLeft)}</span>
                    </div>
                    <button type="submit" className="email-verification">인증코드 인증</button>
                </>
            )}
            {!requestSent && (
                <button type="submit" className="email-verification">인증코드 발급</button>
            )}
        </form>
    );
};

export default PwFindEmailInput;