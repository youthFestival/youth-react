import React, { useState } from 'react';
import { 
    FindToggle, 
    FindBtn 
} from '../index.js';
import IdFindEmailInput from './IdFindEmailInput';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const IdFindAll = () => {
    const [openToggle, setOpenToggle] = useState(null);

    const handleToggleClick = (index) => {
        setOpenToggle(openToggle === index ? null : index);
    };

    const handleEmailSubmit = async (username, email) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.post(`${apiUrl}/auth/find-username-email`, { username, email });
            MySwal.fire({
                icon: 'success',
                title: '아이디 찾기 성공!',
                text: `아이디: ${response.data.userId}`,
                confirmButtonText: '확인',
                confirmButtonColor: '#89CFF0',
            });
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: '아이디 찾기 실패',
                text: '일치하는 아이디를 찾을 수 없습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#89CFF0',
            });
        }
    };

    return (
        <div>
            <FindToggle
                findType='radio'
                findText='이메일 인증으로 찾기'
                isOpen={openToggle === 0}
                onClick={() => handleToggleClick(0)}
                toggleContents={
                    <IdFindEmailInput onSubmit={handleEmailSubmit} />
                }
                toggleText='본인확인(실명인증)이 완료된 아이디는 본인명의 이메일 인증으로 아이디를 찾을 수 있어요.'
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

export default IdFindAll;