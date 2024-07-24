import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { ArtistPick } from '../index.js';
import '../styles/edit-artist.scss';
import axios from 'axios';

/**
 * 내 아티스트 수정 리스트 컴포넌트 
 * @returns 
 */
const EditArtist = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [artistList, setArtistList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalArtists, setTotalArtists] = useState(0);
    const [savedArtists, setSavedArtists] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/artist?${searchTerm}`);
    };

    const artistGetHandler = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(`API URL: ${apiUrl}`);
            const response = await axios.get(`${apiUrl}/artist`);
            console.log(response.data);
            const { Artists = [] } = response.data;
            setTotalArtists(Artists.length);
            return Artists;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await artistGetHandler();
            const pageSize = 6;
            const offset = (page - 1) * pageSize;
            const paginatedData = data.slice(offset, offset + pageSize);
            setArtistList(paginatedData);
        };
        fetchData();
    }, [page]);

    const handleEditToggle = () => {
        if (isEditMode && selectedArtist) {
            if (!savedArtists.some(artist => artist.artistName === selectedArtist.artistName)) {
                setSavedArtists([...savedArtists, selectedArtist]);
            }
            setSelectedArtist(null);
        }
        setIsEditMode(!isEditMode);
    };

    const handleArtistClick = (artist) => {
        if (isEditMode) {
            setSelectedArtist(artist === selectedArtist ? null : artist);
        }
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className='search-list'>
            <div className='search-edit'>
                <div className='search-form'>
                    <input
                        type="text"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="아티스트를 검색해 보세요!"
                    />
                    <IoIosSearch className="search-button" onClick={handleSearch} />
                </div>
            </div> 

            

             <div className='saved-artists'>
                {savedArtists.map((artist, index) => (
                    <div key={index} className='saved-artist'>
                        <img src={artist.artistSrc} />
                    </div>
                ))}
            </div>

            <button className='edit-button' onClick={handleEditToggle}>
                    {isEditMode ? '저장' : '수정'}
            </button>
         
            <div className='artist-container'>
                {artistList?.map((artist, index) => (
                    <ArtistPick
                        key={index}
                        artistSrc={artist.artistSrc}
                        artistAlt={artist.artistAlt}
                        artistName={artist.artistName}
                        isSelected={selectedArtist === artist}
                        onClick={() => handleArtistClick(artist)}
                    />
                ))}
            </div>   
            
            <div className='pagination'>
                <button className='prev-button' onClick={handlePreviousPage} disabled={page === 1}>
                    이전
                </button>
                <span>{page}</span>
                <button className='next-button' onClick={handleNextPage} disabled={page * 6 >= totalArtists}>
                    다음
                </button>
            </div>
         
        </div>
    );
};

export default EditArtist;

