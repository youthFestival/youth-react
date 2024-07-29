import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpenTicket from '../../features/list/component/OpenTicket';
import './ticketOpen.scss';
import { formatDay3 } from '../../utils/util';

const TicketOpen = () => {
    
    const [error, setError] = useState(null);
    const [festivals, setFestivals] = useState([]);
    

    

    useEffect(() => {
        const fetchData = async (category) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/festival?category=페스티벌`);

            // console.log(response);

            console.log(response.data.festivals);

            const now = new Date(); 

            console.log(now);
            const filteredFestivals = response.data.festivals.filter(festivals => new Date(festivals.ticketOpen) > now)
            .sort((a, b) => new Date(a.ticketOpen)  - new Date(b.ticketOpen))
            .slice(0, 6);
            console.log(filteredFestivals);
            setFestivals(filteredFestivals);
    
        } catch (error) {
          setError('티켓 오픈 데이터를 불러올 수 없습니다.');
        }
      };
      fetchData();
    },[]);
          

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
                    posterSrc={festival.festivalThumbnail}
                    posterAlt={festival.posterAlt}
                    festivalTitle={festival.festivalName}
                    festivalTicketOpen={formatDay3(festival.ticketOpen)} />
                ))}
            </div>
        </div>
    )
}

export default TicketOpen;