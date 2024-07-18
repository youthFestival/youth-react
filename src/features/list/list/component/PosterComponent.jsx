import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = () => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/festivals');
        setFestivals(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFestivals();
  }, []);

  return (
    <div>
      {festivals.map(festival => (
        <div key={festival._id} className="list-container">
          <Link to={`/festivals/${festival._id}`}>
            <img src={festival.image} className="list-image" alt={festival.image} />
          </Link>
          <h2 className="list-name">
            <Link to={`/festivals/${festival._id}`}>
              {festival.name}
            </Link>
          </h2>
          <p className="list-location">
            <Link to={`/festivals/${festival._id}`}>
              {festival.location}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default List;
