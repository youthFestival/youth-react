import React, { useEffect, useState } from "react";
import FestivalDetailComments from "./FestivalDetailComments";
import FestivalDetailQnA from "./FestivalDetailQnA";
import ArtistInfo from "./ArtistInfo";
import FestivalPoster from "./FestivalPoster";
import axios from "axios";

const FestivalDetailContent = ({ activeTab, festivalId }) => {
    const [lineUp, setLineUp] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLineUp = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}/line-ups`);
                setLineUp(response.data.lineUp);
            } catch (error) {
                console.error('Failed to fetch lineup', error);
                setError('아티스트 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchLineUp();
    }, [festivalId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (activeTab === "comments") {
        return <FestivalDetailComments />;
    } else if (activeTab === "qna") {
        return <FestivalDetailQnA />;
    } else {
        return (
            <div>
                <ArtistInfo lineUp={lineUp} />
                <FestivalPoster festivalId={festivalId}/>
            </div>
        );
    }
};

export default FestivalDetailContent;
