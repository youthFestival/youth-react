import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../styles/id-find-email-input.scss';

const PwFindEmailInput = ({ onSubmit, requestSent }) => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [domain, setDomain] = useState('직접입력');
    const [verificationCode, setVerificationCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(180);
    const [isTimerActive, setIsTimerActive] = useState(requestSent);

    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (isTimerActive) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isTimerActive]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullEmail = domain === '직접입력' ? email : `${email}@${domain}`;
        onSubmit(userId, fullEmail);
        setIsTimerActive(true);
    };

    const handleResend = async () => {
        try {
            const fullEmail = domain === '직접입력' ? email : `${email}@${domain}`;
            const apiUrl = process.env.REACT_APP_API_URL;
            await axios.post(`${apiUrl}/auth/reset-password-request`, { userId, email: fullEmail });
            setTimeLeft(180);
            setIsTimerActive(true);
            Swal.fire({
                icon: 'success',
                title: '인증코드를 다시 발송했습니다.',
                confirmButtonColor: '#89CFF0',
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: '인증코드 재발송에 실패했습니다.',
                text: '아이디 혹은 이메일이 일치하지 않습니다.',
                confirmButtonColor: '#89CFF0',
            });
        }
    };

    const handleVerifyCode = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.post(`${apiUrl}/auth/verify-code`, { verificationCode });
            const { access_token } = response.data;
            Swal.fire({
                icon: 'success',
                title: '인증 성공',
                text: '비밀번호를 재설정할 수 있습니다.',
                confirmButtonColor: '#89CFF0',
            }).then(() => {
                navigate(`/change-password?token=${access_token}`);
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: '인증 실패',
                text: '인증코드가 유효하지 않습니다.',
                confirmButtonColor: '#89CFF0',
            });
        }
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
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                        <span className="timer">{timeLeft > 0 ? formatTime(timeLeft) : '시간초과'}</span>
                        <button type="button" className="resend-button" onClick={handleResend}>재전송</button>
                    </div>
                    <button type="button" className="email-verification" onClick={handleVerifyCode}>인증코드 인증</button>
                </>
            )}
            {!requestSent && (
                <button type="submit" className="email-verification">인증코드 발급</button>
            )}
        </form>
    );
};

export default PwFindEmailInput;