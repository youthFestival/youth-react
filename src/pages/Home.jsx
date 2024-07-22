import Slider from '../components/slider/ImageSilder'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import Ranking from '../components/ranking/Ranking';
import TicketOpen from '../components/ticketOpen/TicketOpen';

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Slider />
      <Ranking />
      <TicketOpen />
      <Footer />
    </div>
  );
}

export default Home;
