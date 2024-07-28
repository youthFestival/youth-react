import React, { useState, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './image-slider.scss';

// import required modules        'https
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import ColorThief from 'colorthief';
import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [bgColor, setBgColor] = useState('#fff');
    //const [images, setImages] = useState([]);
    const imageRefs = useRef([]);

    // useEffect(() => {
    //     const imageData = async () => {
    //         try{
    //             const response = await axios.get(`${apiURL}/festival`);
    //             const data = response.data.festivals.images;
    //             setImages(data);
    //         } catch (error) {
    //             console.log(error.response.data.errorMessage);
    //         }
    //     }
    //     imageData();
    // },[])

    const images = [
        //swiperjs.com/demos/images/nature-1.jpg',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1501828983797-9d7f14e0263c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
        'https://swiperjs.com/demos/images/nature-10.jpg'
    ];

    const handleThumbClick = (index) => {
        if (mainSwiper) {
            mainSwiper.slideTo(index);
        }
    };

    const updateBgColor = (index) => {
        const img = imageRefs.current[index];
        if (img && img.complete) {
            const colorThief = new ColorThief();
            const result = colorThief.getColor(img);
            setBgColor(`rgb(${result[0]}, ${result[1]}, ${result[2]})`);
        } else if (img) {
            img.addEventListener('load', () => {
                const colorThief = new ColorThief();
                const result = colorThief.getColor(img);
                setBgColor(`rgb(${result[0]}, ${result[1]}, ${result[2]})`);
            });
        }
    };

    useEffect(() => {
        updateBgColor(activeIndex);
    }, [activeIndex]);

    return (
        <div className="image-slider-container" style={{ backgroundColor: bgColor }}>
            <div className='swiper-container'>
                <Swiper
                    onSwiper={setMainSwiper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                ref={(el) => imageRefs.current[index] = el}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                crossOrigin="anonymous"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='sub-image'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sub-Slide ${index + 1}`}
                            className={index === activeIndex ? 'active' : 'inactive'}
                            onClick={() => handleThumbClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
