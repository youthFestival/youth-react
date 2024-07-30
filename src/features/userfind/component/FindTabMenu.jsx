import React, { useState } from 'react';
import {
    IdFindAll,
    PwFindAll
} from '../index.js';
import '../styles/find-tabmenu.scss';

const FindTabMenu = () => {
    const [findTab, setFindTab] = useState(0);

    const menuData = [
        { 
            name: '아이디 찾기', 
            content: <IdFindAll/>
        },
        { 
            name: '비밀번호 찾기', 
            content: <PwFindAll/> 
        }
    ];

    const findTabMenuHandler = (index) => {
        setFindTab(index);
    };

    return (
        <div>
            <div className='find-tabmenu'>
                {menuData.map((el, index) => (
                    <li 
                        key={index} 
                        className={index === findTab ? "submenu focused" : "submenu"}
                        onClick={() => findTabMenuHandler(index)}
                    >
                        {el.name}
                    </li>
                ))}
            </div>
            <p>{menuData[findTab].content}</p>
        </div>
    );
};

export default FindTabMenu;
