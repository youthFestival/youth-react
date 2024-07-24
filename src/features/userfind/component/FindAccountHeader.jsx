import React from "react";
import '../../../components/header/header.scss';

const FindAccountHeader = () => {

    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    const handleRegisterClick = () => {
        window.location.href = '/register';
    }

    const handleHomeClick = () => {
        window.location.href = '/';
    };

    return (
        <div className="header-header">
            <div className="hlogo-container">
                <div className="logo" onClick={handleHomeClick}>Youth!</div>
            </div>
            <div className="hitems">
                <div className="navButton-container">
                    <button className="navButton" onClick={handleLoginClick}>로그인</button>
                    <button className="navButton" onClick={handleRegisterClick}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default FindAccountHeader;
