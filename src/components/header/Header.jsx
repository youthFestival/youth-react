import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import TopTalkArea from "./topTalkArea/TopTalkArea";
import './header.scss'

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${apiUrl}/auth/logout`, {}, { withCredentials: true });

            if (res.status === 200) {
                dispatch({ type: "LOGOUT" });
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    const handleRegisterClick = () => {
        window.location.href = '/register';
    }

    const handlePageClick = () => {
        window.location.href = '/mypage';
    }

    const handleHomeClick = () => {
        window.location.href = '/';
    };

    const handleConsoleClick = () => {
        window.location.href = '/admin';
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate.push(`/results?query=${searchTerm}`);
    };

    return (
        <div className="header-header">
            <div className="hlogo-container">
                <div className="logo" onClick={handleHomeClick}>Youth!</div>
            </div>

            <form onSubmit={handleSearch} className='search-box'>
                <input
                    type="text"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="대학교, 페스티벌, 지역, 아티스트를 검색해 보세요!"
                />
                <IoIosSearch className="search-button" onClick={handleSearch} />
            </form>

            <div className="hitems">
                {user !== null && <div className="bell-container">
                    <GoBell className="event-bell" onClick={() => setIsExpanded(!isExpanded)} />
                    {isExpanded && <TopTalkArea />}
                </div>}
                {user && user.isAdmin && <button className="console-button" onClick={handleConsoleClick}>Console</button>}
                {user ?
                    (<div className="navButton-container">
                        <button className="navButton" onClick={handleLogoutClick}>로그아웃</button>
                        <button className="navButton" onClick={handlePageClick}>마이페이지</button>
                    </div>) :
                    (<div className="navButton-container">
                        <button className="navButton" onClick={handleLoginClick}>로그인</button>
                        <button className="navButton" onClick={handleRegisterClick}>회원가입</button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Header;
