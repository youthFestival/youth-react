import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import "../styles/festival-detail-menu-map.css";

const Map = ({ festivalId }) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  // Fetch location data
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${apiUrl}/festivals/${festivalId}/location`);
        const { latitude, longitude } = response.data;
        console.log('Fetched location:', latitude, longitude);
        setLocation({ latitude, longitude });
      } catch (error) {
        console.error('Failed to fetch location', error);
      }
    };

    fetchLocation();
  }, [festivalId]);

  // Load Kakao Map script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f77ffaf3402c772053f7d435be67af3a&autoload=false`;
    script.async = true;

    script.onload = () => {
      console.log('Kakao map script loaded');
      window.kakao.maps.load(() => {
        console.log('Kakao maps loaded');
        if (location.latitude && location.longitude) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(location.latitude, location.longitude),
            level: 3
          };
          mapInstance.current = new window.kakao.maps.Map(mapContainer.current, mapOption);

          const markerPosition = new window.kakao.maps.LatLng(location.latitude, location.longitude);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition
          });

          marker.setMap(mapInstance.current);
          console.log('Map and marker are set');
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude && window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3
      };
      mapInstance.current = new window.kakao.maps.Map(mapContainer.current, mapOption);

      const markerPosition = new window.kakao.maps.LatLng(location.latitude, location.longitude);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });

      marker.setMap(mapInstance.current);
      console.log('Map and marker are set');
    } else {
      console.log('Location data is not set yet or Kakao maps not loaded');
    }
  }, [location]);

  return (
    <div className="map-container">
      <h1 className='map-text'>길찾기</h1>
      <div
        ref={mapContainer}
        className="map"
      ></div>
    </div>
  );
};

export default Map;