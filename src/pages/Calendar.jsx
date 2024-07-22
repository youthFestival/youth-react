import React from "react";
import FestivalCalendar from "../features/calendar/components/FestivalCalendar";
import TopButton from "../features/list/component/TopButton";
import ImageSlider from './../components/slider/ImageSilder';
import Header from './../components/header/Header';
import Nav from "./../components/nav/Nav";
import Footer from './../components/footer/Footer';

const Calendar = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <ImageSlider />
            <FestivalCalendar />
            <TopButton/>
            <Footer/>
        </div>
    );
};

export default Calendar;