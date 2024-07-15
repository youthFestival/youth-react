// src/features/festivalDetail/components/FestivalRecommendations.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-detail.css";

const FestivalRecommendations = ({ festivalId }) => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}/recommendations?limit=3`);
                setRecommendations(response.data.recommendations);
            } catch (error) {
                setError('추천 축제 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [festivalId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="festival-recommendations-container">
            <div className="recommendations-header">
                <h2>사용자 추천 축제</h2>
            </div>
            <div className="recommendations-list">
                {recommendations.map((rec, index) => (
                    <div key={index} className="recommendation-item">
                        <img src={rec.imgUrl} alt={rec.name} className="recommendation-img"/>
                        <p className="recommendation-name">{rec.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FestivalRecommendations;
