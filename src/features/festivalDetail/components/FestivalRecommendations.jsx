import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/festival-recommendation.css";
import Spinner from '../../../components/spinner/Spinner';

const FestivalRecommendations = ({ festivalId }) => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocationAndRecommendations = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const festivalResponse = await axios.get(`${apiUrl}/festival/${festivalId}`);
                const festivalData = festivalResponse.data;

                const recommendationsResponse = await axios.get(`${apiUrl}/festival?locality=${festivalData.locality}`);
                const allFestivals = recommendationsResponse.data.festivals;

                const filteredFestivals = allFestivals.filter(festival => festival.id.toString() !== festivalId.toString());

                const randomFestivals = filteredFestivals.sort(() => 0.5 - Math.random()).slice(0, 3);

                setRecommendations(randomFestivals);
            } catch (error) {
                setError('추천 축제 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchLocationAndRecommendations();
    }, [festivalId]);

    if (loading) return <Spinner />;
    if (error) return <p className='festival-message'>{error}</p>;

    const filledRecommendations = [...recommendations];
    while (filledRecommendations.length < 3) {
        filledRecommendations.push(null);
    }

    return (
        <div className="festival-recommendations-container">
            <div className="recommendations-header">
                <h2>사용자 추천 축제</h2>
            </div>
            <div className="recommendations-list">
                {filledRecommendations.map((rec, index) => (
                    <div key={index} className="recommendation-item">
                        {rec ? (
                            <Link to={`/festivaldetail/${rec.id}`}>
                                <img src={rec.festivalThumbnail} alt={rec.festivalName} className="recommendation-img" />
                                <p className="recommendation-name">{rec.festivalName}</p>
                            </Link>
                        ) : (
                            <div className="recommendation-placeholder" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FestivalRecommendations;