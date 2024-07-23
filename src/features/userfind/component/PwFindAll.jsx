import React, { useState } from 'react';
import { 
       FindToggle, 
       FindBtn 
} from '../index.js';

const PwFindAll = () => {
    const [openToggle, setOpenToggle] = useState(null);

    const handleToggleClick = (index) => {
        setOpenToggle(openToggle === index ? null : index);
    };

    return (
        <div>
            <FindToggle 
                findType='radio' 
                findText='휴대폰 인증으로 찾기' 
                isOpen={openToggle === 0}
                onClick={() => handleToggleClick(0)}
                toggleContents={<FindBtn findBtnText='휴대폰 인증' findNavLink='/pw1'/>} 
                toggleText='본인확인(실명인증)이 완료된 비밀번호는 본인명의 휴대폰 인증으로 아이디를 찾을 수 있어요.'
            />

            <FindToggle 
                findType='radio' 
                findText='이메일 인증으로 찾기' 
                isOpen={openToggle === 1}
                onClick={() => handleToggleClick(1)}
                toggleContents={<FindBtn findBtnText='이메일 인증' findNavLink='/pw2'/>} 
                toggleText='본인확인(실명인증)이 완료된 비밀번호는 본인명의 이메일 인증으로 아이디를 찾을 수 있어요.'
            />

            <FindToggle 
                findType='radio' 
                findText='휴대폰 번호로 찾기' 
                isOpen={openToggle === 2}
                onClick={() => handleToggleClick(2)}
                toggleContents={<FindBtn findBtnText='휴대폰 인증' findNavLink='/pw3'/>} 
                toggleText='본인확인(실명인증)이 완료된 비밀번호는 본인명의 휴대폰 번호로 아이디를 찾을 수 있어요.'
            />
        </div>
    );
};

export default PwFindAll;