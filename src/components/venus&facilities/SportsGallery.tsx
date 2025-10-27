import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { MapPin, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const venues = [
  {
    id: 1,
    title: "RGKP Amin Village",
    location: "Kurukshetra",
    image: "/images/venue/kurukshetra.jpg",
    description: "RGKP Amin Village in Kurukshetra",
    sports: ["Badminton", "Volleyball", "Basketball", "Kabaddi"],
    link: "https://www.google.com/maps?q=RGKP+Amin+Village+Kurukshetra",
  },
  {
    id: 2,
    title: "Sukhna lake",
    location: "Chandigarh",
    image: "/images/venue/shukna_lekh.jpg",
    description: "Sukhna lake in Chandigarh",
    sports: ["Football", "Athletics", "Boxing"],
    link: "https://www.google.com/maps?q=Sukhna+Lake+Chandigarh",
  },
  {
    id: 3,
    title: "Multi Purpose Hall, CCS HAU",
    location: "Hisar",
    image: "/images/venue/hisar.jpeg",
    description: "Multi Purpose Hall, CCS HAU in Hisar",
    sports: ["Swimming", "Shooting", "Tennis"],
    link: "https://www.google.com/maps?q=CCS+HAU+Hisar+Multi+Purpose+Hall",
  },
  {
    id: 4,
    title: "Athletics Stadium, Karan Stadium",
    location: "Karnal",
    image: "/images/venue/karnal.jpg",
    description: "Athletics Stadium, Karan Stadium in Karnal",
    sports: ["Cricket"],
    link: "https://www.google.com/maps?q=Karan+Stadium+Karnal",
  },
  {
    id: 5,
    title: "Multi Purpose Hall, SAI National Boxing Academy",
    location: "Rohtak",
    image: "/images/venue/rohtak.jpg",
    description: "Multi Purpose Hall, SAI National Boxing Academy in Rohtak.",
    sports: ["Badminton", "Martial Arts", "Basketball"],
    link: "https://www.google.com/maps?q=SAI+National+Boxing+Academy+Rohtak",
  },
  {
    id: 6,
    title: "Champions Aquatics Academy, Swimming Complex, Bahadurgarh",
    location: "Jhajjar",
    image: "/images/venue/jhajjar.jpeg",
    description:
      "Champions Aquatics Academy, Swimming Complex, Bahadurgarh in Jhajjar.",
    sports: ["Hockey", "Athletics"],
    link: "https://www.google.com/maps?q=Champions+Aquatics+Academy+Bahadurgarh",
  },
  {
    id: 7,
    title: "Tau Devi Lal Sports Complex, Sector 3",
    location: "Panchkula",
    image: "/images/venue/panchkula.webp",
    description: "Tau Devi Lal Sports Complex, Sector 3 in Panchkula.",
    sports: ["Football", "Track & Field", "Gymnastics"],
    link: "https://www.google.com/maps?q=Tau+Devi+Lal+Sports+Complex+Panchkula",
  },
  {
    id: 8,
    title: "Multi Purpose Hall, Kurukshetra University",
    location: "Kurukshetra",
    image: "/images/venue/kurukshetra2.jpg",
    description: "Multi Purpose Hall, Kurukshetra University in Kurukshetra.",
    sports: ["Cricket"],
    link: "https://www.google.com/maps?q=Kurukshetra+University+Multi+Purpose+Hall",
  },
  {
    id: 9,
    title: "Sports University of Haryana",
    location: "Sonpiat",
    image: "/images/venue/sonipat.jpg",
    description: "Sports University of Haryana in Sonpiat.",
    sports: ["Badminton", "Martial Arts", "Basketball"],
    link: "https://www.google.com/maps?q=Sports+University+of+Haryana",
  },
  {
    id: 10,
    title:
      "Pratap Singh Memorial Sr. Sec. School (Pratap Sports School), Kharkhoda",
    location: "Sonipat",
    image: "/images/venue/sonipat2.jpg",
    description:
      "Pratap Singh Memorial Sr. Sec. School (Pratap Sports School), Kharkhoda in Sonipat.",
    sports: ["Hockey", "Athletics"],
    link: "https://www.google.com/maps?q=Pratap+Sports+School+Kharkhoda",
  },
  {
    id: 11,
    title: "Progressive Table Tennis Academy, Sector - 65",
    location: "Gurugram",
    image: "/images/venue/gurugram.jfif",
    description: "Progressive Table Tennis Academy, Sector - 65 in Gurugram.",
    sports: ["Football", "Track & Field", "Gymnastics"],
    link: "https://www.google.com/maps?q=Progressive+Table+Tennis+Academy+Gurugram",
  },
  {
    id: 12,
    title: "Nehru Stadium",
    location: "Gurugram",
    image: "/images/venue/gurugram2.jpeg",
    description: "Nehru Stadium in Gurugram.",
    sports: ["Football", "Track & Field", "Gymnastics"],
    link: "https://www.google.com/maps?q=Nehru+Stadium+Gurugram",
  },
  {
    id: 13,
    title: "Athletics Stadium, TDLSC",
    location: "Gurugram",
    image: "/images/venue/gurugram3.jpeg",
    description: "Athletics Stadium, TDLSC ",
    sports: ["Football", "Track & Field", "Gymnastics"],
    link: "https://www.google.com/maps?q=Tau+Devi+Lal+Stadium+Gurugram",
  },
  {
    id: 14,
    title: "Haryana State Sports Complex, Sector - 12",
    location: "Faridabad",
    image: "/images/venue/faridabad.jpeg",
    description: "Haryana State Sports Complex, Sector - 12 in Faridabad.",
    sports: ["Football", "Track & Field", "Gymnastics"],
    link: "https://www.google.com/maps?q=Haryana+State+Sports+Complex+Faridabad",
  },
  {
    id: 15,
    title: "Indoor Sports Stadium, Sector - 31",
    location: "Faridabad",
    image: "/images/venue/faridabad2.png",
    description: "Indoor Sports Stadium, Sector - 31 in Faridabad.",
    sports: ["Football", "Track & Field", "Gymnastics"],
    link: "https://www.google.com/maps?q=Indoor+Sports+Stadium+Sector+31+Faridabad",
  },
];

export function HaryanaVenuesGallery() {
  return (
    <section id="venues" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Venues & Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore breathtaking moments from Olympic sports, featuring the
            world's greatest athletes in action across diverse disciplines and
            competitions.
          </p>
        </div>

        {/* ✅ Correct Swiper setup */}
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
          {venues.map((venue) => (
            <SwiperSlide key={venue.id}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Venue Image */}
                <div className="relative">
                  <ImageWithFallback
                    src={venue.image}
                    alt={venue.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <a
                      href={venue.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Map
                      </Button>
                    </a>
                  </div>

                  {/* Location Badge */}
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                    {venue.location}
                  </Badge>

                  {/* Sports Badge */}
                  <Badge variant="secondary" className="absolute top-3 right-3">
                    {venue.sports[0]}
                  </Badge>
                </div>

                {/* Content */}
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {venue.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {venue.description}
                  </p>

                  {/* Bottom Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{venue.location}</span>
                    </div>
                    <span>{venue.sports.length} Sports</span>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// import { Card, CardContent } from "../ui/card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// export function HaryanaVenuesGallery() {
//   const venues = [
//     {
//       title: "RGKP Amin Village",
//       location: "Kurukshetra",
//       image: "/images/venues/venue1.jpeg",
//     },
//     {
//       title: "Sukhna Lake",
//       location: "Chandigarh",
//       image: "/images/venues/venue2.jpeg",
//     },
//     {
//       title: "Multi Purpose Hall, CCS HAU",
//       location: "Hisar",
//       image: "/images/venues/venue3.jpeg",
//     },
//     {
//       title: "Athletics Stadium, Karan Stadium",
//       location: "Karnal",
//       image: "/images/venues/venue4.jpeg",
//     },
//     {
//       title: "Multi Purpose Hall, SAI National Boxing Academy",
//       location: "Rohtak",
//       image: "/images/venues/venue5.jpeg",
//     },
//     {
//       title: "Champions Aquatics Academy, Swimming Complex, Bahadurgarh",
//       location: "Jhajjar",
//       image: "/images/venues/venue6.jpeg",
//     },
//     {
//       title: "Tau Devi Lal Sports Complex, Sector 3",
//       location: "Panchkula",
//       image: "/images/venues/venue7.jpeg",
//     },
//     {
//       title: "Multi Purpose Hall, Kurukshetra University",
//       location: "Kurukshetra",
//       image: "/images/venues/venue8.jpeg",
//     },
//     {
//       title: "Sports University of Haryana",
//       location: "Sonipat",
//       image: "/images/venues/venue9.jpeg",
//     },
//     {
//       title:
//         "Pratap Singh Memorial Sr. Sec. School (Pratap Sports School), Kharkhoda",
//       location: "Sonipat",
//       image: "/images/venues/venue10.jpeg",
//     },
//     {
//       title: "Progressive Table Tennis Academy, Sector - 65",
//       location: "Gurugram",
//       image: "/images/venues/venue11.jpeg",
//     },
//     {
//       title: "Nehru Stadium",
//       location: "Gurugram",
//       image: "/images/venues/venue12.jpeg",
//     },
//     {
//       title: "Athletics Stadium, TDLSC",
//       location: "Gurugram",
//       image: "/images/venues/venue13.jpeg",
//     },
//     {
//       title: "Haryana State Sports Complex, Sector - 12",
//       location: "Faridabad",
//       image: "/images/venues/venue14.jpeg",
//     },
//     {
//       title: "Indoor Sports Stadium, Sector - 31",
//       location: "Faridabad",
//       image: "/images/venues/venue15.jpeg",
//     },
//   ];

//   return (
//     <section id="venues" className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800">
//           Haryana Sports Venues
//         </h2>

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
//           {venues.map((venue, index) => (
//             <SwiperSlide key={index}>
//               <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                 <img
//                   src={venue.image}
//                   alt={venue.title}
//                   className="w-full h-60 object-cover"
//                 />
//                 <CardContent className="p-4 bg-white">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {venue.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm">{venue.location}</p>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
