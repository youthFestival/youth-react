import React from 'react';
import { 
       IdFind, 
       FindBtn 
} from '../index.js';

const IdFindAll = () => {
    return (
        <div>
            <IdFind 
                findType='radio' 
                findText='휴대폰 인증으로 찾기' 
                togleContents={<FindBtn findBtnText='휴대폰 인증'/>} 
                toggleText='본인확인(실명인증)이 완료된 아이디는 본인명의 휴대폰 인증으로 아이디를 찾을 수 있어요.'
            />

            <IdFind 
                findType='radio' 
                findText='이메일 인증으로 찾기' 
                togleContents={<FindBtn findBtnText='이메일 인증'/>} 
                toggleText='본인확인(실명인증)이 완료된 아이디는 본인명의 휴대폰 인증으로 아이디를 찾을 수 있어요.'
            />

            <IdFind 
                findType='radio' 
                findText='휴대폰 번호로 찾기' 
                togleContents={<FindBtn findBtnText='휴대폰 번호로 찾기'/>} 
                toggleText='본인확인(실명인증)이 완료된 아이디는 본인명의 휴대폰 인증으로 아이디를 찾을 수 있어요.'
            />
        </div>
    );
};

export default IdFindAll;
