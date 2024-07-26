import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as LikeIcon } from '../../../assets/festival-like.svg';

const FestivalLike = ({ festivalId }) => {
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLike = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festival/${festivalId}/like`);
                setLikeCount(response.data.likeCount);
                setLiked(response.data.liked);
            } catch (error) {
                setError('축제 찜 갯수를 가져오는데 실패했습니다.');
            } 
        };

        fetchLike();
    }, [festivalId]);

    const onClickLikeBtn = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const method = liked ? 'DELETE' : 'PUT';
            const response = await axios({
                method,
                url: `${apiUrl}/festival/${festivalId}/like`
            });
            setLikeCount(response.data.likeCount);
            setLiked(response.data.liked);
        } catch (error) {
            setError(liked ? '찜을 취소하는데 실패했습니다.' : '축제를 찜하는데 실패했습니다.');
        }
    };

    return (
        <div className='festival-likes-container'>
            <LikeIcon 
                className='icon' 
                id='like-icon' 
                onClick={onClickLikeBtn} 
                style={{ fill: liked ? 'red' : 'white' }} 
            /> 
            {likeCount}
            {error && <p>{error}</p>}
        </div>
    );
};

export default FestivalLike;