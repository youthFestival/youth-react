import React, { useState, useEffect } from "react";
import axios from 'axios';
import PosterComponent from "./PosterComponent";
import "../styles/festival-list.scss";
/**
 * 대학축제 탭 메뉴 모든 컴포넌트
 * @returns
 */

const UnivListTab = () => {
  const [univList, setUnivList] = useState([]);

  const univGetHandler = async() => {
    try{
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log(`API URL: ${apiUrl}`)
        const response = await axios.get(`${apiUrl}/festival`);
        console.log(response.data)

        const filteredFestivals = response.data.festivals.filter(festival =>
          festival.categories && festival.categories.includes('대학축제')
        );
        return filteredFestivals;

    } catch (err){
        console.log(err);
        return[];
    }
}
    
useEffect(() => {

  const fetchData = async () => {
            const data = await univGetHandler();
            setUnivList(data);
        };

        fetchData();
}, []);

  return (
    <div className="festival-list">
      {univList.map((univ, index) => (
        <PosterComponent
          key={index}
          posterSrc={univ.posterSrc}
          posterAlt={univ.posterAlt}
          festivalTitle={univ.festivalTitle}
          festivalLocation={univ.festivalLocation}
          festivalDate={`${univ.startDate} - ${univ.endDate}`}
        />
      ))}
    </div>
  );
};

export default UnivListTab;
