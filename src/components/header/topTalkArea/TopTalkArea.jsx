import React, { useState, useEffect } from 'react';
import TopTalkAreaList from './TopTalkAreaList';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import './top-talk-area.scss';

const apiURL = process.env.REACT_APP_API_URL;

const TopTalkArea = () => {
    const { user } = React.useContext(AuthContext);
    const userId = user?.user?.userId;
    const [events, setEvents] = useState([]);
    

    useEffect(() => {
        const eventData = async () => {
            try {
                const response = await axios.get(`${apiURL}/event/${userId}`);
                setEvents(response.data.events);
            } catch (error) {
                console.log(error.response.data.message);
            }
        };
        eventData();
    }, [userId]);

    const handleEventClick = async (id, redirectUrl) => {
        try {
            await axios.put(`${apiURL}/event/${id}/read`);
            setEvents(events);
            window.location.href = redirectUrl;
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    return (
        <div className="talk_area_wrapper">
            <div className="arrow-up"></div>
            <div className="talk_area" aria-hidden="false">
                <div className="layer_box">
                    <div className="box_content">
                        {events && events.length > 0 ? (
                            events.map(event => (
                                <TopTalkAreaList
                                    username={user.user.username}
                                    key={event.id}
                                    event={event}
                                    onEventClick={handleEventClick}
                                    read={event.isChecked}
                                />
                            ))
                        ) : (
                            <div>No notifications available</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopTalkArea;
