import React, { useState } from "react";
import Footer from "../../../components/footer/Footer.jsx";
import "../styles/list-tab-menu.scss";
import AllListTab from "./AllListTab.jsx";
import UnivListTab from "./UnivListTab.jsx";
import FestivalListTab from "./FestivalListTab.jsx";
/**
 * 리스트 페이지 탭메뉴(전체, 대학축제, 페스티벌)
 * @returns
 */
const ListTabmenu = () => {
  const [listTab, setListTab] = useState(0);

  const menuData = [
    {
      name: "전체",
      content: <AllListTab />,
    },
    {
      name: "대학축제",
      content: <UnivListTab />,
    },
    {
      name: "페스티벌",
      content: <FestivalListTab />,
    },
  ];

  const listTabMenuHandler = (index) => {
    setListTab(index);
  };

    return (
        <div className='list-tabmenu'>
            <div className='tabform'>
                {menuData.map((list, index) => (
                    <li 
                        key={index} 
                        className={index === listTab ? "listsubmenu focused" : "listsubmenu"}
                        onClick={() => listTabMenuHandler(index)}
                    >
                        {list.name}
                    </li>
                ))}
            </div>
            <p className='listcontent'>{menuData[listTab].content}</p>

            <Footer/>
        </div>
    );
};

export default ListTabmenu;
