import React, { useState, useEffect } from "react";
import "../styles/festival-list.scss";
import PosterComponent from "./PosterComponent";

/**
 * 페스티벌 탭 메뉴 모든 컴포넌트
 * @returns
 */

const FestivalListTab = () => {
  const [festivalList, setFestivalList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "Festival Poster 1",
          festivalLocation: "Location 1",
          festivalDate: "Date 1",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "Festival Poster 2",
          festivalLocation: "Location 2",
          festivalDate: "Date 2",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "Festival Poster 3",
          festivalLocation: "Location 3",
          festivalDate: "Date 3",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "Festival Poster 4",
          festivalLocation: "Location 4",
          festivalDate: "Date 4",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
      ];
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
          festivalTitle={festival.festivalTitle}
          festivalLocation={festival.festivalLocation}
          festivalDate={festival.festivalDate}
        />
      ))}
    </div>
  );
};

export default FestivalListTab;
