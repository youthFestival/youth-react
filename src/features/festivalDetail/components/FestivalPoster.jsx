import React, { useEffect, useState } from 'react';
import "../styles/festival-poster-picture.css";
import axios from 'axios';
import Spinner from '../../../components/spinner/Spinner';

const FestivalPoster = ({ festivalId }) => {
    const [posterImage, setPosterImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPoster = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festival/${festivalId}/poster`);
                setPosterImage(response.data.posterImage);
            } catch (error) {
                setError('포스터 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchPoster();
    }, [festivalId]);

    if (loading) return <Spinner/>;
    if (error) return <p>{error}</p>;

    return (
        <div className="festival-poster-container">
            <img src={posterImage} alt="Festival Poster" className="festival-poster-image" />
        </div>
    );
};

export default FestivalPoster;