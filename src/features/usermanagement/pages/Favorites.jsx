import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PosterComponent from '../../list/component/PosterComponent';
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
        <div className='favorites-menu'>
                <div className='favorites'>
                    {favoriteList.map((favorite, index) => (
                        <div key={index} className='component'>
                            <PosterComponent
                                posterSrc={favorite.posterSrc}
                                posterAlt={favorite.posterAlt}
                                festivalTitle={favorite.festivalTitle}
                                festivalLocation={favorite.festivalLocation}
                                festivalDate={`${favorite.startDate} - ${favorite.endDate}`}
                            />
                            {/* {(today === new Date(festival.startDate).getDate() || (today === new Date(festival.endDate).getDate() && isFirstColumn)) && (
                                <Link to={`/festivaldetail/${favorite.id}`} className="favorite-link">{festival.name}</Link>
                            )} */}
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
