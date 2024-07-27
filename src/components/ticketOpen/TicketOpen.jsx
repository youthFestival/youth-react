import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpenTicket from '../../features/list/component/OpenTicket';
import './ticketOpen.scss';

const TicketOpen = () => {
    
    const [error, setError] = useState(null);
    const [festivals, setFestivals] = useState([]);
    const [category, setCategory] = useState("페스티벌");

        // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const apiUrl = process.env.REACT_APP_API_URL;
    //             const data = await axios.get(`${apiUrl}/festival`);
    //             setFestivals(data);
    //             console.log(data);
    //         } catch (error) {
    //             setError('Error fetching data:', error);
    //         } 
    //     };

    //     fetchData();
    // }, []);

        const fetchData = async (category) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/festival?category=${category}`);
            console.log(response);
            const data = await response.json();
    
            const now = new Date();
            
            // 오늘 날짜보다 이후의 데이터 필터링 및 정렬
            const filteredFestivals = data
              .filter(festival => new Date(festival.date) > now)
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .slice(0, 6); // 최대 6개의 데이터 선택
    
            setFestivals(filteredFestivals);          
            console.log(data);
        } catch (error) {
          setError('티켓 오픈 데이터를 불러올 수 없습니다.');
        }
      };
          
      useEffect(() => {
        fetchData(category);
    }, [category]);

    return (
        <div className="ticket-open-container">
            <div className="ticket-title-container">
                <p className="open-title">티켓 오픈</p>
            </div>
            <div className="ticket-grid">
                {festivals.map((festival) => (
                    <OpenTicket 
                    key={festival.id} 
                    festival={festival}
                    posterSrc={festival.festivalThumnail}
                    posterAlt={festival.posterAlt}
                    festivalTitle={festival.festivalName}
                    festivalTicketOpen={festival.ticketOpen} />
                ))}
            </div>
        </div>
    )
}

export default TicketOpen;