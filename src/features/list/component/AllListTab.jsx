import React, { useState, useEffect } from 'react';
import { PosterComponent } from '../index.js';

import '../styles/festival-list.scss'

/**
 * 전체 탭 메뉴 모든 컴포넌트
 * @returns 
 */

const AllListTab = () => {

  const [allList, setAllList] = useState([]);

  useEffect(() => {
      
      const fetchData = async () => {

          const data = [
                    {
                        posterSrc: '/mockposter/khu_poster.png',
                        posterAlt: '경희대학교 서울캠퍼스 축제 포스터',
                        festivalTitle: '경희대학교 서울캠퍼스 봄 대동제',
                        festivalLocation: '경희대학교',
                        festivalDate: 'startDate ~ endDate'
                    },
                    {
                        posterSrc: '/mockposter/seoulpark.png',
                        posterAlt: '',
                        festivalTitle: '서울파크 뮤직 페스티벌',
                        festivalLocation: '서울 올림픽 공원 88잔디마당, 88호수수변무대',
                        festivalDate: 'startDate ~ endDate'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'All Festival Poster 3',
                        festivalLocation: 'Location 3',
                        festivalDate: 'Date 3'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'All Festival Poster 4',
                        festivalLocation: 'Location 4',
                        festivalDate: 'Date 4'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'All Festival Poster 5',
                        festivalLocation: 'Location 5',
                        festivalDate: 'Date 5'
                    },
                ];
                setAllList(data);
            };

            fetchData();
        }, []);

    return (
        <div className='festival-list'>

            {allList.map((all, index) => (
                <PosterComponent 
                    key={index}
                    posterSrc={all.posterSrc}
                    posterAlt={all.posterAlt}
                    festivalTitle={all.festivalTitle}
                    festivalLocation={all.festivalLocation}
                    festivalDate={all.festivalDate}
                />
            ))}
            
        </div>
    );
};

export default AllListTab;