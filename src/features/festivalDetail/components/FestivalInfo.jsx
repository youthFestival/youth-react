import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-detail.css";

const FestivalInfo = ({ festivalId }) => {
    const [festival, setFestival] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFestival = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}`);
                setFestival(response.data.info);
            } catch (error) {
                setError('축제 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchFestival();
    }, [festivalId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>{festival.festivalName}</h1>
            <img src={festival.festivalThumbnail} alt={festival.festivalName} />
            <p>{festival.description}</p>
            <p>기간: {festival.startDate} ~ {festival.endDate}</p>
            <p>장르: {festival.category}</p>
            <p>주최자: {festival.organizer}</p>
            <p>최소 관람 연령: {festival.minAge}</p>
            <p>전화번호: {festival.tel}</p>
            <a href={festival.organizerUrl}>공식 홈페이지</a>
        </div>
    );
};

export default FestivalInfo;