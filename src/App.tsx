import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { Header } from "./components/navbar/Header";
import { Footer } from "./components/navbar/Footer";
import { ImageCarousel } from "./components/slider/ImageCarousel";
import { HeroSection } from "./components/HeroSection";
import { CombinedHOASection as NewsSection } from "./components/combinedSectionhome/NewsSection";
import { DignitariesSection } from "./components/DignitariesSection";
import { EventsSection } from "./components/hoaUpComingEvents/EventsSection";
import { HaryanaVenuesGallery } from "./components/venus&facilities/SportsGallery";
import { PlayerCarousel } from "./components/homeplayers/PlayerCarousel";
import { PersonalityCard } from "./components/PersonalityCard";
import Sports from "./components/sports/Sports";
import RegistrationForm from "./components/Register/RegistrationForm";
import About from "./components/abouthoa/history";
import Members from "./components/abouthoa/Members";
import { RajivGandhiAwardsPage } from "./components/awards/RajivGandhiAward";
import { DronacharyaAwardsPage } from "./components/awards/DronacharyaAward";
import { DhyanchandAwardsPage } from "./components/awards/DhyanchandAwards";
import { ArjunaAwardsPage } from "./components/awards/ArjunaAwards";
import { UpcomingEvents } from "./components/hoaUpComingEvents/Events";
import { Venues } from "./components/venus&facilities/Venues";

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <HeroSection />
      <NewsSection />
      <DignitariesSection />
      <EventsSection />
      <HaryanaVenuesGallery />
      {/* <PlayerCarousel /> */}
      <PersonalityCard />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/sports" element={<Sports />} />
            {/* ABOUT HOA */}
            <Route path="/about/history" element={<About />} />
            <Route path="/about/members" element={<Members />} />
            <Route path="/competitions/upcoming" element={<UpcomingEvents />} />
            <Route
              path="/athletes/register"
              element={
                <div className="registration-page">
                  <RegistrationForm />
                </div>
              }
            />

            {/* Awards */}
            <Route path="/award/:slug" element={<RajivGandhiAwardsPage />} />
            <Route
              path="/dronacharya-awards"
              element={<DronacharyaAwardsPage />}
            />
            <Route
              path="/dhyanchand-awards"
              element={<DhyanchandAwardsPage />}
            />
            <Route path="/arjuna-awards" element={<ArjunaAwardsPage />} />

            {/* Venues Page */}
            <Route path="/venues" element={<Venues />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
