import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/change-password.scss';
import FindAccountHeader from '../component/FindAccountHeader';
import RegisterFindUserFooter from '../../../components/footer/RegisterFindUserFooter';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsSubmitEnabled(password !== '' && confirmPassword !== '' && password === confirmPassword);
    }, [password, confirmPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            const response = await axios.post(`${apiUrl}/auth/change-password`, {
                newPassword: password,
                access_token: token
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '비밀번호가 변경되었습니다.',
                    confirmButtonColor: '#89CFF0'
                }).then(() => {
                    navigate('/');
                });
            } else {
                setMessage('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            setMessage('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="change-password-container">
            <FindAccountHeader />
            <div className="change-password-content">
                <h2 className="title">비밀번호 변경</h2>
                <form className="change-password-form" onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="change-input-element"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        className="change-input-element"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className={`change-password-button ${!isSubmitEnabled ? 'disabled' : ''}`} 
                        disabled={!isSubmitEnabled}
                    >
                        변경
                    </button>
                    {message && <p className="message">{message}</p>}
                </form>
            </div>
            <RegisterFindUserFooter />
        </div>
    );
};

export default ChangePassword;