import React from "react";
import FestivalCalendar from "../features/calendar/components/FestivalCalendar";
import TopButton from "../features/list/component/TopButton";
import ImageSlider from './../components/slider/ImageSilder';
import Header from './../components/header/Header';
import Nav from "./../components/nav/Nav";
import Footer from './../components/footer/Footer';
import '../features/calendar/styles/festival-calendar.css';

const Calendar = () => {
    return (
        <div>
            <Header />
            <Nav />
            <div className="festival-calendar-slider">
                <ImageSlider />
            </div>
            <FestivalCalendar />
            <TopButton />
            <Footer />
        </div>
    );
};

export default Calendar;