import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FestivalInfo from "../features/festivalDetail/components/FestivalInfo";
import FestivalDetailMenu from "../features/festivalDetail/components/FestivalDetailMenu";
import FestivalDetailContent from "../features/festivalDetail/components/FestivalDetailContent";
import TopButton from "../features/list/component/TopButton";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const FestivalDetail = () => {
    const { festivalId } = useParams();
    const [activeTab, setActiveTab] = useState("details");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header />
            <Nav />
            <FestivalInfo festivalId={festivalId} />
            <FestivalDetailMenu activeTab={activeTab} onTabChange={handleTabChange} festivalId={festivalId} />
            <FestivalDetailContent activeTab={activeTab} festivalId={festivalId} />
            <TopButton />
            <Footer />
        </div>
    );
};

export default FestivalDetail;