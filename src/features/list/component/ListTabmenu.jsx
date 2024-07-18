import React from 'react';

const ListTabmenu = () => {
    const [listTab, setListTab] = useState(0);

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

    const listTabMenuHandler = (index) => {
        setListTab(index);
    };

    return (
        <div className='list-tabmenu'>
            <div className='form'>
                {menuData.map((el, index) => (
                    <li 
                        key={index} 
                        className={index === listTab ? "submenu focused" : "submenu"}
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