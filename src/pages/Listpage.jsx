import React, { useState } from 'react';
import { 
    ListTabmenu,
    TopButton
} from '../features/list/index.js';
import Nav from '../components/nav/Nav.jsx';
import Header from '../components/header/Header.jsx';

import '../styles/listpage.scss'

const Listpage = () => {

    const [borderColors, setBorderColors] = useState({
        lanking: '#ccc',
        status: '#ccc',
        locality: '#ccc'
    });

    // 이벤트 핸들러를 정의합니다.
    const handleSelectChange = (event) => {
        const { id, value } = event.target;
        setBorderColors((prevColors) => ({
            ...prevColors,
            [id]: value === 'default' ? '#ccc' : '#89CFF0'
        }));
    };

    return (
        <div className='list-page'>

                    <Header />
                    <Nav />

                <span className='look'>둘러보기</span>

                <div className='listmain'>

                    <ListTabmenu />
            

                    <div className='dropdown-form'>
                        <select
                            id="lanking"
                            onChange={handleSelectChange}
                            style={{ borderColor: borderColors.lanking }}
                        >
                            <option value="최신순">최신순</option>
                            <option value="거리순">거리순</option>
                            <option value="인기순">인기순</option>
                        </select>

                        <select
                            id="status"
                            onChange={handleSelectChange}
                            style={{ borderColor: borderColors.status }}
                        >
                            <option value="개최중">개최중</option>
                            <option value="전체">전체</option>
                        </select>

                        <select
                            id="locality"
                            onChange={handleSelectChange}
                            style={{ borderColor: borderColors.locality }}
                        >
                            <option value="지역전체">지역전체</option>
                            <option value="서울">서울</option>
                            <option value="경기도">경기도</option>
                            <option value="강원도">강원도</option>
                            <option value="충청도">충청도</option>
                            <option value="경상도">경상도</option>
                            <option value="전라도">전라도</option>
                            <option value="제주도">제주도</option>
                        </select>
                    </div> 
                </div>
                
                <TopButton />
        </div>
    );
};

export default Listpage;
