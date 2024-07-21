import React from 'react';

import '../styles/artist-pick.scss'
/**
 * 아티스트 선택 컴포넌트  
 * @returns 
 */

const ArtistPick = ({ artistSrc, artistAlt, artistName, isSelected, onClick }) => {
    return (
        <div className={`artistcomponent ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div className='form'>
                <div className='contents'>
                    <button className='artist-button'>
                        <img
                            className='image'
                            src={artistSrc}
                            alt={artistAlt || 'Artist Image'}
                        />
                        <span className='span'>{artistName}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArtistPick;