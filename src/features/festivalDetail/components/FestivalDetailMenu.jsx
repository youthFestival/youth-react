import React from "react";
import "../styles/festival-detail.css";

const FestivalDetailMenu = ({ activeTab, onTabChange }) => {
    return (
        <div className="tabs-container">
            <div className="tabs">
                <button onClick={() => onTabChange("details")} className={`tab-button ${activeTab === "details" ? "active" : ""}`}>상세정보</button>
                <button onClick={() => onTabChange("comments")} className={`tab-button ${activeTab === "comments" ? "active" : ""}`}>코멘트<span className="festial-detail-count">6</span></button>
                <button onClick={() => onTabChange("qna")} className={`tab-button ${activeTab === "qna" ? "active" : ""}`}>QnA<span className="festial-detail-count">6</span></button>
            </div>
        </div>
    );
};

export default FestivalDetailMenu;