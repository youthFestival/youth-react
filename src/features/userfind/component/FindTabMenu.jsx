import React, { useState } from 'react';
import '../styles/findtabmenu.scss'

const FindTabMenu = () => {
    const [findTab, setFindTab] = useState(0);

    const menuData = [
        { name: '아이디 찾기', content: 'dwqdqwdqd' },
        { name: '비밀번호 찾기', content: 'Tab menu 2' }
    ]

    const findTabMenuHandler = (index) => {
        setFindTab(index);
    }
    return (
            <div>
                <div className='find-tabmenu'>
                        {menuData.map((el,index) => (
                            <li className={index == findTab ? "submenu focused" : "submenu"}
                            onClick={() => findTabMenuHandler(index)}>{el.name}</li>
                        ))}
                </div>
                        <p>{menuData[findTab].content}</p>
            </div> 
    );
};

export default FindTabMenu;