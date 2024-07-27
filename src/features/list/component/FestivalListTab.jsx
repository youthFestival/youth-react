import React, { useState, useEffect } from "react";
import axios from "axios";
import PosterComponent from "./PosterComponent";
import { Link } from "react-router-dom";
import "../styles/festival-list.scss";

const FestivalListTab = () => {
  const [festivalList, setFestivalList] = useState([]);
  //   const page = useParams()["*"] || 1;

  const festivalGetHandler = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      console.log(`API URL: ${apiUrl}`);
      const response = await axios.get(`${apiUrl}/festival`);
      console.log(response.data);

      const filteredFestivals = response.data.festivals.filter(
        (festival) =>
          festival.categories && festival.categories.includes("페스티벌")
      );
      return filteredFestivals;
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

  const getEventClass = (festival) => {
    return "event-class";
  };

  return (
    <div className="festival-list">
      {festivalList.map((festival, index) => (
        <div key={index} className={getEventClass(festival)}>
          <Link to={`/festival/${festival.festivalId}`} key={index}>
            <PosterComponent
              posterSrc={festival.posterSrc}
              posterAlt={festival.posterAlt}
              festivalTitle={festival.festivalTitle}
              festivalLocation={festival.festivalLocation}
              festivalDate={`${festival.startDate} - ${festival.endDate}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FestivalListTab;
