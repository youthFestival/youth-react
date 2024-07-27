import React, { useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { ArtistPick } from '../index.js';
import axios from 'axios';
import classNames from 'classnames';
import '../styles/edit-artist.scss';

/**
 * 내 아티스트 수정 리스트 컴포넌트 
 * @returns 
 */
const EditArtist = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [artistList, setArtistList] = useState([]); 
    const [page, setPage] = useState(1);
    const [totalArtists, setTotalArtists] = useState(0);
    const [savedArtists, setSavedArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const artistGetHandler = async (searchTerm = '') => {
        try {
            setLoading(true);
            setError(null);
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/artist`, {
                params: { search: searchTerm }
            });
            const { artists = [] } = response.data;
            setTotalArtists(artists.length);
            return artists;
        } catch (err) {
            console.log(err);
            setError('Failed to fetch artists');
            return [];
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setPage(1);
        const data = await artistGetHandler(searchTerm);
        setArtistList(data.slice(0, 6));
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const allArtists = await artistGetHandler(searchTerm);
                const pageSize = 6;
                const offset = (page - 1) * pageSize;
                const paginatedData = allArtists.slice(offset, offset + pageSize);
                setArtistList(paginatedData);
            } catch (err) {
                setError('Failed to fetch artists');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page, searchTerm]);

    const handleEditToggle = () => {
        if (isEditMode && selectedArtist) {
            const isAlreadySaved = savedArtists.some(artist => artist.artistName === selectedArtist.artistName);
            if (isAlreadySaved) {
                setSavedArtists(savedArtists.filter(artist => artist.artistName !== selectedArtist.artistName));
            } else {
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
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
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
                        <img src={artist.image.imgUrl} alt={artist.name} />
                    </div>
                ))}
            </div>

            <button
                className={classNames('edit-button', {
                    'edit-mode': isEditMode,
                    'save-mode': !isEditMode
                })}
                onClick={handleEditToggle}
                onChange={handleArtistClick}
            >
                {isEditMode ? '저장' : '수정'}
            </button>

            {loading && <div>Loading...</div>}
            {error && <div className="error">{error}</div>}

            <div className='artist-container'>
                {Array.isArray(artistList) && artistList.map((artist, index) => (
                    <ArtistPick
                        key={index}
                        artistSrc={artist.image.imgUrl}
                        artistAlt={artist.artistAlt}
                        artistName={artist.name}
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
