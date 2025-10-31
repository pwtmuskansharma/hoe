// import { Card, CardContent } from "../ui/card";
// import { Badge } from "../ui/badge";
// import { ImageWithFallback } from "../figma/ImageWithFallback";
// import { Button } from "../ui/button";
// import { MapPin, ExternalLink } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const venues = [
//   {
//     id: 1,
//     title: "RGKP Amin Village",
//     location: "Kurukshetra",
//     image: "/images/venue/kurukshetra.jpg",
//     description: "RGKP Amin Village in Kurukshetra",
//     sports: ["Badminton", "Volleyball", "Basketball", "Kabaddi"],
//     link: "https://www.google.com/maps?q=RGKP+Amin+Village+Kurukshetra",
//   },
//   {
//     id: 2,
//     title: "Sukhna lake",
//     location: "Chandigarh",
//     image: "/images/venue/shukna_lekh.jpg",
//     description: "Sukhna lake in Chandigarh",
//     sports: ["Football", "Athletics", "Boxing"],
//     link: "https://www.google.com/maps?q=Sukhna+Lake+Chandigarh",
//   },
//   {
//     id: 3,
//     title: "Multi Purpose Hall, CCS HAU",
//     location: "Hisar",
//     image: "/images/venue/hisar.jpeg",
//     description: "Multi Purpose Hall, CCS HAU in Hisar",
//     sports: ["Swimming", "Shooting", "Tennis"],
//     link: "https://www.google.com/maps?q=CCS+HAU+Hisar+Multi+Purpose+Hall",
//   },
//   {
//     id: 4,
//     title: "Athletics Stadium, Karan Stadium",
//     location: "Karnal",
//     image: "/images/venue/karnal.jpg",
//     description: "Athletics Stadium, Karan Stadium in Karnal",
//     sports: ["Cricket"],
//     link: "https://www.google.com/maps?q=Karan+Stadium+Karnal",
//   },
//   {
//     id: 5,
//     title: "Multi Purpose Hall, SAI National Boxing Academy",
//     location: "Rohtak",
//     image: "/images/venue/rohtak.jpg",
//     description: "Multi Purpose Hall, SAI National Boxing Academy in Rohtak.",
//     sports: ["Badminton", "Martial Arts", "Basketball"],
//     link: "https://www.google.com/maps?q=SAI+National+Boxing+Academy+Rohtak",
//   },
//   {
//     id: 6,
//     title: "Champions Aquatics Academy, Swimming Complex, Bahadurgarh",
//     location: "Jhajjar",
//     image: "/images/venue/jhajjar.jpeg",
//     description:
//       "Champions Aquatics Academy, Swimming Complex, Bahadurgarh in Jhajjar.",
//     sports: ["Hockey", "Athletics"],
//     link: "https://www.google.com/maps?q=Champions+Aquatics+Academy+Bahadurgarh",
//   },
//   {
//     id: 7,
//     title: "Tau Devi Lal Sports Complex, Sector 3",
//     location: "Panchkula",
//     image: "/images/venue/panchkula.webp",
//     description: "Tau Devi Lal Sports Complex, Sector 3 in Panchkula.",
//     sports: ["Football", "Track & Field", "Gymnastics"],
//     link: "https://www.google.com/maps?q=Tau+Devi+Lal+Sports+Complex+Panchkula",
//   },
//   {
//     id: 8,
//     title: "Multi Purpose Hall, Kurukshetra University",
//     location: "Kurukshetra",
//     image: "/images/venue/kurukshetra2.jpg",
//     description: "Multi Purpose Hall, Kurukshetra University in Kurukshetra.",
//     sports: ["Cricket"],
//     link: "https://www.google.com/maps?q=Kurukshetra+University+Multi+Purpose+Hall",
//   },
//   {
//     id: 9,
//     title: "Sports University of Haryana",
//     location: "Sonpiat",
//     image: "/images/venue/sonipat.jpg",
//     description: "Sports University of Haryana in Sonpiat.",
//     sports: ["Badminton", "Martial Arts", "Basketball"],
//     link: "https://www.google.com/maps?q=Sports+University+of+Haryana",
//   },
//   {
//     id: 10,
//     title:
//       "Pratap Singh Memorial Sr. Sec. School (Pratap Sports School), Kharkhoda",
//     location: "Sonipat",
//     image: "/images/venue/sonipat2.jpg",
//     description:
//       "Pratap Singh Memorial Sr. Sec. School (Pratap Sports School), Kharkhoda in Sonipat.",
//     sports: ["Hockey", "Athletics"],
//     link: "https://www.google.com/maps?q=Pratap+Sports+School+Kharkhoda",
//   },
//   {
//     id: 11,
//     title: "Progressive Table Tennis Academy, Sector - 65",
//     location: "Gurugram",
//     image: "/images/venue/gurugram.jfif",
//     description: "Progressive Table Tennis Academy, Sector - 65 in Gurugram.",
//     sports: ["Football", "Track & Field", "Gymnastics"],
//     link: "https://www.google.com/maps?q=Progressive+Table+Tennis+Academy+Gurugram",
//   },
//   {
//     id: 12,
//     title: "Nehru Stadium",
//     location: "Gurugram",
//     image: "/images/venue/gurugram2.jpeg",
//     description: "Nehru Stadium in Gurugram.",
//     sports: ["Football", "Track & Field", "Gymnastics"],
//     link: "https://www.google.com/maps?q=Nehru+Stadium+Gurugram",
//   },
//   {
//     id: 13,
//     title: "Athletics Stadium, TDLSC",
//     location: "Gurugram",
//     image: "/images/venue/gurugram3.jpeg",
//     description: "Athletics Stadium, TDLSC ",
//     sports: ["Football", "Track & Field", "Gymnastics"],
//     link: "https://www.google.com/maps?q=Tau+Devi+Lal+Stadium+Gurugram",
//   },
//   {
//     id: 14,
//     title: "Haryana State Sports Complex, Sector - 12",
//     location: "Faridabad",
//     image: "/images/venue/faridabad.jpeg",
//     description: "Haryana State Sports Complex, Sector - 12 in Faridabad.",
//     sports: ["Football", "Track & Field", "Gymnastics"],
//     link: "https://www.google.com/maps?q=Haryana+State+Sports+Complex+Faridabad",
//   },
//   {
//     id: 15,
//     title: "Indoor Sports Stadium, Sector - 31",
//     location: "Faridabad",
//     image: "/images/venue/faridabad2.png",
//     description: "Indoor Sports Stadium, Sector - 31 in Faridabad.",
//     sports: ["Football", "Track & Field", "Gymnastics"],
//     link: "https://www.google.com/maps?q=Indoor+Sports+Stadium+Sector+31+Faridabad",
//   },
// ];

// export function HaryanaVenuesGallery() {
//   return (
//     <section id="venues" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Venues & Facilities
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore breathtaking moments from Olympic sports, featuring the
//             world's greatest athletes in action across diverse disciplines and
//             competitions.
//           </p>
//         </div>

//         {/* ✅ Correct Swiper setup */}
//         <Swiper
//           spaceBetween={24}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           modules={[Autoplay, Pagination]}
//           className="pb-8"
//         >
//           {venues.map((venue) => (
//             <SwiperSlide key={venue.id}>
//               <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
//                 {/* Venue Image */}
//                 <div className="relative">
//                   <ImageWithFallback
//                     src={venue.image}
//                     alt={venue.title}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
//                     <a
//                       href={venue.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button
//                         size="sm"
//                         className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       >
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         View on Map
//                       </Button>
//                     </a>
//                   </div>

//                   {/* Location Badge */}
//                   <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
//                     {venue.location}
//                   </Badge>

//                   {/* Sports Badge */}
//                   <Badge variant="secondary" className="absolute top-3 right-3">
//                     {venue.sports[0]}
//                   </Badge>
//                 </div>

//                 {/* Content */}
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-gray-900 mb-2">
//                     {venue.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-3">
//                     {venue.description}
//                   </p>

//                   {/* Bottom Info */}
//                   <div className="flex items-center justify-between text-sm text-gray-500">
//                     <div className="flex items-center space-x-1">
//                       <MapPin className="h-4 w-4" />
//                       <span>{venue.location}</span>
//                     </div>
//                     <span>{venue.sports.length} Sports</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from "react";
// import { Card, CardContent } from "../ui/card";
// import { Badge } from "../ui/badge";
// import { ImageWithFallback } from "../figma/ImageWithFallback";
// import { Button } from "../ui/button";
// import { MapPin, ExternalLink } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { apiFetch } from "../../services/api/Dashboard"; // ✅ same way as players

// interface Venue {
//   id: number;
//   title: string;
//   location: string;
//   description: string;
//   link: string;
//   sports: string[];
//   image_url: string;
// }

// export function HaryanaVenuesGallery() {
//   const [venues, setVenues] = useState<Venue[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVenues = async () => {
//       try {
//         const res = await apiFetch("athlete-register");
//         console.log("Fetched Venue API Response:", res);
//         debugger;
//         const venueArray = res?.data?.data?.venues?.data;
//         console.log("Extracted Venues:", venueArray);
//         debugger;
//         if (Array.isArray(venueArray)) {
//           setVenues(venueArray);
//         } else {
//           console.warn("Unexpected venue data format:", venueArray);
//           setVenues([]);
//         }
//       } catch (error) {
//         console.error("Error fetching venues:", error);
//         setVenues([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVenues();
//   }, []);

//   if (loading) {
//     return (
//       <section id="venues" className="py-16 bg-white text-center">
//         <p className="text-lg text-gray-600">Loading Venues...</p>
//       </section>
//     );
//   }

//   return (
//     <section id="venues" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Venues 🏟️ & Facilities
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore breathtaking moments from Olympic sports, featuring the
//             world's greatest athletes in action across diverse disciplines and
//             competitions.
//           </p>
//         </div>

//         {/* ✅ Swiper Section */}
        // <Swiper
        //   spaceBetween={24}
        //   slidesPerView={1}
        //   pagination={{ clickable: true }}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        //   breakpoints={{
        //     640: { slidesPerView: 1 },
        //     768: { slidesPerView: 2 },
        //     1024: { slidesPerView: 3 },
        //   }}
        //   modules={[Autoplay, Pagination]}
        //   className="pb-8"
        // >
//           {venues.map((venue) => (
//             <SwiperSlide key={venue.id}>
//               <Card className="group hover:shadow-lg transition-all mb-8 duration-300 overflow-hidden">
//                 {/* Venue Image */}
//                 <div className="relative">
//                   <ImageWithFallback
//                     src={venue.image_url}
//                     alt={venue.title}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
//                     <a
//                       href={venue.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button
//                         size="sm"
//                         className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       >
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         View on Map
//                       </Button>
//                     </a>
//                   </div>

//                   {/* Location Badge */}
//                   <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
//                     {venue.location}
//                   </Badge>

//                   {/* Sports Badge */}
//                   {venue.sports?.length > 0 && (
//                     <Badge
//                       variant="secondary"
//                       className="absolute top-3 right-3"
//                     >
//                       {venue.sports[0]}
//                     </Badge>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-gray-900 mb-2">
//                     {venue.title}
//                   </h3>
//                   <p
//                     className="text-sm text-gray-600 mb-3"
//                     dangerouslySetInnerHTML={{ __html: venue.description }}
//                   />

//                   {/* Bottom Info */}
//                   <div className="flex items-center justify-between text-sm text-gray-500">
//                     <div className="flex items-center space-x-1">
//                       <MapPin className="h-4 w-4" />
//                       <span>{venue.location}</span>
//                     </div>
//                     <span>{venue.sports?.length || 0} Sports</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


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
                    <h3 className="text-lg font-semibold text-white drop-shadow-md leading-snug">
                      {venue.title}
                    </h3>
                    <p className="text-sm text-gray-200">{venue.location}</p>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="relative pb-5">
                  <p
                    className="text-sm text-gray-600 mb-4"
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
