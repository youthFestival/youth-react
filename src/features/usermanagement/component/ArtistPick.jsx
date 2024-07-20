import React from 'react';

import '../styles/artist-pick.scss'
/**
 * 아티스트 선택 컴포넌트  
 * @returns 
 */

const ArtistPick = ({ artistSrc, artistAlt, artistName }) => {

    return (
        <div className='artistcomponent'>  
                <div className='form'>
                    <div className='contents'>
                        
                        <img 
                            className='image'
                            src={artistSrc}
                            alt={artistAlt}
                        />
                        <button className='artist-button'>
                            <span className='span1'>{artistName}</span>
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default ArtistPick;