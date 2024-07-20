import React, { useState, useEffect } from 'react';
import { PosterComponent } from "../../features/list";
import './ranking.scss';

const Ranking = () => {

    const [festivals, setFestivals] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [category, setCategory] = useState('University');

    // useEffect(() => {
    //     const data = fetchFestivalData();
    //     setFestivals(data);
    //   }, []);
    
    useEffect(() => {
      
        const fetchData = async () => {
  
            const data = [
                      {
                          posterSrc: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA1MjNfMTQz/MDAxNjg0ODE4NTQ3MTAy.Y2rBx7PVAVF7Wjc68EntiE8ABPdgUCqKTUGTRR0_EWMg.mbPE2BjIJCJ-gV46yeCBP2hqpnb7GoRmBXDZGpkw5kkg.PNG.snumall/image.png?type=w800',
                          posterAlt: '서울대',
                          festivalTitle: '서울대학교',
                          festivalLocation: '서울대학교 관악캠퍼스',
                          festivalDate: 'Date',
                          categories: 'University'
                      },
                      {
                          posterSrc: '',
                          posterAlt: '',
                          festivalTitle: 'UAll Festival Poster 2',
                          festivalLocation: 'Location 2',
                          festivalDate: 'Date 2',
                          categories: 'University'
                      },
                      {
                          posterSrc: '',
                          posterAlt: '',
                          festivalTitle: 'UAll Festival Poster 3',
                          festivalLocation: 'Location 3',
                          festivalDate: 'Date 3',
                          categories: 'University'
                      },
                      {
                          posterSrc: '',
                          posterAlt: '',
                          festivalTitle: 'UAll Festival Poster 4',
                          festivalLocation: 'Location 4',
                          festivalDate: 'Date 4',
                          categories: 'University'
                      },
                      {
                          posterSrc: '',
                          posterAlt: '',
                          festivalTitle: 'UAll Festival Poster 5',
                          festivalLocation: 'Location 5',
                          festivalDate: 'Date 5',
                          categories: 'University'
                      },
                      {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'UAll Festival Poster 6',
                        festivalLocation: 'Location 6',
                        festivalDate: 'Date 6',
                        categories: 'University'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'UAll Festival Poster 7',
                        festivalLocation: 'Location 7',
                        festivalDate: 'Date 7',
                        categories: 'University'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'UAll Festival Poster 8',
                        festivalLocation: 'Location 8',
                        festivalDate: 'Date 8',
                        categories: 'University'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'UAll Festival Poster 9',
                        festivalLocation: 'Location 9',
                        festivalDate: 'Date 9',
                        categories: 'University'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'All Festival Poster 10',
                        festivalLocation: 'Location 10',
                        festivalDate: 'Date 10',
                        categories: 'University'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24009022_p.gif',
                        posterAlt: '서울숲재즈페스티벌',
                        festivalTitle: '서울숲재즈페스티벌',
                        festivalLocation: '서울숲',
                        festivalDate: '2024.10.12 ~2024.10.13',
                        categories: 'Festival'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24005722_p.gif',
                        posterAlt: '2024 인천펜타포트 락 페스티벌',
                        festivalTitle: '2024 인천펜타포트 락 페스티벌',
                        festivalLocation: '송도달빛축제공원',
                        festivalDate: '2024.08.02 ~2024.08.04',
                        categories: 'Festival'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24010346_p.gif',
                        posterAlt: '대구 - 2024 THE HYPER DAY (더하이퍼데이)',
                        festivalTitle: '대구 - 2024 THE HYPER DAY (더하이퍼데이)',
                        festivalLocation: '대구스타디움 동편광장 일대',
                        festivalDate: '2024.10.12',
                        categories: 'Festival'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24009897_p.gif',
                        posterAlt: '2024 세종 센트럴파크 뮤직페스티벌',
                        festivalTitle: '2024 세종 센트럴파크 뮤직페스티벌',
                        festivalLocation: '세종 센트럴파크',
                        festivalDate: '2024.09.06 ~2024.09.08',
                        categories: 'Festival'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24009195_p.gif',
                        posterAlt: '2024 전주얼티밋뮤직페스티벌',
                        festivalTitle: '2024 전주얼티밋뮤직페스티벌',
                        festivalLocation: '전주종합경기장',
                        festivalDate: '2024.08.09 ~2024.08.11',
                        categories: 'Festival'
                    },
                    {
                      posterSrc: '',
                      posterAlt: '',
                      festivalTitle: 'All Festival Poster 6',
                      festivalLocation: 'Location 6',
                      festivalDate: 'Date 6',
                      categories: 'Festival'
                  },
                  {
                      posterSrc: '',
                      posterAlt: '',
                      festivalTitle: 'All Festival Poster 7',
                      festivalLocation: 'Location 7',
                      festivalDate: 'Date 7',
                      categories: 'Festival'
                  },
                  {
                      posterSrc: '',
                      posterAlt: '',
                      festivalTitle: 'All Festival Poster 8',
                      festivalLocation: 'Location 8',
                      festivalDate: 'Date 8',
                      categories: 'Festival'
                  },
                  {
                      posterSrc: '',
                      posterAlt: '',
                      festivalTitle: 'All Festival Poster 9',
                      festivalLocation: 'Location 9',
                      festivalDate: 'Date 9',
                      categories: 'Festival'
                  },
                  {
                      posterSrc: '',
                      posterAlt: '',
                      festivalTitle: 'All Festival Poster 10',
                      festivalLocation: 'Location 10',
                      festivalDate: 'Date 10',
                      categories: 'Festival'
                  },
                  ];
                  setFestivals(data);
              };
  
              fetchData();
          }, []);
    
      const filteredFestivals = festivals.filter(festival => festival.categories === category);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 5) % filteredFestivals.length);
      };
    
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
                <div className="slider">
                {filteredFestivals.slice(currentIndex, currentIndex + 5).map((festival) => (
                    // <PosterComponent key={festival.id} festival={festival} />
                    <PosterComponent 
                    key={festival.id}
                    festival={festival}
                    posterSrc={festival.posterSrc}
                    posterAlt={festival.posterAlt}
                    festivalTitle={festival.festivalTitle}
                    festivalLocation={festival.festivalLocation}
                    festivalDate={festival.festivalDate}
                />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Ranking;