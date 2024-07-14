import React from "react";
import FestivalDetailComments from "./FestivalDetailComments";
import FestivalDetailQnA from "./FestivalDetailQnA";

const FestivalDetailContent = ({ activeTab }) => {
    if (activeTab === "comments") {
        return <FestivalDetailComments />;
    } else if (activeTab === "qna") {
        return <FestivalDetailQnA />;
    } else {
        return <div>상세정보를 여기에 표시합니다.</div>;
    }
};

export default FestivalDetailContent;
