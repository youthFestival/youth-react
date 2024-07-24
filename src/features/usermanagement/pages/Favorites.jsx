import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PosterComponent from '../../list/component/PosterComponent';
import '../styles/favorites.scss'

const Favorites = () => {
    const [favoritePoster, setFavoritePoster] = useState([]);

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
            setFavoritePoster(data);
        };
        fetchData();
    }, []);

    return (
        <div className='favorites'>

                    <div className="saved-artists">
                    {favoritePoster.map((favorite, index) => (
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
        </div>
    );
};

export default Favorites;
