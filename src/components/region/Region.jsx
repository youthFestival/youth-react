import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './region.scss';
import axios from 'axios';
import RegionComponent from '../../features/list/component/RegionComponent';
import { formatDay1, formatDay2 } from '../../utils/util';

const Region = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [festivals, setFestivals] = useState([]);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("대학축제");

    const navigate = useNavigate();
    
    
    const fetchData = async (category) => {
        try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${apiUrl}/festival?locality=${user.locality}&category=${category}`);
        console.log(response.data);
        const festivals = response.data.festivals.slice(0, 5);

        setFestivals(festivals);
        console.log(festivals);

        } catch (error) {
            setError('Error fetching data');
        }
    };

    const handleDetailPage = ({ festival }) => {
        navigate('/festivalDetail', {
            state: {

            }
        })
    }

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
                    {festivals.map((festival) => (
                        <RegionComponent 
                        onClick={() => handleDetailPage({ festival })}
                        key={festival.id}
                        festival={festival}
                        posterSrc={festival.festivalThumbnail}
                        posterAlt={festival.posterAlt}
                        festivalTitle={festival.festivalName}
                        festivalLocation={festival.geoLocationName}
                        festivalStartDate={formatDay1(festival.startDate)}
                        festivalEndDate={formatDay2(festival.endDate)}
                        />
                        ))}
                </div>
            </div>
        
        
        
    )
}

export default Region;