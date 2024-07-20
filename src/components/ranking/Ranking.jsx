import React, { useState, useEffect } from 'react';
import { PosterComponent } from "../../features/list";
import './ranking.scss';

const Ranking = () => {

    const [festivals, setFestivals] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [category, setCategory] = useState('University');

    // useEffect(() => {
    //     const data = fetchFestivalData();
    //     setFestivals(data);
    //   }, []);
    
      const filteredFestivals = festivals.filter(festival => festival.categories === category);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 5) % filteredFestivals.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 5 + filteredFestivals.length) % filteredFestivals.length);
      };


    return (
        <div className="rank-container">
            <div className="rank-title-container">
                <p className="rank-title">실시간 랭킹</p>
            </div>
            <div className="rank-button-container">
                <button onClick={() => setCategory('University')} className="rank-button">대학축제</button>
                <button onClick={() => setCategory('Festival')} className="rank-button">페스티벌</button>
            </div>
            <div className="rank-slider-container">
                <div className="slider">
                {filteredFestivals.slice(currentIndex, currentIndex + 5).map((festival) => (
                    <PosterComponent key={festival.id} festival={festival} />
                ))}
                </div>
                <button onClick={handleNext} className="nav-button">Next</button>
            </div>
        </div>
    )
}

export default Ranking;