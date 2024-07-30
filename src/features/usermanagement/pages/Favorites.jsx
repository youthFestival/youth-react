import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PosterComponent from '../../list/component/PosterComponent';
import { Link } from 'react-router-dom';
import { formatDay1, formatDay2 } from '../../../utils/util';
import { AuthContext } from '../../../contexts/AuthContext';

import '../styles/favorites.scss'
const Favorites = (festivalId) => {
    const [page, setPage] = useState(1);
    const [totalFavorites, setTotalFavorites] = useState(0);
    const [favoriteList, setFavoriteList] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    const { user } = useContext(AuthContext);

    console.log(user)
    
    const favoriteGetHandler = async() => {
        try {
            if (user && user.id) {
                const response = await axios.get(`${apiUrl}/festival?isFavorite=true`);
                return response.data.favorites || [];
            }
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await favoriteGetHandler();
            const pageSize = 8;
            const offset = (page - 1) * pageSize;
            const paginatedData = data.slice(offset, offset + pageSize);
            setFavoriteList(paginatedData);
            setTotalFavorites(data.length);
        };
        fetchData();
    }, [page]);


    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
            <div className='favorites-container'>
                
                    <div className='favorites'>
                        {favoriteList.map((favorite, index) => (
                            <div key={index} className='component'>
                                <Link to={`/festivaldetail/${favorite.id}`} key={index}>
                                    <PosterComponent
                                        showFavoriteIcon={false}
                                        posterSrc={favorite.festivalThumbnail}
                                        posterAlt={favorite.festivalName}
                                        festivalTitle={favorite.geoLocationName}
                                        startDate={formatDay1(favorite.startDate)}
                                        endDate={formatDay2(favorite.endDate)}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='pagination'>
                        <button className='prev-button' onClick={handlePreviousPage} disabled={page === 1}>
                            이전
                        </button>
                        <span>{page}</span>
                        <button className='next-button' onClick={handleNextPage} disabled={page * 8 >= totalFavorites}>
                            다음
                        </button>
                    </div>
            </div>
    );
};

export default Favorites;
