import Slider from '../components/slider/ImageSilder'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import Ranking from '../components/ranking/Ranking';
import TicketOpen from '../components/ticketOpen/TicketOpen';
import Region from '../components/region/Region';
import { AuthContext } from "../../src/contexts/AuthContext";
import React, { useContext } from "react";

function Home() {
  const { user, dispatch } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <Nav />
      <Slider />
      <Ranking />
      <TicketOpen />
      {user ? (<Region />) : ("")}
      <Footer />
      
    </div>
  );
}

export default Home;
