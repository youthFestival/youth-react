import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ranking.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import axios from 'axios';
import MainPosterComponent from '../../features/list/component/MainPosterComponent';
import { formatDay1, formatDay2 } from '../../utils/util';

const Ranking = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
    const [error, setError] = useState(null);
    const [festivals, setFestivals] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [category, setCategory] = useState("대학축제");
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
    
    
    const fetchData = async (category) => {
        try {
          const apiUrl = process.env.REACT_APP_API_URL;
          const response = await axios.get(`${apiUrl}/festival?category=${category}`);
          console.log(response);
        //   let data = Array.isArray(response.data) ? response.data : [];
          // viewCount 기준으로 내림차순 정렬 후 상위 10개만 선택
          const festivals = response.data.festivals.sort((a, b) => b.viewCount - a.viewCount).slice(0, 10);
          console.log(festivals);
          setFestivals(festivals);
        } catch (error) {
          setError('Error fetching data');
        }
      };
    

    useEffect(() => {
        fetchData(category);
    }, [category]);

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
            <div className="rank-slider-container">
        <Swiper
          slidesPerView={5}
          slidesPerGroup={1} // 한 번에 1개 슬라이드씩 이동
          navigation={true}
          loop={true}
          modules={[FreeMode, Navigation, Thumbs]}
          onSlideChange={(swiper) => setCurrentIndex(swiper.currentIndex)}
          className="swiper-container"
        >
          {festivals.map((festival, index) => (
            <SwiperSlide key={festival.id}>
              <Link to={`/festivaldetail/${festival.id}`} key={festival.id} className='link'>
                <MainPosterComponent
                  className="component"
                  festival={festival}
                  posterSrc={festival.festivalThumbnail}
                  posterAlt={festival.posterAlt}
                  festivalTitle={festival.festivalName}
                  festivalLocation={festival.geoLocationName}
                  festivalStartDate={formatDay1(festival.startDate)}
                  festivalEndDate={formatDay2(festival.endDate)}
                  index={numbers[(currentNumberIndex + index) % numbers.length]}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
            {/* <div className="rank-slider-container">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    slidesPerGroup={1} // 한 번에 5개 슬라이드씩 이동
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    className="swiper-container"
                > 
                    
                {festivals.slice(currentIndex, currentIndex + 5).map((festival, index) => (

                    <MainPosterComponent 
                    className="component"
                    key={festival.id}
                    festival={festival}
                    posterSrc={festival.festivalThumbnail}
                    posterAlt={festival.posterAlt}
                    festivalTitle={festival.festivalName}
                    festivalLocation={festival.geoLocationName}
                    festivalStartDate={formatDay1(festival.startDate)}
                    festivalEndDate={formatDay2(festival.endDate)}
                    index={numbers[(currentNumberIndex + index) % numbers.length]}
                    />
                    ))}
                </Swiper>
            </div> */}
        </div>
    )
}

export default Ranking;
