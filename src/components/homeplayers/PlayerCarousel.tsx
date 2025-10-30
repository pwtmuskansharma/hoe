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
import { apiFetch } from "../../services/api/Dashboard";

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
        const res = await apiFetch("players");
        const data = res;
        console.log("Fetched Players Data:", data);

        // ✅ Ensure it's an array
        if (Array.isArray(data?.data?.data)) {
          setPlayers(data.data?.data);
        } else {
          console.warn("Unexpected data format:", data);
          setPlayers([]);
        }
      } catch (error) {
        console.error("Error fetching players:", error);
        setPlayers([]);
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
  // console.log("players.length", players.length);

  return (
    <div className="relative ">
      <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-black  p-6 sm:p-8 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8 drop-shadow-md">
          Haryana Hero's
        </h2>

        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Player Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-500 w-full">
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
                      className="flex flex-col items-center text-center border border-gray-700 bg-gray-800/80 hover:bg-gray-700/90 transition-all duration-300 rounded-2xl shadow-lg p-3 sm:p-4"
                    >
                      <div className="w-full aspect-[3/4] overflow-hidden rounded-xl">
                        <ImageWithFallback
                          src={player.profile_image}
                          alt={player.name}
                          className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
                        />
                      </div>
                      <p className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-white">
                        {player.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {player.position || "—"}
                      </p>
                      <p className="text-xs sm:text-sm text-yellow-400 font-medium">
                        {sportName}
                      </p>
                    </div>
                  );
                })
            ) : (
              <p className="text-white text-center col-span-full py-8 text-sm sm:text-base">
                Loading players...
              </p>
            )}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center py-6 sm:py-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
