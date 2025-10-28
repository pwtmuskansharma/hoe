// import { useState, useEffect } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Button } from "./ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const carouselImages = [
//   {
//     id: 1,
//     src: "/images/banner.jpeg",
//   },
//   {
//     id: 2,
//     src: "/images/banner-2.jpeg",
//   },
//   // {
//   //   id: 3,
//   //   src: "/images/banner3.webp",
//   // },
//   // {
//   //   id: 4,
//   //   src: "/images/banner4.webp",
//   // },
//   // {
//   //   id: 6,
//   //   src: "/images/banner5.webp",
//   // },
//   //   {
//   //   id: 7,
//   //   src: "/images/banner6.webp",
//   // },
//   // {
//   //   id: 8,
//   //   src: "/images/banner7.webp",
//   // },
//   // {
//   //   id: 9,
//   //   src: "/images/banner8.webp",
//   // },
//   // {
//   //   id: 10,
//   //   src: "/images/banner9.webp",
//   // },
//   // {
//   //   id: 11,
//   //   src: "/images/banner10.webp",
//   // }
// ];

// export function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Auto-advance every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const goToPrevious = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex(
//       currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full h-96 lg:h-[700px] overflow-hidden">
//       {/* Images */}
//       <div className="relative w-full h-full">
//         {carouselImages.map((image, index) => (
//           <div
//             key={image.id}
//             className={`absolute inset-0 transition-opacity duration-500 ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <ImageWithFallback
//               src={image.src}
//               // alt={image.alt}
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay gradient
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
//             */}
//             <div className="absolute inset-0 " />

//             {/* Content overlay */}
//             <div className="absolute inset-0 flex items-center justify-start">
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                 <div className="max-w-2xl text-white">
//                   <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//                     {/* {image.title} */}
//                   </h2>
//                   <p className="text-lg lg:text-xl text-gray-200">
//                     {/* {image.subtitle} */}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <Button
//         variant="ghost"
//         size="sm"
//         onClick={goToPrevious}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-12 w-12 rounded-full p-0"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </Button>

//       <Button
//         variant="ghost"
//         size="sm"
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-12 w-12 rounded-full p-0"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </Button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {carouselImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? 'bg-white scale-110'
//                 : 'bg-white/50 hover:bg-white/70'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    id: 1,
    src: "/images/banner.jpeg",
  },
  // {
  //   id: 2,
  //   src: "/images/banner-2.jpeg",
  // },
  // More images can be added here
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMultiple = carouselImages.length > 1;

  useEffect(() => {
    if (!isMultiple) return; // Agar ek hi image hai to slider mat chalao

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(timer);
  }, [isMultiple]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full aspect-[16/5.8] overflow-hidden">
      {/* Images */}
      <div className="relative w-full h-full bg-transparent">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <ImageWithFallback
              src={image.src}
              className="object-contain object-center"
            />

            <div className="absolute inset-0 flex items-center justify-start px-3 sm:px-6 md:px-10 lg:px-16">
              <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-md sm:max-w-xl md:max-w-2xl text-white">
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                    {/* {image.title} */}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    {/* {image.subtitle} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (sirf tab dikhe jab multiple images ho) */}
      {isMultiple && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full p-0"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full p-0"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
