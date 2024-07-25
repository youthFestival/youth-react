import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../styles/festival-info.css";
import FestivalLike from './FestivalLike';
import { ReactComponent as HomepageIcon } from '../../../assets/festival-homepage.svg';
import { ReactComponent as ShareIcon } from '../../../assets/festival-share.svg';
import { ReactComponent as NextIcon } from '../../../assets/next-icon.svg';

const FestivalInfo = ({ festivalId, onScrollToMap }) => {
    const [festival, setFestival] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFestival = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}`);
                setFestival(response.data.info);
            } catch (error) {
                setError('축제 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchFestival();
    }, [festivalId]);

    const calculateDDay = (startDate) => {
        const today = new Date();
        const start = new Date(startDate);
        const timeDiff = start - today;
        const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return dayDiff;
    };

    const formatMinAge = (minAge) => {
        return (minAge === 0 || minAge === null) ? "전체관람가" : `${minAge}세 이상`;
    };

    const copyUrl = async () => {
        try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            Swal.fire({
                title: '성공!',
                text: 'URL이 클립보드에 복사되었습니다.',
                icon: 'success',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            });
        } catch (err) {
            Swal.fire({
                title: '실패!',
                text: 'URL 복사에 실패했습니다.',
                icon: 'error',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            });
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div id='festival-info'>
            <div className='festival-image-area'>
                <img className='festival-thumbnail' src={festival.festivalThumbnail} alt={festival.festivalName} />
            </div>
            <div className='festival-details'>
                <div className='festival-header'>
                    <span className='d-day'>D-{calculateDDay(festival.startDate)}</span>
                    <h1 className='festival-name'>{festival.festivalName}</h1>
                    <p className='festival-description'>{festival.description}</p>
                </div>
                <div className='festival-main-info'>
                    <div className='festival-meta'>
                        <p className='festival-dates'><span className='festival-info-text'>공연기간</span>{festival.startDate} ~ {festival.endDate}</p>
                        <p className='festival-showtime'><span className='festival-info-text'>관람시간</span>{festival.showTime}분</p>
                        <p className='festival-category'><span className='festival-info-text-category'>장르</span>{festival.category}</p>
                    </div>
                    <div className='festival-additional-info'>
                        <p className='festival-organizer'><span className='festival-info-text-organizer'>공연장</span><span className='festival-info-value'>{festival.organizer}</span><NextIcon onClick={onScrollToMap} className="scroll-to-map-icon" /></p>
                        <p className='festival-min-age'><span className='festival-info-text'>관람등급</span>{formatMinAge(festival.minAge)}</p>
                        <p className='festival-tel'><span className='festival-info-text'>전화번호</span>{festival.tel}</p>
                    </div>
                </div>
                <div className='festival-actions'>
                    <button className='festival-button' id='festival-homepage-btn'>
                        <a className='festival-link' href={festival.organizerUrl}>공식 홈페이지</a>
                        <HomepageIcon className='icon' />
                    </button>
                    <button className='festival-button' id='festival-share-btn' onClick={copyUrl}>
                        공유하기
                        <ShareIcon className='icon' id='share-icon' />
                    </button>
                    <span className='festival-likes'>
                        <FestivalLike festivalId={festivalId}/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FestivalInfo;