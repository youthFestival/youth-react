import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpenTicket from '../../features/list/component/OpenTicket';
import './ticketOpen.scss';

const TicketOpen = () => {
    
    const [error, setError] = useState(null);
    const [festivals, setFestivals] = useState([]);

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
    
    useEffect(() => {
        const fetchData = async (category) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/festival?category=페스티벌`);

            console.log(response);

            const now = Date.now();

            const filteredFestivals = response.data
            .filter(festival => festival.ticketOpen > now)
            .sort((a, b) => a.ticketOpen - b.ticketOpen)
            .slice(0, 6);

            console.log(filteredFestivals);
            setFestivals(filteredFestivals);
    
        } catch (error) {
          setError('티켓 오픈 데이터를 불러올 수 없습니다.');
        }
      };
      fetchData();
    });
          

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