// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { Badge } from "./ui/badge";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "./ui/button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Dignitaries Data
// const dignitaries = [
//   {
//     id: 1,
//     name: "Nayab Singh Saini",
//     position: "President",
//     organization: "Haryana Olympic Association",
//     bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
//     image: "images/d1.jpeg",
//   },
//   {
//     id: 2,
//     name: "Manohar Lal Khattar",
//     position: "Secretary General",
//     organization: "Haryana Olympic Association",
//     bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
//     image: "images/d3.jpeg",
//   },
//   {
//     id: 3,
//     name: "Nayab Singh Saini",
//     position: "Director of Operations",
//     organization: "Haryana Olympic Association",
//     bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
//     image: "images/d4.jpeg",
//   },
//   {
//     id: 4,
//     name: "Pt. Usha",
//     position: "Director of Operations",
//     organization: "Haryana Olympic Association",
//     bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
//     image: "images/d2_.jpeg",
//   },
// ];

// // News Data
// const newsArticles = [
//   {
//     id: 1,
//     title: "Haryana Athletes Shine at National Games 2025",
//     excerpt:
//       "Haryana's athletes won multiple gold and silver medals at the National Games, showcasing the state's growing sports talent.",
//     category: "Achievements",
//     date: "2024-09-20",
//     readTime: "5 min read",
//     image: "images/news1.jpg",
//   },
//   {
//     id: 2,
//     title: "Haryana Olympic Association Launches Youth Sports Initiative",
//     excerpt:
//       "HOA introduces a new program to nurture young athletes across Haryana, providing training, mentorship, and scholarships.",
//     category: "Youth Development",
//     date: "2024-09-18",
//     readTime: "3 min read",
//     image: "images/d2_.jpeg",
//   },
//   {
//     id: 3,
//     title: "Haryana Hosts State-Level Athletics Championship",
//     excerpt:
//       "The state-level athletics championship brought together top talent from across Haryana, promoting healthy competition and sportsmanship.",
//     category: "Events",
//     date: "2024-09-15",
//     readTime: "4 min read",
//     image: "images/news3.jpeg",
//   },
// ];

// export function CombinedHOASection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide for dignitaries
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + dignitaries.length) % dignitaries.length
//     );
//   };

//   // News slider settings
//   const newsSettings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true,
//     arrows: false,
//   };

//   return (
//     <section className="py-16 bg-[#f8f9fa]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Left Column - News */}
//           <div className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
//             <div className="text-center lg:text-left mb-8">
//               <h2 className="text-3xl font-semibold text-[#1b1f24] mb-2 border-l-4 border-sky-600 pl-3">
//                 Latest HOA News
//               </h2>
//               <p className="text-gray-600 text-base">
//                 Stay updated with the latest developments in the Olympic
//                 movement, upcoming events, and inspiring stories from Haryana.
//               </p>
//             </div>

//             <Slider {...newsSettings}>
//               {newsArticles.map((article) => (
//                 <div key={article.id} className="px-2">
//                   <div className="overflow-hidden rounded-xl">
//                     <ImageWithFallback
//                       src={article.image}
//                       alt={article.title}
//                       className=" object-contain "
//                     />
//                     <div className="p-4">
//                       <Badge className="mb-3 bg-blue-100 text-blue-800 font-medium">
//                         {article.category}
//                       </Badge>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                         {article.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm">{article.excerpt}</p>
//                       <div className="mt-3 text-sm text-gray-500">
//                         {article.date} • {article.readTime}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>

//             <div className="text-center mt-8">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="bg-white text-blue-900 hover:bg-blue-50 border border-blue-800"
//               >
//                 View All News
//               </Button>
//             </div>
//           </div>

//           {/* Right Column - Dignitaries */}
//           <div className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
//             <div className="text-center lg:text-left mb-8">
//               <h2 className="text-3xl font-semibold text-[#1b1f24] mb-2 border-l-4 border-green-600 pl-3">
//                 Guiding Force Behind HOA
//               </h2>
//               <p className="text-gray-600 text-base">
//                 Meet the distinguished leaders guiding Haryana's Olympic journey
//                 and inspiring sporting excellence across the state.
//               </p>
//             </div>

//             <div className="relative flex items-center justify-center overflow-hidden">
//               <div
//                 className="flex transition-transform duration-700 ease-in-out w-full"
//                 style={{
//                   transform: `translateX(-${currentIndex * 100}%)`,
//                 }}
//               >
//                 {dignitaries.map((d, idx) => (
//                   <div
//                     key={d.id}
//                     className="w-full flex-shrink-0 flex flex-col items-center text-center"
//                   >
//                     <div className="relative w-full overflow-hidden rounded-xl">
//                       <ImageWithFallback
//                         src={d.image}
//                         alt={d.name}
//                         className=" object-contain rounded-lg"
//                       />
//                       <Badge className="absolute top-4 left-4 bg-green-600 text-white text-sm font-medium">
//                         {d.position}
//                       </Badge>
//                     </div>
//                     <div className="mt-4">
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         {d.name}
//                       </h3>
//                       <p className="text-sm text-gray-500 mb-2">
//                         {d.organization}
//                       </p>
//                       <p className="text-gray-600 text-sm leading-relaxed px-2 md:px-4">
//                         {d.bio}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Navigation Arrows */}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={goToPrevious}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2
//              bg-white/80 hover:bg-white text-gray-800
//              h-9 w-9 rounded-full shadow z-20 block"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={goToNext}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2
//              bg-white/80 hover:bg-white text-gray-800
//              h-9 w-9 rounded-full shadow z-20 block"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </Button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dignitaries Data
const dignitaries = [
  {
    id: 1,
    name: " Sh.Nayab Singh Saini",
    position: "President",

    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
    image: "images/d1.jpeg",
  },
  {
    id: 2,
    name: " Sh.Manohar Lal Khattar",
    position: "Secretary General",

    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
    image: "images/d3.jpeg",
  },
  {
    id: 3,
    name: " Sh.Nayab Singh Saini",
    position: "Director of Operations",

    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
    image: "images/d4.jpeg",
  },
  {
    id: 4,
    name: "Smt.Pt. Usha",
    position: "Director of Operations",

    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development.",
    image: "images/d2_.jpeg",
  },
];

// News Data
const newsArticles = [
  {
    id: 1,
    title: "Haryana Athletes Shine at National Games 2025",
    excerpt:
      "Haryana's athletes won multiple gold and silver medals at the National Games, showcasing the state's growing sports talent.",
    category: "Achievements",
    date: "2024-09-20",
    readTime: "5 min read",
    image: "images/news1.jpg",
  },
  // {
  //   id: 2,
  //   title: "Haryana Olympic Association Launches Youth Sports Initiative",
  //   excerpt:
  //     "HOA introduces a new program to nurture young athletes across Haryana, providing training, mentorship, and scholarships.",
  //   category: "Youth Development",
  //   date: "2024-09-18",
  //   readTime: "3 min read",
  //   image: "images/d2_.jpeg",
  // },
  {
    id: 3,
    title: "Haryana Hosts State-Level Athletics Championship",
    excerpt:
      "The state-level athletics championship brought together top talent from across Haryana, promoting healthy competition and sportsmanship.",
    category: "Events",
    date: "2024-09-15",
    readTime: "4 min read",
    image: "images/news3.jpeg",
  },
];

export function CombinedHOASection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsSlide, setNewsSlide] = useState(0);
  const newsSliderRef = useRef<Slider | null>(null);

  // Unified 4-second interval for both sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
      setNewsSlide((prev) => (prev + 1) % newsArticles.length);

      // Move news slider manually to sync timing
      if (newsSliderRef.current) {
        newsSliderRef.current.slickGoTo((newsSlide + 1) % newsArticles.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [newsSlide]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + dignitaries.length) % dignitaries.length
    );
  };

  // News slider settings (manual control)
  const newsSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    beforeChange: (_: number, next: number) => setNewsSlide(next),
  };

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - News */}
          <div className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-semibold text-[#1b1f24] mb-2 border-l-4 border-sky-600 pl-3">
                Latest HOA News
              </h2>
              <p className="text-gray-600 text-base">
                Stay updated with the latest developments in the Olympic
                movement, upcoming events, and inspiring stories from Haryana.
              </p>
            </div>

            <Slider ref={newsSliderRef} {...newsSettings}>
              {newsArticles.map((article) => (
                <div key={article.id} className="px-2">
                  <div className="overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="object-contain"
                    />
                    <div className="p-4">
                      <Badge className="mb-3 bg-blue-100 text-blue-800 font-medium">
                        {article.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{article.excerpt}</p>
                      <div className="mt-3 text-sm text-gray-500">
                        {article.date} • {article.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="text-center mt-8">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-900 hover:bg-blue-50 border border-blue-800"
              >
                View All News
              </Button>
            </div>
          </div>

          {/* Right Column - Dignitaries */}
          <div className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-semibold text-[#1b1f24] mb-2 border-l-4 border-green-600 pl-3">
                Guiding Force Behind HOA
              </h2>
              <p className="text-gray-600 text-base">
                Meet the distinguished leaders guiding Haryana's Olympic journey
                and inspiring sporting excellence across the state.
              </p>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out w-full"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {dignitaries.map((d) => (
                  <div
                    key={d.id}
                    className="w-full flex-shrink-0 flex flex-col items-center text-center"
                  >
                    <div className="relative w-full overflow-hidden rounded-xl">
                      <ImageWithFallback
                        src={d.image}
                        alt={d.name}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900">{d.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed px-2 md:px-4">
                        {d.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Dots below */}
            <div className="flex justify-center mt-4 space-x-2">
              {dignitaries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 mt-14 rounded-full transition-all duration-300 ${currentIndex === index
                      ? "bg-gray-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                    }`}
                ></button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
