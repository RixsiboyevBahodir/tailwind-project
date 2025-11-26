import AboutUs from "./components/AboutUs";
import Alada from "./components/Alada";
import Alba from "./components/Alba";
import Batea from "./components/Batea";
import CardInfo from "./components/CardInfo";
import Cloe from "./components/Cloe";
import ImgCard from "./components/ImgCard";
import OurHome from "./components/OurHome";
import PartnerCard from "./components/PartnerCard";
import Pelican from "./components/Pelican";
import Fouter from "./components/shared/Fouter";
import Header from "./components/shared/Header";
import Navbar from "./components/shared/Navbar";


export default function App() {
  return (
    <main>
      <header>
        <Navbar />
        <div className="border-t border-amber-700"></div>
        <Header />
      </header>
      <CardInfo/>
      <ImgCard />
      <Cloe />
      <Pelican />
      <Alba />
      <Alada />
      <Batea />
      <OurHome/>
      <PartnerCard/>
      <AboutUs/>
      <Fouter/>
    </main>
  )
}