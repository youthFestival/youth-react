import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import './header.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleLogoutClick = async (e) => {
        e.preventDefault();
        try {
          console.log("logout")
          const apiUrl = process.env.REACT_APP_API_URL;
          console.log("apiurl",apiUrl)
          const res = await axios.post(`${apiUrl}/auth/logout`, {}, {withCredentials: true})
          dispatch({ type: "LOGOUT" });
          navigate("/");
          console.log(res.data);
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
        window.location.href = '/home';
    };

    const handleConsoleClick = () => {
        window.location.href = '/admin';
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate.push(`/results?query=${searchTerm}`);
        // // NEW_SEARCH: 새로운 검색 결과를 상태에 저장합니다.
        // dispatch({ type: "NEW_SEARCH", payload: { festivalName } });
        // // state에 정보를 담아 /list 화면이동한다. 
        // navigate("/list", { state: { festivalName } });
    };

    return (
        <div className="header-header">
            <div className="hlogo-container">
                <div className="logo" onClick={handleHomeClick}>Youth!</div>
            </div>
            <div className="hsearch-container">
                <div className="search-box">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="대학교, 페스티벌, 지역, 아티스트를 검색해 보세요!"
                        />
                        <IoIosSearch className="search-button" onClick={handleSearch}/>
                    </form>
                </div>
            </div>
            <div className="hitems">
                <GoBell className="event-bell"/>
                {user && user.isAdmin && <button className="console-button" onClick={handleConsoleClick}>Console</button>}
                {user ? 
                    (<button className="navButton" onClick={handleLogoutClick}>로그아웃</button>):
                    (<div className="navButton-container">
                        <button className="navButton" onClick={handleLoginClick}>로그인</button>
                        <button className="navButton" onClick={handleRegisterClick}>회원가입</button>
                    </div>)
                }
                <button className="navButton" onClick={handlePageClick}>마이페이지</button>
                    
            </div>
        </div>
    )
}

export default Header;
