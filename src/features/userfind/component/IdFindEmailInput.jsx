import React, { useState } from 'react';
import '../styles/id-find-email-input.scss';

const IdFindEmailInput = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('직접입력');

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullEmail = domain === '직접입력' ? email : `${email}@${domain}`;
        onSubmit(username, fullEmail);
    };

    return (
        <form className="input-container" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="이름" 
                className="input-element" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className="email-verification">이메일 인증</button>
        </form>
    );
};

export default IdFindEmailInput;