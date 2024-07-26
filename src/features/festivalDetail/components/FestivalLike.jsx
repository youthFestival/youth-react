import React from 'react';
import { ReactComponent as LikeIcon } from '../../../assets/festival-like.svg';

const FestivalLike = ({ festivalId }) => {

    const onClickLikeBtn = async () => {
        
    };

    return (
        <div className='festival-likes-container'>
            <LikeIcon 
                className='icon' 
                id='like-icon' 
                onClick={onClickLikeBtn} 
            /> 
            0
        </div>
    );
};

export default FestivalLike;