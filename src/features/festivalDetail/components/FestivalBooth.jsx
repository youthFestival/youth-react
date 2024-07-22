import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-booth.css";

const FestivalBooth = ({ festivalId }) => {
    const [booths, setBooths] = useState([]);
    const [selectedBooth, setSelectedBooth] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooths = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/festivals/${festivalId}/booths`);
                setBooths(response.data.booths);
            } catch (error) {
                setError('부스 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooths();
    }, [festivalId]);

    const fetchItems = async (boothId) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log("Fetching items for boothId: ", boothId);
            const response = await axios.get(`${apiUrl}/booths/${boothId}/items`);
            setItems(response.data.items);
        } catch (error) {
            setError('아이템 정보를 가져오는데 실패했습니다.');
        }
    };

    const handleBoothChange = (event) => {
        const boothId = event.target.value;
        setSelectedBooth(boothId);
        fetchItems(boothId);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="festival-booth-container">
            <div className="booth-header">
                <div className='booth-header-text'>
                    <h2>부스 정보</h2>
                </div>
                <select onChange={handleBoothChange} value={selectedBooth} className='booth-select'>
                    <option value="" className='booth-select'>먹거리 부스 정보</option>
                    {booths.map((booth) => (
                        <option key={booth.boothId} value={booth.boothId}>
                            {booth.boothName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="booth-items">
                {items.map((item) => (
                    <div key={item.name} className="booth-item">
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/icons/festivalDetail/booth-item-sample.png`} alt={item.name} className="booth-item-image" />
                        </div>
                        <div>
                            <p className="booth-item-name">{item.name}</p>
                            <p className="booth-item-price">{item.price.toLocaleString()}원</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='booth-description'>
                <p>* 기재된 가격은 참고 가격으로 변동될 수 있습니다.</p>
                <p>* 제공되는 이미지는 축제 주최측을 통하여 제공받은 이미지입니다.</p>
            </div>
        </div>
    );
};

export default FestivalBooth;