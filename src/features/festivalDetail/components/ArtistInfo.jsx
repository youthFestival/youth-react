import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-detail.css";
import leftArrow from '../icons/artist-left-arrow.svg';
import rightArrow from '../icons/artist-right-arrow.svg';

const ArtistInfo = ({ festivalId }) => {
    const [lineUp, setLineUp] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchLineUp = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}/line-ups`);
                setLineUp(response.data.lineUp);
            } catch (error) {
                console.error('Failed to fetch lineup', error);
                setError('아티스트 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchLineUp();
    }, [festivalId]);

    const scroll = (direction) => {
        if (direction === 'left') {
            setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else {
            setStartIndex((prevIndex) => Math.min(prevIndex + 1, lineUp.length - itemsPerPage));
        }
    };

    const currentLineUp = lineUp.slice(startIndex, startIndex + itemsPerPage);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="artist-info-container">
            <div className='artist-description-container'>
                <h2 className='artist-description'>출연진</h2>
            </div>
            <div className="artist-list-wrapper">
                <button className="carousel-control-prev" onClick={() => scroll('left')}>
                    <img src={leftArrow} alt="Previous" className='artistInfo-btn-image'/>
                </button>
                <div className="artist-list">
                    {currentLineUp.map((artist, index) => (
                        <div key={index} className="artist-item">
                            <img src={artist.lineUpUrls} alt={artist.lineUpName} className='artist-img' />
                            <span className='artist-name'>{artist.lineUpName}</span>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-next" onClick={() => scroll('right')}>
                    <img src={rightArrow} alt="Next" className='artistInfo-btn-image'/>
                </button>
            </div>
        </div>
    );
};

export default ArtistInfo;