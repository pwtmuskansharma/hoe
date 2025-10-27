import { Trophy, Medal, Calendar } from "lucide-react";

const awards = [
  { id: 1, player: "Narender Singh Saini", game: "Hockey", year: "—" },
  { id: 2, player: "Sanjay Bhardwaj", game: "Cricket", year: "—" },
  { id: 3, player: "Balwan Singh", game: "Kabaddi", year: "2006" },
  { id: 4, player: "Ajay Kumar Bansal", game: "Hockey", year: "—" },
  { id: 5, player: "Gurdial Singh Bangu", game: "Hockey", year: "2000" },
  { id: 6, player: "Smt. Sunil Dabas", game: "Kabaddi", year: "2012" },
  { id: 7, player: "Hargobind Singh", game: "Athletic", year: "1998" },
  { id: 8, player: "Krishna Kumar", game: "Kabaddi", year: "2020" },
  { id: 9, player: "Bahadur Singh", game: "Athletic", year: "1998" },
  { id: 11, player: "Anup Singh", game: "Boxing", year: "2003" },
  { id: 12, player: "Mehabir Parsad ", game: "Wrestling", year: "2014" },
  { id: 13, player: "Rambir Khokar ", game: "Kabaddi", year: "1998" },
  { id: 14, player: "Anoop Singh Dahiya", game: "Wrestling", year: "2015" },
  { id: 15, player: "Om Parkash Dahiya ", game: "Wrestling", year: "2020" },
  { id: 16, player: "Jagdish Singh ", game: "Boxing", year: "2007" },
  { id: 17, player: "Mahabir Singh ", game: "Wrestling", year: "2016" },
  { id: 18, player: "Sarkar Talwar ", game: "Cricket", year: "2021" },
  { id: 19, player: "Sh. Swatantar Raj Singh ", game: "Boxing", year: "2015" },
];

export function DronacharyaAwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-md">
            <Trophy className="w-6 h-6  text-white" />
            <h2 className="text-xl sm:text-xl font-bold tracking-wide uppercase text-center">
              Dronacharya Awards
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
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 text-center transform hover:-translate-y-1"
              style={{
                animation: `fadeIn 0.4s ease-out ${index * 0.08}s both`,
              }}
            >
              <div className="flex justify-center mb-3">
                <Medal className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1">
                {award.player}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">{award.game}</p>
              <div className="flex justify-center items-center gap-2 mt-3 text-blue-600 font-medium text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
