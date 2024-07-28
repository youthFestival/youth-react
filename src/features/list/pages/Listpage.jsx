import React, { useState, useEffect } from "react";
import TopButton from "../component/TopButton";
import Dropdown from "../component/Dropdown";
import axios from 'axios';
import { Link } from 'react-router-dom';
import PosterComponent from '../component/PosterComponent';
import Footer from "../../../components/footer/Footer.jsx";
import { formatDay1, formatDay2 } from '../../../utils/util';

import "../styles/listpage.scss";


const Listpage = () => {
  
  const [ allList, setAllList ] = useState([]);
  const [ univList, setUnivList ] = useState([]);
  const [ festivalList, setFestivalList ] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState("지역전체");

  const apiUrl = process.env.REACT_APP_API_URL;

  const [ listTab, setListTab ] = useState(0);

  const [borderColors, setBorderColors] = useState({
    lanking: "#ccc",
    status: "#ccc",
    locality: "#ccc",
  });

  const allGetHandler = async () => {
    try {   
        console.log(`API URL: ${apiUrl}`);
        const response = await axios.get(`${apiUrl}/festival`);
        console.log(response.data);
        const allFestivals = response.data.festivals;
        return allFestivals
    } catch (err) {
        console.log(err);
        return [];
    }
  }
  
  const univGetHandler = async() => {
    try{
          const response = await axios.get(`${apiUrl}/festival?category=대학축제`);
          const univFestivals = response.data.festivals;
          return univFestivals;
      } catch (err){
          console.log(err);
          return[];
      }
  }

  const festivalGetHandler = async() => {
    try{
          const response = await axios.get(`${apiUrl}/festival?category=페스티벌`);
          const festivalFestivals = response.data.festivals;
          return festivalFestivals;
      } catch (err){
          console.log(err);
          return[];
      }
  }

    useEffect(() => {
      const allEffect = async () => {
        const alldata = await allGetHandler();
        setAllList(alldata);
      };

      allEffect();
    }, []);

  
      
    useEffect(() => {

      const univEffect = async () => {
                const univdata = await univGetHandler();
                setUnivList(univdata);
            };
            univEffect();
    }, []);

    useEffect(() => {

      const univEffect = async () => {
                const festivaldata = await festivalGetHandler();
                setFestivalList(festivaldata);
            };
            univEffect();
    }, []);
  

  const handleSelectChange = (event) => {
    const { id, value } = event.target;
    setBorderColors((prevColors) => ({
      ...prevColors,
      [id]: value === "default" ? "#ccc" : "#89CFF0",
    }));
    if(id === "locality") {
      setSelectedLocality(value);
    }
  };


  const menuData = [
    {
      name: "전체",
      content: allList,
    },
    {
      name: "대학축제",
      content: univList,
    },
    {
      name: "페스티벌",
      content: festivalList,
    },
  ];

  const listTabMenuHandler = (index) => {
      setListTab(index);
  };

  const filteredLocality = menuData[listTab].content.filter(geo => selectedLocality === "지역전체" || geo.locationName === selectedLocality);

  return (
    <div className="list-page">
      <span className="look">둘러보기</span>

      <div className="listmain">

        <div className='list-tabmenu'>

          <div className='tabform'>

              {menuData.map((list, index) => (
                <li 
                    key={index} 
                    className={index === listTab ? "listsubmenu focused" : "listsubmenu"}
                    onClick={() => listTabMenuHandler(index)}
                        >
                            {list.name}
                        </li>
                    ))}
                </div>
                <p className='listcontent'>{menuData.content}</p>



                <div className="dropdown-form">
                  <Dropdown
                    id="lanking"
                    className="dropdown"
                    value="최신순"
                    menu="menu"
                    item="item"
                    options={["최신순", "거리순", "인기순"]}
                    onChange={handleSelectChange}
                    borderColor={borderColors.lanking}
                  />

                  <Dropdown
                    id="status"
                    className="dropdown"
                    value="개최중"
                    menu="menu"
                    item="item"
                    options={["개최중", "전체"]}
                    onChange={handleSelectChange}
                    borderColor={borderColors.status}
                  />

                  <Dropdown
                    id="locality"
                    className="dropdown"
                    value={selectedLocality}
                    menu="menu"
                    item="item"
                    options={["지역전체","서울","경기도","강원도","충청도","경상도","전라도","제주도",]}
                    onChange={handleSelectChange}
                    borderColor={borderColors.locality}
                  />
                </div>
            </div>


            <div className="festival-list">
              {(selectedLocality === "지역전체" ? menuData[listTab].content : filteredLocality).map((list, index)  => (
                <Link to={`/festivaldetail/${list.id}`} key={index} className='link'>
                  <PosterComponent
                    posterSrc={list.festivalThumbnail}
                    posterAlt={list.posterAlt}
                    festivalTitle={list.festivalName}
                    festivalLocation={list.geoLocationName}
                    startDate={formatDay1(list.startDate)}
                    endDate={formatDay2(list.endDate)}
                  />
                </Link>
              ))}
            </div>

            <Footer/>


          <TopButton />
        </div>
    </div>
  );
};

export default Listpage;

