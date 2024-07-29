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
        '/images/sliderImage.png',
        'http://tkfile.yes24.com/Upload2/Display/202405/20240517/wel_mv_49633.png/dims/quality/70/',
        'http://tkfile.yes24.com/Upload2/Display/202407/20240711/wel_mv_50239_73deff.jpg/dims/quality/70/',
        'http://tkfile.yes24.com/Upload2/Display/202407/20240726/wel_,mv_49826.jpg/dims/quality/70/',
        'http://tkfile.yes24.com/Upload2/Display/202407/20240726/wel_mv_50354.jpg/dims/quality/70/',
        'http://tkfile.yes24.com/Upload2/Display/202407/20240723/wel_mv_50389_f9e455.jpg/dims/quality/70/',
        'http://tkfile.yes24.com/Upload2/Display/202405/20240513/wel_mv_49543_fbd4d7.png/dims/quality/70/'
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
