// import { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ImageWithFallback } from "../figma/ImageWithFallback"; // use this instead of next/image

// // Example players data
// const players = [
//   { id: 1, name: "PLAYER 1", src: "/images/player-1.webp" },
//   { id: 2, name: "PLAYER 2", src: "/images/player-2.webp" },
//   { id: 3, name: "PLAYER 3", src: "/images/player-3.webp" },
//   { id: 4, name: "PLAYER 4", src: "/images/player-4.webp" },
//   { id: 5, name: "PLAYER 5", src: "/images/player-5.webp" },
//   { id: 6, name: "PLAYER 6", src: "/images/player-6.webp" },
//   { id: 7, name: "PLAYER 7", src: "/images/player-1.webp" },
//   { id: 8, name: "PLAYER 8", src: "/images/player-2.webp" },
// ];

// export function PlayerCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerSlide = 4; // show 4 players at once
//   const totalSlides = Math.ceil(players.length / itemsPerSlide);

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//   };

//   // 🔹 Auto-rotate slides every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(goToNext, 3000); // 3000ms = 3s
//     return () => clearInterval(interval); // cleanup when component unmounts
//   }, [totalSlides]);

//   return (
//     <div className="relative w-full max-w-7xl mx-auto mb-16">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Champions in Action
//       </h2>

//       {/* Flex container for arrows + player grid */}
//       <div className="flex items-center justify-center gap-4">
//         {/* Left Arrow */}
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={goToPrevious}
//           className="bg-white/70 hover:bg-white/90 text-black h-12 w-12 rounded-full shrink-0"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </Button>

//         {/* Player container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500 w-full">
//           {players
//             .slice(
//               currentIndex * itemsPerSlide,
//               currentIndex * itemsPerSlide + itemsPerSlide
//             )
//             .map((player) => (
//               <div
//                 key={player.id}
//                 className="flex flex-col items-center text-center border rounded-2xl shadow p-4"
//               >
//                 <ImageWithFallback
//                   src={player.src}
//                   alt={player.name}
//                   className="w-full h-72 object-contain"
//                 />
//                 <p className="mt-2 font-semibold">{player.name}</p>
//               </div>
//             ))}
//         </div>

//         {/* Right Arrow */}
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={goToNext}
//           className="bg-white/70 hover:bg-white/90 text-black h-12 w-12 rounded-full shrink-0"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </Button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-black scale-110"
//                 : "bg-gray-400 hover:bg-gray-600"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

// Define types
interface SportData {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface Player {
  id: number;
  name: string;
  position: string;
  profile_image: string;
  sport?: {
    data?: SportData[];
  };
}

export function PlayerCarousel() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(players.length / itemsPerSlide);

  // ✅ Fetch players using fetch
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch("https://hoa.premiercourses.in/api/players");
        const data = await res.json();
        console.log("Fetched Players Data:", data);
        setPlayers(data?.data || []);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [players]);

  return (
    <div className="relative w-full max-w-full mx-auto mb-16 px-4 max-h-full  ">
      <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-black rounded-3xl p-8 shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-md">
          Champions in Action
        </h2>
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="bg-white/70 hover:bg-white/90 text-black h-12 w-12 rounded-full shrink-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Player Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500 w-full">
            {players.length > 0 ? (
              players
                .slice(
                  currentIndex * itemsPerSlide,
                  currentIndex * itemsPerSlide + itemsPerSlide
                )
                .map((player) => {
                  const sportName =
                    player.sport?.data?.[0]?.name || "Unknown Sport";

                  return (
                    <div
                      key={player.id}
                      className="flex flex-col items-center text-center border border-gray-700 bg-gray-800/80 hover:bg-gray-700/90 transition-all duration-300 rounded-2xl shadow-lg p-4"
                    >
                      <div className="w-full h-72 overflow-hidden rounded-xl">
                        <ImageWithFallback
                          src={player.profile_image}
                          alt={player.name}
                          className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
                        />
                      </div>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {player.name}
                      </p>
                      <p className="text-sm text-gray-300">
                        {player.position || "—"}
                      </p>
                      <p className="text-sm text-yellow-400 font-medium">
                        {sportName}
                      </p>
                    </div>
                  );
                })
            ) : (
              <p className="text-white text-center col-span-4">
                Loading players...
              </p>
            )}
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="bg-white/70 hover:bg-white/90 text-black h-12 w-12 rounded-full shrink-0"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center py-7 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-400 scale-110"
                  : "bg-gray-500 hover:bg-yellow-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
