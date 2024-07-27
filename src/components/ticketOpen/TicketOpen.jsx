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
          // ticketOpen 날짜가 현재와 가장 가까운 순으로 정렬 후 상위 6개만 선택
          const data = response.data.sort((a, b) => Math.abs(new Date(a.ticketOpen) - new Date()) - Math.abs(new Date(b.ticketOpen) - new Date())).slice(0, 6);
          setFestivals(data);
        } catch (error) {
          setError('Error fetching data');
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