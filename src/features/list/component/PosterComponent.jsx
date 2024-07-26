import React from 'react';

import '../styles/poster-component.scss'

/**
 * 포스터 컴포넌트  
 * @returns 
 */

const PosterComponent = ({ 
        posterSrc, 
        posterAlt, 
        festivalTitle, 
        festivalLocation, 
        festivalDate, 
        festivalOnclick,  
        showFavoriteIcon = true }) => {

    return (
        <div className='postercomponent'>  
                <div className='form'>
                    <div className='contents'>

                        {showFavoriteIcon && (
                                <img 
                                    className='favorite'
                                    src='/icons/favorite.png'
                                    alt='찜 하트 아이콘'
                                />
                            )
                        }
                        
                        <img 
                            className='image'
                            src={posterSrc}
                            alt={posterAlt}
                        />
  
                        <div class="span-container" onClick={festivalOnclick}>
                            <span className='span1'>{festivalTitle}</span>
                            <span className='span2'>{festivalLocation}</span>
                            <span className='span2'>{festivalDate}</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default PosterComponent;