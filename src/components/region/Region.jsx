import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './region.scss';
import axios from 'axios';
import RegionComponent from '../../features/list/component/RegionComponent';

const Region = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [festivals, setFestivals] = useState([]);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("대학축제");
    
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
            const response = await axios.get(`${apiUrl}/festival?locality=${user.locality}&category=${category}`);
            console.log(user)
            console.log(response);

            setFestivals(response.data);
            console.log(festivals);
            } catch (error) {
            setError('Error fetching data');
            }
        };

        useEffect(() => {
            fetchData(category);
        }, [category]);



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
                        onClick={() => handleCategoryChange('대학축제')}
                        className={`category-button ${category === '대학축제' ? 'active' : ''}`}
                    >
                        대학축제
                    </button>
                    <button
                        onClick={() => handleCategoryChange('페스티벌')}
                        className={`category-button ${category === '페스티벌' ? 'active' : ''}`}
                    >
                        페스티벌
                    </button>
                </div>
                <div className="region-content-container">
                    {((festival) => (
                        <RegionComponent 
                        key={festival.id}
                        festival={festival}
                        posterSrc={festival.festivalThumnail}
                        posterAlt={festival.posterAlt}
                        festivalTitle={festival.festivalName}
                        festivalLocation={festival.geoLocationName}
                        festivalStartDate={festival.startDate}
                        festivalEndDate={festival.endDate}
                        />
                        ))}
                </div>
            </div>
        
        
        
    )
}

export default Region;