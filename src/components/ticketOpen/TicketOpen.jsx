import React, { useState, useEffect } from 'react';
import OpenTicket from '../../features/list/component/OpenTicket';
import './ticketOpen.scss';

const TicketOpen = () => {

    const [festivals, setFestivals] = useState([]);

    // useEffect(() => {
    //     const data = fetchFestivalData();
    //     setFestivals(data);
    //   }, []);
    
    useEffect(() => {
      
        const fetchData = async () => {
  
            const data = [
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24009022_p.gif',
                        posterAlt: '서울숲재즈페스티벌',
                        festivalTitle: '서울숲재즈페스티벌',
                        festivalLocation: '서울숲',
                        festivalDate: '2024.10.12 ~2024.10.13',
                        festivalTicketOpen : '8.01(목) 10:00'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24005722_p.gif',
                        posterAlt: '2024 인천펜타포트 락 페스티벌',
                        festivalTitle: '2024 인천펜타포트 락 페스티벌',
                        festivalLocation: '송도달빛축제공원',
                        festivalDate: '2024.08.02 ~2024.08.04',
                        festivalTicketOpen : '8.01(목) 10:00'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24010346_p.gif',
                        posterAlt: '대구 - 2024 THE HYPER DAY (더하이퍼데이)',
                        festivalTitle: '대구 - 2024 THE HYPER DAY (더하이퍼데이)',
                        festivalLocation: '대구스타디움 동편광장 일대',
                        festivalDate: '2024.10.12',
                        festivalTicketOpen : '8.01(목) 10:00'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24009897_p.gif',
                        posterAlt: '2024 세종 센트럴파크 뮤직페스티벌',
                        festivalTitle: '2024 세종 센트럴파크 뮤직페스티벌',
                        festivalLocation: '세종 센트럴파크',
                        festivalDate: '2024.09.06 ~2024.09.08',
                        festivalTicketOpen : '8.01(목) 10:00'
                    },
                    {
                        posterSrc: 'https://ticketimage.interpark.com/Play/image/large/24/24009195_p.gif',
                        posterAlt: '2024 전주얼티밋뮤직페스티벌',
                        festivalTitle: '2024 전주얼티밋뮤직페스티벌',
                        festivalLocation: '전주종합경기장',
                        festivalDate: '2024.08.09 ~2024.08.11',
                        festivalTicketOpen :'8.01(목) 10:00'
                    },
                    {
                      posterSrc: '',
                      posterAlt: '',
                      festivalTitle: 'All Festival Poster 6',
                      festivalLocation: 'Location 6',
                      festivalDate: 'Date 6',
                      festivalTicketOpen : '8.01(목) 10:00'
                  },
                  ];
                  setFestivals(data);
              };
  
              fetchData();
          }, []);

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
                    posterSrc={festival.posterSrc}
                    posterAlt={festival.posterAlt}
                    festivalTitle={festival.festivalTitle}
                    festivalTicketOpen={festival.festivalTicketOpen} />
                ))}
            </div>
        </div>
    )
}

export default TicketOpen;