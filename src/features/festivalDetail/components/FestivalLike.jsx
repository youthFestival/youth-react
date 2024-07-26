import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as LikeIcon } from '../../../assets/festival-like.svg';
import Swal from 'sweetalert2';

const FestivalLike = ({ festivalId }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        const fetchLikeStatus = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/user/festival/like/status`, {
                    params: { festivalId },
                    withCredentials: true,
                });
                setLiked(response.data.liked);
                setLikeCount(response.data.likeCount);
            } catch (error) {
                console.error('찜 상태를 가져오는데 실패했습니다.', error);
            }
        };

        fetchLikeStatus();
    }, [festivalId]);

    const onClickLikeBtn = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.post(`${apiUrl}/user/festival/like`, { festivalId }, { withCredentials: true });
            setLiked(response.data.liked);
            setLikeCount(response.data.likeCount);

            Swal.fire({
                title: response.data.liked ? '찜했습니다!' : '찜 해제했습니다!',
                icon: 'success',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button',
                },
            });
        } catch (error) {
            console.error('찜 요청에 실패했습니다.', error);
            Swal.fire({
                title: '오류!',
                text: '찜 요청을 처리하는데 실패했습니다.',
                icon: 'error',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button',
                },
            });
        }
    };

    return (
        <div className='festival-likes-container'>
            <LikeIcon 
                className='icon' 
                id='like-icon' 
                onClick={onClickLikeBtn} 
                fill={liked ? 'red' : 'white'}
                stroke={liked ? 'red' : 'black'}
            /> 
            {likeCount}
        </div>
    );
};

export default FestivalLike;