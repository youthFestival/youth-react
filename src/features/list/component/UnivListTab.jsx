import React from 'react';
import { PosterComponent } from '../index.js';

import '../styles/festivallist.scss'

/**
 * 대학축제 탭 메뉴 모든 컴포넌트
 * @returns 
 */

const UnivListTab = () => {
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

export default UnivListTab;