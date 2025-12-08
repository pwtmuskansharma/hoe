import { Trophy, Calendar } from "lucide-react";

const awards = [
  {
    id: 1,
    player: "Om Parkash",
    game: "Volleyball",
    year: "2003",
    age: "34",
    achievement: "National level gold medalist",
    image: "/images/sports-images/Om Parkash.jpg",
  },
  {
    id: 2,
    player: "Girraj Singh",
    game: "Para Athletic",
    year: "2013",
    age: "29",
    achievement: "Asian Para Games Silver Medalist",
    image: "/images/sports-images/girraj singh.jpg",
  },
  {
    id: 3,
    player: "Bhupender Singh",
    game: "Athletic",
    year: "2017",
    age: "32",
    achievement: "National Champion – Javelin",
    image: "/images/sports-images/Bhupender Singh.jfif",
  },
  // ---- बाकी players भी इसी तरह add कर दें ----
];

export function DhyanchandAwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-md">
            <Trophy className="w-6 h-6  text-white" />
            <h2 className="text-xl sm:text-xl font-bold tracking-wide uppercase text-center">
              Dhyanchand Awards
            </h2>
          </div>
          <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-3">
            Celebrating India’s elite athletes whose dedication and achievements
            have illuminated the nation’s sporting history.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="relative bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{
                animation: `fadeIn 0.4s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Player Image */}
              <img
                src={award.image}
                alt={award.player}
                className=" w-full h-[360px] object-cover transition-all duration-300 group-hover:opacity-20"
              />

              {/* Overlay Details on Hover */}
              <div className="absolute inset-0 flex flex-col mt-20 text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h2 className="text-xl font-bold text-black mb-1">
                  {award.player}
                </h2>

                <p className="text-black text-sm mb-1">
                  <span className="font-semibold text-black">Age:</span>{" "}
                  {award.age}
                </p>

                <p className="text-black text-sm mb-1">
                  <span className="font-semibold text-black">Sport:</span>{" "}
                  {award.game}
                </p>

                <p className="text-black text-sm mb-3">
                  <span className="font-semibold text-black">Achievement:</span>{" "}
                  {award.achievement}
                </p>

                <div className="flex items-center justify-center gap-2 text-black font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{award.year}</span>
                </div>
              </div>

              {/* Bottom Default Info */}
              <div className="p-4 text-center bg-white group-hover:opacity-0 transition-all duration-200">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800">
                  {award.player}
                </h3>
                <p className="text-gray-700 text-sm">{award.game}</p>

                <div className="flex justify-center items-center gap-2 mt-2 text-blue-600 font-medium text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{award.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
