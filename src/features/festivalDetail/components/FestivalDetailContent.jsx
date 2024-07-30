import React from "react";
import FestivalDetailComments from "./FestivalDetailComments";
import FestivalDetailQnA from "./FestivalDetailQnA";
import ArtistInfo from "./ArtistInfo";
import FestivalPoster from "./FestivalPoster";
import FestivalPictures from "./FestivalPictures";
import FestivalBooth from "./FestivalBooth";
import Map from "./Map";
import FestivalRecommendations from "./FestivalRecommendations";
import "../styles/festival-detail-content.css";

const FestivalDetailContent = ({ activeTab, festivalId, mapRef }) => {
    if (activeTab === "comments") {
        return <FestivalDetailComments festivalId={festivalId} />;
    } else if (activeTab === "qna") {
        return <FestivalDetailQnA festivalId={festivalId} />;
    } else {
        return (
            <div className="Festival-contents-container">
                <ArtistInfo festivalId={festivalId} />
                <FestivalPoster festivalId={festivalId} />
                <FestivalPictures festivalId={festivalId} />
                <FestivalBooth festivalId={festivalId} />
                <div ref={mapRef}>
                    <Map festivalId={festivalId} />
                </div>
                <FestivalRecommendations festivalId={festivalId} />
            </div>
        );
    }
};

export default FestivalDetailContent;