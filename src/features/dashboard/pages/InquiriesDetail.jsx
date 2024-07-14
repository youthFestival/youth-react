import { useEffect } from "react";
import { useParams } from "react-router-dom";

function InquiriesDetail() {
    const { id } = useParams();

    useEffect(() => {
    })
    return (
        <div>
            <h1>Inquiries Detail</h1>
            <h2>{id}</h2>
        </div>
    );
}

export default InquiriesDetail;