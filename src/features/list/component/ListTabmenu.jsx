import React, {useState} from 'react';
import {
    AllListTab,
    FestivalListTab,
    UnivListTab
} from '../index.js';

import '../styles/listtabmenu.scss'

const ListTabmenu = () => {
    const [listTab, setListTab] = useState(0);

    const menuData = [
        { 
            name: '전체', 
            content: <AllListTab/>
        },
        { 
            name: '대학축제', 
            content: <FestivalListTab/>
        },
        { 
            name: '페스티벌', 
            content: <UnivListTab/>
        }
    ];

    const listTabMenuHandler = (index) => {
        setListTab(index);
    };

    return (
        <div className='list-tabmenu'>
            <div className='form'>
                {menuData.map((el, index) => (
                    <li 
                        key={index} 
                        className={index === listTab ? "listsubmenu focused" : "listsubmenu"}
                        onClick={() => listTabMenuHandler(index)}
                    >
                        {el.name}
                    </li>
                ))}
            </div>
            <p>{menuData[listTab].content}</p>
        </div>
    );
};

export default ListTabmenu;