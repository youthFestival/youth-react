import React, { useState, useEffect } from "react";

import "../styles/festival-list.scss";
import PosterComponent from "./PosterComponent";

/**
 * 전체 탭 메뉴 모든 컴포넌트
 * @returns
 */

const AllListTab = () => {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 1",
          festivalLocation: "Location 1",
          festivalDate: "Date 1",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 2",
          festivalLocation: "Location 2",
          festivalDate: "Date 2",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 3",
          festivalLocation: "Location 3",
          festivalDate: "Date 3",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 4",
          festivalLocation: "Location 4",
          festivalDate: "Date 4",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },

        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },

        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
        {
          posterSrc: "",
          posterAlt: "",
          festivalTitle: "All Festival Poster 5",
          festivalLocation: "Location 5",
          festivalDate: "Date 5",
        },
      ];
      setAllList(data);
    };

    fetchData();
  }, []);

  return (
    <div className="festival-list">
      {allList.map((all, index) => (
        <PosterComponent
          key={index}
          posterSrc={all.posterSrc}
          posterAlt={all.posterAlt}
          festivalTitle={all.festivalTitle}
          festivalLocation={all.festivalLocation}
          festivalDate={all.festivalDate}
        />
      ))}
    </div>
  );
};

export default AllListTab;
