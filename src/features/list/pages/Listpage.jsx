import React, { useState } from "react";
import TopButton from "../component/TopButton";
import ListTabmenu from "../component/ListTabmenu";
import Dropdown from '../component/Dropdown';
import "../styles/listpage.scss";


const Listpage = () => {
  const [borderColors, setBorderColors] = useState({
    lanking: "#ccc",
    status: "#ccc",
    locality: "#ccc",
  });

  // 이벤트 핸들러를 정의합니다.
  const handleSelectChange = (event) => {
    const { id, value } = event.target;
    setBorderColors((prevColors) => ({
      ...prevColors,
      [id]: value === "default" ? "#ccc" : "#89CFF0",
    }));
  };

  return (
    <div className="list-page">
      <span className="look">둘러보기</span>

      <div className="listmain">
        <ListTabmenu />

        <div className="dropdown-form">
        <Dropdown
                id="lanking"
                value="최신순"
                options={["최신순", "거리순", "인기순"]}
                onChange={handleSelectChange}
                borderColor={borderColors.lanking}
            />

            <Dropdown
                id="status"
                value="개최중"
                options={["개최중", "전체"]}
                onChange={handleSelectChange}
                borderColor={borderColors.status}
            />

            <Dropdown
                id="locality"
                value="지역전체"
                options={["지역전체", "서울", "경기도", "강원도", "충청도", "경상도", "전라도", "제주도"]}
                onChange={handleSelectChange}
                borderColor={borderColors.locality}
            />
        </div>
        
      </div>

      <TopButton />
    </div>
  );
};

export default Listpage;
