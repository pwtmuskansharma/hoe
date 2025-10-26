import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/navbar/Header";
import { Footer } from "./components/navbar/Footer";
import { ImageCarousel } from "./components/slider/ImageCarousel";
import { HeroSection } from "./components/HeroSection";
import { CombinedHOASection as NewsSection } from "./components/NewsSection";
import { DignitariesSection } from "./components/DignitariesSection";
import { EventsSection } from "./components/EventsSection";
import { SportsGallery } from "./components/SportsGallery";
import { PlayerCarousel } from "./components/homeplayers/PlayerCarousel";
import { PersonalityCard } from "./components/PersonalityCard";
import Sports from "./components/Sports";
import RegistrationForm from "./components/Register/RegistrationForm";

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <HeroSection />
      <NewsSection />
      <DignitariesSection />
      <EventsSection />
      <SportsGallery />
      {/* <PlayerCarousel /> */}
      <PersonalityCard />
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* ✅ Inline CSS for the registration route background */}

      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sports" element={<Sports />} />
            <Route
              path="/athletes/register"
              element={
                <div className="registration-page">
                  <RegistrationForm />
                </div>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
