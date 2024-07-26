import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PosterComponent from "./PosterComponent";
import "../styles/festival-list.scss";

const AllListTab = () => {
    const [allList, setAllList] = useState([]);

    const allGetHandler = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(`API URL: ${apiUrl}`)
            const response = await axios.get(`${apiUrl}/festival`);
            console.log(response.data)

            return response.data.festivals;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await allGetHandler();
            setAllList(data);
        };

        fetchData();
    }, []);

    return (
        <div className='festival-list'>
            {allList?.map((all, index) => (
                <Link to={`/festival/${all.festivalId}`} key={index}>
                    <PosterComponent 
                        posterSrc={all.posterSrc}
                        posterAlt={all.posterAlt}
                        festivalTitle={all.festivalTitle}
                        festivalLocation={all.festivalLocation}
                        festivalDate={`${all.startDate} - ${all.endDate}`}
                    />
                </Link>
            ))}
        </div>
    );
};

export default AllListTab;
