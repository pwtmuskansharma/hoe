import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { MapPin, ExternalLink, Flame, Phone } from "lucide-react";
import { apiFetch } from "../../services/api/Dashboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

interface Venue {
  id: number;
  title: string;
  location: string;
  description: string;
  link: string;
  sports: string[];
  image_url: string;
  contact?: string[];
}

export function HaryanaVenuesGallery() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const res = await apiFetch("athlete-register");
        console.log("Fetched Venue API Response:", res);
        const venueArray = res?.data?.data?.venues?.data;
        if (Array.isArray(venueArray)) {
          setVenues(venueArray);
        } else {
          setVenues([]);
        }
      } catch (error) {
        console.error("Error fetching venues:", error);
        setVenues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  // 🟢 Loading state
  if (loading) {
    return (
      <section id="venues" className="py-16 bg-white text-center">
        <p className="text-lg text-gray-600">Loading Venues...</p>
      </section>
    );
  }

  // 🟡 Hide section if no data
  if (!venues || venues.length === 0) {
    return null;
  }

  // 🟢 Show only first 6 venues
  const visibleVenues = venues.slice(0, 6);

  return (
    <section id="venues" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Venues 🏟️ & Facilities
          </h2>
          <p className="text-gray-600">
            Explore India's top sporting complexes and world-class training
            facilities.
          </p>
        </div>

        {/* ✅ Swiper Slider Section */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="pb-8"
        >
          {visibleVenues.map((venue) => (
            <SwiperSlide key={venue.id}>
              <Card className="group hover:shadow-lg transition-all mb-8 duration-300 overflow-hidden">
                {/* Image with zoom, overlay, gradient, and map link */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={venue.image_url}
                    alt={venue.title}
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Map link icon */}
                  {venue.link && (
                    <a
                      href={venue.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${venue.title} in Google Maps`}
                      className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </a>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center pl-5 text-left translate-y-12 z-10">
                    <h3 className="text-lg font-semibold text-white drop-shadow-md leading-snug ">
                      {venue.title}
                    </h3>
                    <p className="text-sm text-gray-200">{venue.location}</p>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="relative pb-5">
                  <p
                    className="text-sm text-gray-600 mb-4 mt-6"
                    dangerouslySetInnerHTML={{ __html: venue.description }}
                  />

                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <MapPin className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-gray-700">Location</span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-sm">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span className="font-medium text-gray-700">Sports</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {venue.sports?.map((sport) => (
                      <Badge
                        key={sport}
                        variant="secondary"
                        className="bg-orange-100 text-orange-700 hover:bg-orange-200"
                      >
                        {sport}
                      </Badge>
                    ))}
                  </div>

                  {/* Optional contact numbers */}
                  {venue.contact && venue.contact.length > 0 && (
                    <div className="mt-4 flex justify-end">
                      <div className="flex items-center gap-4 text-sm text-gray-700 flex-wrap sm:flex-nowrap">
                        {venue.contact.slice(0, 2).map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone}`}
                            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                          >
                            <Phone className="h-3.5 w-3.5 text-green-600" />
                            <span>{phone}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Show button only if >6 venues */}
        {venues.length > 4 && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/venues")}
            >
              Explore More Venues
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
