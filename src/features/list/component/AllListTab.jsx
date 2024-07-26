import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PosterComponent from "./PosterComponent";
import "../styles/festival-list.scss";


/**
 * 전체 탭 메뉴 모든 컴포넌트
 * @returns
 */

const AllListTab = () => {

    const [allList, setAllList] = useState([]);

    const allGetHandler = async() => {
        try{
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(`API URL: ${apiUrl}`)
            const response = await axios.get(`${apiUrl}/festival`);
            console.log(response.data)

            return response.data.festivals;

        } catch (err){
            console.log(err);
            return[];
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
                <PosterComponent 
                    key={index}
                    posterSrc={all.posterSrc}
                    posterAlt={all.posterAlt}
                    festivalTitle={all.festivalTitle}
                    festivalLocation={all.festivalLocation}
                    festivalDate={`${all.startDate} - ${all.endDate}`}
                />
            ))}
            
            
        </div>
    );
};

export default AllListTab;
