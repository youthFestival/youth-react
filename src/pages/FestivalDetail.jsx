import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FestivalInfo from "../features/festivalDetail/components/FestivalInfo";
import FestivalDetailMenu from "../features/festivalDetail/components/FestivalDetailMenu";
import FestivalDetailContent from "../features/festivalDetail/components/FestivalDetailContent";

const FestivalDetail = () => {
    const { festivalId } = useParams();
    const [activeTab, setActiveTab] = useState("details");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <FestivalInfo festivalId={festivalId} />
            <FestivalDetailMenu activeTab={activeTab} onTabChange={handleTabChange} />
            <FestivalDetailContent activeTab={activeTab} festivalId={festivalId} />
        </div>
    );
};

export default FestivalDetail;