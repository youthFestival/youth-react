import React, { useState, useEffect } from 'react';
import './region.scss';
import axios from 'axios';
import RegionComponent from '../../features/list/component/RegionComponent';

const Region = () => {
    const [festivals, setFestivals] = useState([]);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('University');
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const apiUrl = process.env.REACT_APP_API_URL;
    //             const data = await axios.get(`${apiUrl}/festival?locality=user.locality`);
    //             setFestivals(data);
    //             console.log(data);
    //         } catch (error) {
    //             setError('Error fetching data:', error);
    //         } 
    //     };

    //     fetchData();
    // }, []);

    const fetchData = async (category) => {
        try {
          const apiUrl = process.env.REACT_APP_API_URL;
          const response = await axios.get(`${apiUrl}/festival?locality=user.locality`, { params: { category } });
          setFestivals(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
          setError('Error fetching data');
        }
    };
    
    useEffect(() => {
        fetchData(category);
    }, [category]);

    const filteredFestivals = festivals.filter(festival => festival.type === category);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };


    return (
        
            <div className="region-container">
                
                <div className="region-title-container">
                    <p className="region-title">내 근처 축제 Pick!</p>
                </div>
                <div className="region-button-container">
                    <button
                        onClick={() => handleCategoryChange('University')}
                        className={`category-button ${category === 'University' ? 'active' : ''}`}
                    >
                        대학축제
                    </button>
                    <button
                        onClick={() => handleCategoryChange('Festival')}
                        className={`category-button ${category === 'Festival' ? 'active' : ''}`}
                    >
                        페스티벌
                    </button>
                </div>
                <div className="region-content-container">
                    {filteredFestivals.map((festival) => (
                        <RegionComponent 
                        
                        key={festival.id}
                        festival={festival}
                        posterSrc={festival.posterSrc}
                        posterAlt={festival.posterAlt}
                        festivalTitle={festival.festivalTitle}
                        festivalLocation={festival.festivalLocation}
                        festivalDate={festival.festivalDate}
                        />
                        ))}
                </div>
            </div>
        
        
        
    )
}

export default Region;