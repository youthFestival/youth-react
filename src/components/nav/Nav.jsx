import React from "react";
import './nav.scss';

const Nav = () => {

    const handleCalClick = () => {
        window.location.href = '/calendar'
    }

    const handleListClick = () => {
        window.location.href = '/list';
    }

    return (
        <div className="navigate-bar">
            <div className="nlist-container">
                <button className="nnavi-button" onClick={handleListClick}>축제 보러가기</button>
            </div>
            <div className="nlist-container">
                <button className="nnavi-button" onClick={handleCalClick}>축제 달력</button>
            </div>
        </div>
    )
}

export default Nav;
