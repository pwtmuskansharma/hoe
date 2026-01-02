import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // <-- REQUIRED FOR TOAST TO SHOW
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
import RegistrationFormDummy from "./components/Register/RegistrationFormDummy";
import About from "./components/abouthoa/history";
import Members from "./components/abouthoa/Members";
import { RajivGandhiAwardsPage } from "./components/awards/RajivGandhiAward";
import { DronacharyaAwardsPage } from "./components/awards/DronacharyaAward";
import { DhyanchandAwardsPage } from "./components/awards/DhyanchandAwards";
import { ArjunaAwardsPage } from "./components/awards/ArjunaAwards";
import { UpcomingEvents } from "./components/hoaUpComingEvents/Events";
import { Venues } from "./components/venus&facilities/Venues";
import LoginForm from "./components/Register/LoginForm";
import ForgotPassword from "./components/Register/ForgotPassword";
import DocumentsPage from "./components/ddocument/DocumentsPage";
import GalleryPage from "./components/media/gallery/GalleryPage";
import NewsPage from "./components/media/newssection/NewsPage";
import NewsDetailPage from "./components/media/newssection/NewsDetail";
import PressReleasesPage from "./components/media/pressrelease/PressReleasesPage";
import PressReleaseDetailPage from "./components/media/pressrelease/PressReleaseDetailPage";
import PdfPoliciesPage from "./components/ddocument/PdfPoliciesPage";
import PdfPoliciesPageWrapper from "./components/ddocument/PdfPoliciesPageWrapper";
import SportCategoryPage from "./components/sports/SportCategoryPage";
import SportDocumentsPage from "./components/sports/SportDocumentsPage";
import MemberPage from "./components/member/Member";
import OrganisationPage from "./components/organisation/Organisation";
import GalleryFolderPage from "./components/media/gallery/FolderImage";

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
            <Route path="/athletes/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/sports" element={<Sports />} />
            {/* ABOUT HOA */}
            <Route path="/pages/:slug" element={<About />} />

            {/* document */}
            <Route path="/documents" element={<DocumentsPage />} />

            {/* Pdf Policeies */}
            {/* <Route path="/pdf-policies/:slug" element={<PdfPoliciesPage />} /> */}
            <Route
              path="/pdf-policies/:slug"
              element={<PdfPoliciesPageWrapper />}
            />

            {/* gallery */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:folder" element={<GalleryFolderPage />} />

            {/* events */}
            <Route path="/events" element={<UpcomingEvents />} />

            {/* news */}
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsDetailPage />} />

            {/* Press Release */}
            <Route path="/press-releases" element={<PressReleasesPage />} />

            <Route
              path="/press-releases/:slug"
              element={<PressReleaseDetailPage />}
            />
            {/* sport */}
            <Route path="/sports/:slug" element={<SportCategoryPage />} />
            <Route
              path="/sport-documents/:slug"
              element={<SportDocumentsPage />}
            />

            {/* member */}
            <Route path="/members/:slug" element={<MemberPage />} />

            {/* organisation */}
            <Route path="/organisation/:slug" element={<OrganisationPage />} />

            <Route
              path="/athletes/register"
              element={
                <div className="registration-page">
                  <RegistrationFormDummy />
                </div>
              }
            />
            <Route
              path="/athletes/register/dummy"
              element={<RegistrationForm />}
            />
            {/* Awards */}
            <Route path="/award/:slug" element={<RajivGandhiAwardsPage />} />
            <Route
              path="/dronacharya-awards"
              element={<DronacharyaAwardsPage />}
            />
            <Route path="/document" element={<DocumentsPage />} />
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
