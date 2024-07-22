import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-poster-picture.css";
import leftArrow from '../icons/artist-left-arrow.svg';
import rightArrow from '../icons/artist-right-arrow.svg';

const FestivalPictures = ({ festivalId }) => {
    const [pictures, setPictures] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPictures = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}/pictures`);
                setPictures(response.data.pictures);
            } catch (error) {
                setError('사진 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchPictures();
    }, [festivalId]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    const handleNext = () => {
        if (currentIndex < pictures.length - 3) {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pictures.length - 3));
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const currentPictures = pictures.slice(currentIndex, currentIndex + 3);

    return (
        <div className="festival-pictures-container">
            <div className="pictures-header">
                <h2 className='pictures-header-text'>사진</h2>
            </div>
            <div className="pictures-slider">
                <button 
                    className="pictures-carousel-control-prev" 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                >
                    <img src={leftArrow} alt="Previous" className='pictures-control-btn' />
                </button>
                <div className="pictures-list">
                    {currentPictures.map((picture, index) => (
                        <img key={index} src={picture.picture} alt={`Festival ${currentIndex + index + 1}`} className="festival-picture" />
                    ))}
                </div>
                <button 
                    className="pictures-carousel-control-next" 
                    onClick={handleNext} 
                    disabled={currentIndex >= pictures.length - 3}
                >
                    <img src={rightArrow} alt="Next" className='pictures-control-btn' />
                </button>
            </div>
        </div>
    );
};

export default FestivalPictures;
