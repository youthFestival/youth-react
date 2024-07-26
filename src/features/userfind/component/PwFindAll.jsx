import React, { useState, useEffect } from 'react';
import {
    FindToggle,
    FindBtn
} from '../index.js';
import axios from 'axios';
import PwFindEmailInput from './PwFindEmailInput';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const PwFindAll = () => {
    const [openToggle, setOpenToggle] = useState(null);
    const [requestSent, setRequestSent] = useState(false);

    const handleToggleClick = (index) => {
        setOpenToggle(openToggle === index ? null : index);
    };

    const handleEmailSubmit = async (userId, email) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.post(`${apiUrl}/auth/reset-password-request`, { userId, email });
            setRequestSent(true);
        } catch (error) {
            setRequestSent(false);
            MySwal.fire({
                icon: 'error',
                title: '아이디 혹은 이메일이 일치하지 않습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#89CFF0',
            });
        }
    };

    useEffect(() => {
        if (requestSent) {
            MySwal.fire({
                icon: 'success',
                title: '인증코드를 발송했습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#89CFF0',
            });
        }
    }, [requestSent]);

    return (
        <div>
            <FindToggle
                findType='radio'
                findText='이메일 인증으로 찾기'
                isOpen={openToggle === 0}
                onClick={() => handleToggleClick(0)}
                toggleContents={
                    <PwFindEmailInput onSubmit={handleEmailSubmit} requestSent={requestSent} />
                }
                toggleText='이메일로 발송되는 인증코드를 통해 비밀번호를 재설정할 수 있어요.'
            />

            <FindToggle
                findType='radio'
                findText='휴대폰 인증으로 찾기'
                toggleContents={<FindBtn findBtnText='휴대폰 인증' findNavLink='/pw1' />}
                toggleText='본인확인(실명인증)이 완료된 비밀번호는 본인명의 휴대폰 인증으로 아이디를 찾을 수 있어요.'
            />
        </div>
    );
};

export default PwFindAll;