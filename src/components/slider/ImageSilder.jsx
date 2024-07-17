import React, { useState } from 'react';
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

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0); // Add state for active index

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

    return (
        <div className="image-slider-container">
            <div className='swiper-container'>
                <Swiper
                    onSwiper={setMainSwiper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='sub-image'>
                    {images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Sub-Slide ${index + 1}`}
                            className={index === activeIndex ? 'active' : 'inactive'} // Apply class based on active index
                            onClick={() => handleThumbClick(index)} // Add onClick event
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
