import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header&footer/Header";
import { Footer } from "./components/header&footer/Footer";
import { ImageCarousel } from "./components/ImageCarousel";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { DignitariesSection } from "./components/DignitariesSection";
import { EventsSection } from "./components/EventsSection";
import { SportsGallery } from "./components/SportsGallery";
import { PlayerCarousel } from "./components/PlayerCarousel";
import { PersonalityCard } from "./components/PersonalityCard";
import Sports from "./components/Sports";
import RegistrationForm from "./components/RegistrationForm";

function HomePage() {
  return (
    <>
      <ImageCarousel />
      <HeroSection />
      <NewsSection />
      <DignitariesSection />
      <EventsSection />
      <SportsGallery />
      <PlayerCarousel />
      <PersonalityCard />
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* ✅ Inline CSS for the registration route background */}
      <style>
        {`
          .registration-page {
            min-height: 100vh;

            /* Image + soft top fade */
            background-image:
              linear-gradient(to top, rgba(255,255,255,0.60), rgba(255,255,255,0.60)),
              url('/images/bg.png');

            background-repeat: no-repeat;
            background-size: cover;

            /* Start a little above center so top is more visible */
            background-position: center 35%;
            background-attachment: fixed;

            display: flex;
            align-items: flex-start;   /* change to center if you want vertical centering */
            justify-content: center;
            padding: 60px 20px;
            background-color: #e3f2fd; /* fallback */
          }

          /* Wide screens (ultrawide) – push focus a bit higher to reveal top */
          @media (min-aspect-ratio: 21/9) {
            .registration-page { background-position: center 25%; }
          }

          /* Standard desktops/laptops */
          @media (max-aspect-ratio: 16/9) {
            .registration-page { background-position: center 32%; }
          }

          /* Taller viewports (tablets/portrait) – shift down to keep bottom visible */
          @media (max-aspect-ratio: 4/3) {
            .registration-page { background-position: center 40%; }
          }

          /* Very tall phones – shift a bit more */
          @media (max-aspect-ratio: 3/4) {
            .registration-page { background-position: center 45%; }
          }
        `}
      </style>

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
