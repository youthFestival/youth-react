import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FestivalLike = ({ festivalId }) => {
    const { user } = useContext(AuthContext);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        const fetchLikeStatus = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festival/${festivalId}/like`, {
                    withCredentials: true,
                });

                if (user && user.userId) {
                    const isLiked = response.data.favoriteUser.some(favoriteUser => favoriteUser.userId === user.userId);
                    setLiked(isLiked);
                }
                setLikeCount(response.data.likeCount);
            } catch (error) {
                console.error('찜 상태를 가져오는데 실패했습니다.', error);
            }
        };

        fetchLikeStatus();
    }, [festivalId, user]);

    const onClickLikeBtn = async () => {
        if (!user) {
            Swal.fire({
                title: '로그인이 필요합니다.',
                text: '로그인 페이지로 이동합니다.',
                icon: 'warning',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            }).then(() => {
                window.location.href = '/login';
            });
            return;
        }

        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.put(`${apiUrl}/festival/${festivalId}/like`, {}, { withCredentials: true });
            setLiked(response.data.message.includes('취소') ? false : true);
            setLikeCount(response.data.likeCount);

            Swal.fire({
                title: response.data.message,
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
            {liked && user ? (
                <FavoriteIcon style={{ color: 'red', cursor: 'pointer' }} onClick={onClickLikeBtn} />
            ) : (
                <FavoriteBorderIcon style={{ color: 'black', cursor: 'pointer' }} onClick={onClickLikeBtn} />
            )}
            <span className='festival-likeCount'>{likeCount}</span>
        </div>
    );
};

export default FestivalLike;