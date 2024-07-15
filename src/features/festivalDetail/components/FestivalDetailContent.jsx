import React from "react";
import FestivalDetailComments from "./FestivalDetailComments";
import FestivalDetailQnA from "./FestivalDetailQnA";
import ArtistInfo from "./ArtistInfo";
import FestivalPoster from "./FestivalPoster";
import FestivalPictures from "./FestivalPictures";
import FestivalBooth from "./FestivalBooth";
import FestivalRecommendations from "./FestivalRecommendations";

const FestivalDetailContent = ({ activeTab, festivalId }) => {
    if (activeTab === "comments") {
        return <FestivalDetailComments />;
    } else if (activeTab === "qna") {
        return <FestivalDetailQnA />;
    } else {
        return (
            <div>
                <ArtistInfo festivalId={festivalId} />
                <FestivalPoster festivalId={festivalId} />
                <FestivalPictures festivalId={festivalId} />
                <FestivalBooth festivalId={festivalId} />
                <FestivalRecommendations festivalId={festivalId} />
            </div>
        );
    }
};

export default FestivalDetailContent;