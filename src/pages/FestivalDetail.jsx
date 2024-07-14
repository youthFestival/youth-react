import React from "react";
import { useParams } from "react-router-dom";
import FestivalInfo from "../features/festivalDetail/components/FestivalInfo";

const FestivalDetail = () => {
    const { festivalId } = useParams();
    return (
        <div>
            <FestivalInfo festivalId={festivalId} />
        </div>
    )
};

export default FestivalDetail;