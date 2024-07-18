import React from 'react';
import { PosterComponent } from '../index.js';

import '../styles/festivallist.scss'

/**
 * 전체 탭 메뉴 모든 컴포넌트
 * @returns 
 */

const AllListTab = () => {
    return (
        <div className='festival-list'>

            <PosterComponent 
              posterSrc=''
              posterAlt=''
              festivalTitle='축제이름'
              festivalLocation='축제장소'
              festivalDate='축제일시'
            />

            <PosterComponent 
              posterSrc=''
              posterAlt=''
              festivalTitle='축제이름'
              festivalLocation='축제장소'
              festivalDate='축제일시'
            />
            
        </div>
    );
};

export default AllListTab;