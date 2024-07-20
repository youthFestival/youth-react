import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import {ArtistPick} from '../index.js';
import '../styles/edit-artist.scss'

const EditArtist = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate.push(`/results?query=${searchTerm}`);
        // // NEW_SEARCH: 새로운 검색 결과를 상태에 저장합니다.
        // dispatch({ type: "NEW_SEARCH", payload: { festivalName } });
        // // state에 정보를 담아 /list 화면이동한다. 
        // navigate("/list", { state: { festivalName } });
    };

    const [artistList, setArtistList] = useState([]);

    useEffect(() => {
      
      const fetchData = async () => {

          const data = [
                    {
                        artistSrc: '/mock_artist_profile/coogie_profile.png',
                        artistAlt: '쿠기 프로필',
                        artistName: '쿠기',
                    },
                    {
                        artistSrc: '/mock_artist_profile/coogie_profile.png',
                        artistAlt: '기 프로필',
                        artistName: '쿠기',
                    },
                    {
                        artistSrc: '/mock_artist_profile/coogie_profile.png',
                        artistAlt: '',
                        artistName: '쿠기',
                    },
                    {
                        artistSrc: '/mock_artist_profile/coogie_profile.png',
                        artistAlt: '',
                        artistName: '쿠기',
                    },
                    {
                        artistSrc: '/mock_artist_profile/coogie_profile.png',
                        artistAlt: '',
                        artistName: '쿠기',
                    },
                    {
                        artistSrc: '/mock_artist_profile/coogie_profile.png',
                        artistAlt: '',
                        artistName: '쿠기',
                    },
                ];
                setArtistList(data);
            };

            fetchData();
        }, []);


    return (
        <div className='search-list'>

            <div className='search-form'>
                <input
                        type="text"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="아티스트를 검색해 보세요!"
                />
                <IoIosSearch className="search-button" onClick={handleSearch}/>
            </div>

            <div className='artist-container'>
                {artistList.map((artist, index) => (
                    <ArtistPick 
                        key={index}
                        posterSrc={artist.artistSrc}
                        artistAlt={artist.artistAlt}
                        festivalTitle={artist.artistName}
                    />
                ))}
            </div>
        </div>
    );
};

export default EditArtist;
