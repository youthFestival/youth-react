import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/findbtn.scss';

/**
 * 계정찾기 토글 안 버튼 컴포넌트
 * @returns 
 */
function FindBtn ({ findBtnText, findNavLink, findType }) {
    const [findClickBtn, setFindClickBtn] = useState(true);
    const [findIsContents, setFindIsContents] = useState(false);

    const findClickBtnHandler = () => {
        setFindClickBtn(!findClickBtn);
        setFindIsContents(!findIsContents);
    };

    return (
        <div>

            <div className='find-btn'>
                <NavLink to={findNavLink} className='navlink'>
                    <button className='realbtn'>
                        {findBtnText}
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default FindBtn;
