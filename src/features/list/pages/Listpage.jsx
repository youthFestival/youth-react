import React, { useState, useEffect, useContext } from "react";
import TopButton from "../component/TopButton";
import Dropdown from "../component/Dropdown";
import axios from 'axios';
import { Link } from 'react-router-dom';
import PosterComponent from '../component/PosterComponent';
import Footer from "../../../components/footer/Footer.jsx";
import { formatDay1, formatDay2 } from '../../../utils/util';
import { AuthContext } from '../../../contexts/AuthContext';
import { useLocation } from 'react-router-dom';

import "../styles/listpage.scss";



const Listpage = (festivalId) => {

  const {user} = useContext(AuthContext);

  const [ allList, setAllList ] = useState([]);
  const [ univList, setUnivList ] = useState([]);
  const [ festivalList, setFestivalList ] = useState([]);
  const [ selectedLocality, setSelectedLocality ] = useState("지역전체");
  const [ likedThumbnails, setLikedThumbnails] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

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
        const response = await axios.get(`${apiUrl}/festival?search=${searchTerm}`, { withCredentials: true });
        console.log(response.data);
        const allFestivals = response.data.festivals;
        return allFestivals;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  
    
    useEffect(() => {
        const allEffect = async () => {
          const alldata = await allGetHandler();
          setAllList(alldata);
        };

        allEffect();
    }, [searchTerm]);
  
    const univGetHandler = async() => {
      try {
        const response = await axios.get(`${apiUrl}/festival?category=대학축제`, { withCredentials: true });
        const univFestivals = response.data.festivals;
        return univFestivals;
      } catch (err) {
        console.log(err);
        return [];
      }
    };

    useEffect(() => {
      const univEffect = async () => {
                const univdata = await univGetHandler();
                setUnivList(univdata);
            };
            univEffect();
    }, [searchTerm]);

    const festivalGetHandler = async() => {
      try {
        const response = await axios.get(`${apiUrl}/festival?category=페스티벌`, { withCredentials: true });
        const festivalFestivals = response.data.festivals;
        return festivalFestivals;
      } catch (err) {
        console.log(err);
        return [];
      }
    };
    
    useEffect(() => {
        const univEffect = async () => {
                  const festivaldata = await festivalGetHandler();
                  setFestivalList(festivaldata);
              };
              univEffect();
    }, [searchTerm]);

    const userLikedFestivals = async () => {
      try {
        if (user && user.id) {
          const response = await axios.get(`${apiUrl}/festival/${festivalId}/like`);
          return response.data.festivals;
        }
      } catch (error) {
        console.error("좋아요한 페스티벌을 불러오는데 실패했습니다.", error);
        return [];
      }
    };

    useEffect(() => {
      const fetchLikedThumbnails = async () => {
        if (user) {
          const likedThumnailData = await userLikedFestivals();
          setLikedThumbnails(likedThumnailData);
        } else {
          setLikedThumbnails([]);
        }
      };
  
      fetchLikedThumbnails();
    }, [user]);

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
                    showFavoriteIcon={user ? list.favorite : false}
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