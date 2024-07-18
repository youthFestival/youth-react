import React, { useState, useEffect } from 'react';
import { PosterComponent } from '../index.js';

import '../styles/festivallist.scss'

/**
 * 대학축제 탭 메뉴 모든 컴포넌트
 * @returns 
 */

const UnivListTab = () => {

  const [univList, setUnivList] = useState([]);

  useEffect(() => {
      
      const fetchData = async () => {

          const data = [
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'Univ Festival Poster 1',
                        festivalLocation: 'Location 1',
                        festivalDate: 'Date 1'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'Univ Festival Poster 2',
                        festivalLocation: 'Location 2',
                        festivalDate: 'Date 2'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'Univ Festival Poster 3',
                        festivalLocation: 'Location 3',
                        festivalDate: 'Date 3'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'Univ Festival Poster 4',
                        festivalLocation: 'Location 4',
                        festivalDate: 'Date 4'
                    },
                    {
                        posterSrc: '',
                        posterAlt: '',
                        festivalTitle: 'Univ Festival Poster 5',
                        festivalLocation: 'Location 5',
                        festivalDate: 'Date 5'
                    },
                ];
                setUnivList(data);
            };

            fetchData();
        }, []);


    return (

        <div className='festival-list'>

            {univList.map((univ, index) => (
                <PosterComponent 
                    key={index}
                    posterSrc={univ.posterSrc}
                    posterAlt={univ.posterAlt}
                    festivalTitle={univ.festivalTitle}
                    festivalLocation={univ.festivalLocation}
                    festivalDate={univ.festivalDate}
                />
            ))}

        </div>
    );
};

export default UnivListTab;