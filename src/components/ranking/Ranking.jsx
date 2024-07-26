import React, { useState, useEffect } from 'react';
import './ranking.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import axios from 'axios';
import MainPosterComponent from '../../features/list/component/MainPosterComponent';

const Ranking = () => {

    const [error, setError] = useState(null);
    const [festivals, setFestivals] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [category, setCategory] = useState('University');
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
    
    const fetchData = async (category) => {
        try {
          const apiUrl = process.env.REACT_APP_API_URL;
          const response = await axios.get(`${apiUrl}/festival`, { params: { category } });
          let data = Array.isArray(response.data) ? response.data : [];
          // viewCount 기준으로 내림차순 정렬 후 상위 10개만 선택
          data = data.sort((a, b) => b.viewCount - a.viewCount).slice(0, 10);
          setFestivals(data);
        } catch (error) {
          setError('Error fetching data');
        }
      };
    

    useEffect(() => {
        fetchData(category);
    }, [category]);

    const filteredFestivals = festivals.filter(festival => festival.type === category);

      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 5 + filteredFestivals.length) % filteredFestivals.length);
      };

      const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setCurrentIndex(0); // 인덱스 초기화
      };


    return (
        <div className="rank-container">
            <div className="rank-title-container">
                <p className="rank-title">실시간 랭킹</p>
            </div>
            <div className="rank-button-container">
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
            <div className="rank-slider-container">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    slidesPerGroup={5} // 한 번에 5개 슬라이드씩 이동
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    className="swiper-container"
                > 
                    
                {filteredFestivals.slice(currentIndex, currentIndex + 5).map((festival, index) => (
                    // <PosterComponent key={festival.id} festival={festival} />
                    <MainPosterComponent 
                    key={festival.id}
                    festival={festival}
                    posterSrc={festival.posterSrc}
                    posterAlt={festival.posterAlt}
                    festivalTitle={festival.festivalTitle}
                    festivalLocation={festival.festivalLocation}
                    festivalDate={festival.festivalDate}
                    index={numbers[(currentNumberIndex + index) % numbers.length]}
                    />
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Ranking;