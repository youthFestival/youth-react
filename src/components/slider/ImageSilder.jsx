import React, { useState, useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './image-slider.scss';

// import required modules
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
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
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
