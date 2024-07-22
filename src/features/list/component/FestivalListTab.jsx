import React, { useState, useEffect } from "react";
import axios from 'axios';
import PosterComponent from "./PosterComponent";
import "../styles/festival-list.scss";

/**
 * 페스티벌 탭 메뉴 모든 컴포넌트
 * @returns
 */

const FestivalListTab = () => {
  
  const [festivalList, setFestivalList] = useState([]);

  const festivalGetHandler = async () => {
      try {
          const apiUrl = process.env.REACT_APP_API_URL;
          console.log(`API URL: ${apiUrl}`);
          const response = await axios.get(`${apiUrl}/festival?category=페스티벌`);
          console.log(response.data);

          return response.data.festivals;

      } catch (err) {
          console.log(err);
          return [];
      }
  };
      

  useEffect(() => {
      const fetchData = async () => {
          const data = await festivalGetHandler();
          setFestivalList(data);
      };

      fetchData();
  }, []);

  return (
    <div className="festival-list">
      {festivalList.map((festival, index) => (
        <PosterComponent
          key={index}
          posterSrc={festival.posterSrc}
          posterAlt={festival.posterAlt}
          festivalTitle={festival.name}
          festivalLocation={festival.festivalLocation}
          festivalDate={`${festival.startDate} - ${festival.endDate}`}
        />
      ))}
    </div>
  );
};

export default FestivalListTab;
