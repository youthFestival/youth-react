import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PosterComponent from '../../list/component/PosterComponent';
import { Link } from 'react-router-dom';
import '../styles/favorites.scss'

const Favorites = () => {
    const [page, setPage] = useState(1);
    const [totalFavorites, setTotalFavorites] = useState(0);
    const [favoriteList, setFavoriteList] = useState([]);

    const favoriteGetHandler = async() => {
        try{
            
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(`API URL: ${apiUrl}`)
            const response = await axios.get(`${apiUrl}/favorite`);
            console.log(response.data)
            return response.data.favorites;
        } catch(err){
            console.log(err);
            return[];
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
                                <Link to={`/festival/${favorite.festivalId}`} key={index}>
                                    <PosterComponent
                                        showFavoriteIcon={false}
                                        posterSrc={favorite.posterSrc}
                                        posterAlt={favorite.posterAlt}
                                        festivalTitle={favorite.festivalTitle}
                                        festivalLocation={favorite.festivalLocation}
                                        festivalDate={`${favorite.startDate} - ${favorite.endDate}`}
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
