import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../styles/festival-detail-content.css";

const FestivalDetailMenu = ({ activeTab, onTabChange, festivalId }) => {
    const [commentCount, setCommentCount] = useState(0);
    const [qnaCount, setQnaCount] = useState(0);


    useEffect(() => {
        const fetchCommentCount = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/comments/${festivalId}?limit=1&offset=0`);
                setCommentCount(response.data.total);
            } catch (error) {
                console.error('기대평 수를 가져오는데 실패했습니다.');
            }
        };

        fetchCommentCount();
    }, [festivalId]);

    useEffect(() => {
        const fetchQnaCount = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/inquiries2/${festivalId}?limit=1&offset=0`);
                setQnaCount(response.data.total);
            } catch (error) {
                console.error('QnA 수를 가져오는데 실패했습니다.');
            }
        };

        fetchQnaCount();
    }, [festivalId]);

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button onClick={() => onTabChange("details")} className={`tab-button ${activeTab === "details" ? "active" : ""}`}>상세정보</button>
                <button onClick={() => onTabChange("comments")} className={`tab-button ${activeTab === "comments" ? "active" : ""}`}>기대평<span className="festival-detail-count">{commentCount}</span></button>
                <button onClick={() => onTabChange("qna")} className={`tab-button ${activeTab === "qna" ? "active" : ""}`}>QnA<span className="festival-detail-count">{qnaCount}</span></button>
            </div>
        </div>
    );
};

export default FestivalDetailMenu;