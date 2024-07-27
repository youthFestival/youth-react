import axios from "axios";
import PosterComponent from "./PosterComponent";
import { Link, useParams } from "react-router-dom";
import "../styles/festival-list.scss";
import useFetch from "../../../hooks/useFetch";
import { withParams } from "../../../utils/util";
import { useEffect } from "react";

const FestivalListTab = () => {
  const query = useParams()["query"] || null;
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/festival${withParams({
      search: query,
    })}`
  );

  const getEventClass = (festival) => {
    return "event-class";
  };

  useEffect(() => {
    console.log(data?.festivals);
  }, [data]);

  return (
    <div className="festival-list">
      {data?.festivals?.map((festival, index) => {
        console.log({ ...festival });
        return (
          <div key={index} className={getEventClass(festival)}>
            <Link to={`/festival/${festival.festivalId}`} key={index}>
              <PosterComponent
                posterSrc={festival.festivalThumbnail}
                posterAlt={festival.festivalName}
                festivalTitle={festival.festivalName}
                festivalLocation={festival.geoLocationName}
                startDate={festival.startDate}
                endDate={festival.endDate}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FestivalListTab;
