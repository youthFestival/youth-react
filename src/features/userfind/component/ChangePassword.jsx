import React, { useState } from 'react';
import axios from 'axios';
import '../styles/change-password.scss';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 토큰을 URL에서 추출
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (!token) {
            setMessage('유효하지 않은 요청입니다.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.post(`${apiUrl}/auth/reset-password`, {
                token,
                password
            });

            setMessage('비밀번호가 성공적으로 변경되었습니다.');
        } catch (error) {
            setMessage('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="reset-password-container">
            <h2 className="title">비밀번호 변경</h2>
            <form className="reset-password-form" onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="input-element"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    className="input-element"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="reset-password-button">변경</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default ChangePassword;