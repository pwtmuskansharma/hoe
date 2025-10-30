import { useState, useEffect } from "react";
import { MapPin, Flame, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { apiFetch } from "../../services/api/Dashboard";

interface Venue {
  id: number;
  title: string;
  location: string;
  description: string;
  link: string;
  sports: string[];
  image_url: string;
  is_active: boolean;
}

interface PaginationMeta {
  current_page: number;
  last_page: number;
  links: { url: string | null; label: string; active: boolean }[];
}

export function Venues() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [page, setPage] = useState(1);

  const fetchVenues = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await apiFetch(`view-all-venues?page=${pageNum}`);
      console.log("Fetched Venues Data:", res);

      if (Array.isArray(res?.data?.data)) {
        setVenues(res.data.data);
        setMeta(res.data.meta || null);
      } else if (Array.isArray(res?.data)) {
        setVenues(res.data);
        setMeta(null);
      } else {
        console.warn("Unexpected venues format:", res);
        setVenues([]);
        setMeta(null);
      }
    } catch (error) {
      console.error("Error fetching venues:", error);
      setVenues([]);
      setMeta(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVenues(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (meta && newPage >= 1 && newPage <= meta.last_page) {
      setPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading venues...
      </div>
    );
  }

  if (venues.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No venues available.
      </div>
    );
  }

  return (
    <section id="venues" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Venues 🏟️ & Facilities
          </h2>
          <p className="text-gray-600">
            Explore India's top sporting complexes and world-class training
            facilities.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {venues.map((venue) => (
            <Card
              key={venue.id}
              className="w-[90%] sm:w-[90%] lg:w-[360px] overflow-hidden rounded-xl border border-gray-300 hover:shadow-lg transition-shadow duration-300 bg-white group relative"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={venue.image_url}
                  alt={venue.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Google Maps Link */}
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

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

                {/* Title & Location */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-left z-20">
                  <h3 className="text-lg font-semibold text-white drop-shadow-md leading-snug">
                    {venue.title}
                  </h3>
                  <p className="text-sm text-gray-200">{venue.location}</p>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="relative pb-5">
                <div
                  className="text-sm text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: venue.description }}
                />

                <div className="flex items-center gap-2 mb-3 text-sm">
                  <MapPin className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium text-gray-700">
                    {venue.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-medium text-gray-700">Sports</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {Array.isArray(venue.sports) &&
                    venue.sports.map((sport, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-orange-100 text-orange-700 hover:bg-orange-200"
                      >
                        {sport}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        {meta && meta.last_page > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            <Button
              variant="outline"
              className="px-4 py-2 text-sm"
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </Button>

            {meta.links
              .filter((link) => !link.label.includes("&laquo;") && !link.label.includes("&raquo;"))
              .map((link, idx) => (
                <Button
                  key={idx}
                  variant={link.active ? "default" : "outline"}
                  className={`px-4 py-2 text-sm ${
                    link.active ? "bg-orange-700 text-white" : "text-orange-700"
                  }`}
                  onClick={() => {
                    const url = link.url;
                    const newPage = url
                      ? parseInt(url.split("page=")[1] || "1")
                      : 1;
                    handlePageChange(newPage);
                  }}
                >
                  {link.label}
                </Button>
              ))}

            <Button
              variant="outline"
              className="px-4 py-2 text-sm"
              disabled={page === meta.last_page}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
