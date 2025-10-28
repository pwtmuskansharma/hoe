import { Trophy, Medal, Calendar } from "lucide-react";

const arjunaAwards = [
  { id: 1, player: "Uday Chand", game: "Wrestling", year: "1961" },
  { id: 2, player: "Bhim Singh", game: "Athletic", year: "1967" },
  { id: 3, player: "Manmohan Singh", game: "Basketball", year: "1971" },
  { id: 4, player: "Jagroop Singh", game: "Wrestling", year: "1973" },
  { id: 5, player: "Ajmer Singh", game: "Basketball", year: "1982" },
  { id: 6, player: "Rajinder Singh", game: "Wrestling", year: "1990" },
  { id: 7, player: "Satywan", game: "Wrestling", year: "—" },
  { id: 8, player: "Ashok Kumar", game: "Wrestling", year: "—" },
  { id: 9, player: "Jitender Kumar", game: "Boxing", year: "—" },
  { id: 10, player: "Mamta Kharb", game: "Hockey", year: "—" },
  { id: 11, player: "Sunder Singh", game: "Kabaddi", year: "—" },
  { id: 12, player: "Akhil Kumar", game: "Boxing", year: "—" },
  { id: 13, player: "Sumit Malik", game: "Wrestling", year: "—" },
  { id: 14, player: "Satyawart Kadian", game: "Wrestling", year: "—" },
  { id: 15, player: "M.S Rana", game: "Swimming", year: "1975" },
  { id: 16, player: "Neeraj Chopra", game: "Athletic", year: "2018" },
  { id: 17, player: "Manoj Kumar", game: "Boxing", year: "2014" },
  { id: 18, player: "Chand Ram", game: "Athletic", year: "1982" },
  { id: 19, player: "Sandeep Kumar", game: "Archery", year: "2015" },
  { id: 20, player: "Anju Dua", game: "Gymnastic", year: "1998" },
  { id: 21, player: "D.K. Khullar", game: "Mountaineering", year: "1984" },
  { id: 22, player: "Karnam Malleswari", game: "Weight Lifting", year: "1994" },
  { id: 23, player: "Inder Pal Singh", game: "Rowing", year: "2002" },
  { id: 24, player: "Deepika", game: "Hockey", year: "2020" },
  { id: 25, player: "Rajesh Puttu", game: "Horse Riding", year: "2002" },
  { id: 26, player: "Anup Kumar", game: "Kabaddi", year: "2012" },
  { id: 27, player: "Raj Kumar Sangwan", game: "Boxing", year: "1996" },
  { id: 28, player: "Vivek Singh", game: "Shooting", year: "1999" },
  { id: 29, player: "Shakti Singh", game: "Athletics", year: "1995" },
  { id: 30, player: "Gita Zutshi", game: "Athletics", year: "1976" },
  { id: 30, player: "Samir Shiag", game: "Polo", year: "2012" },
  { id: 31, player: "Amir Singh", game: "Volleyball", year: "2001" },
  { id: 32, player: "Sanjay Kumar", game: "Volleyball", year: "2011" },
  { id: 33, player: "Sunita Sharma", game: "Gymnastic", year: "1983" },
  { id: 34, player: "Neha Rathi", game: "Wrestling", year: "2013" },
  { id: 35, player: "Shilpi Singh", game: "Shooting", year: "1997" },
  { id: 36, player: "Anuraj Singh", game: "Shooting", year: "2021" },
  { id: 37, player: "Manish Narwal", game: "Para Shooting", year: "2020" },
  { id: 37, player: "Dalel Singh", game: "Volleyball", year: "1990" },
  { id: 38, player: "Baldev Singh", game: "Hockey", year: "2009" },
  { id: 39, player: "Sandeep Singh", game: "Hockey", year: "2010" },
  { id: 40, player: "Jasjeet Kaur", game: "Hockey", year: "2010" },
  { id: 41, player: "Surender Kaur", game: "Hockey", year: "2009" },
  { id: 42, player: "Rajender Kumar", game: "Wrestling", year: "2012" },
  { id: 43, player: "Rani", game: "Hockey", year: "2016" },
  { id: 44, player: "Sardar Singh", game: "Hockey", year: "2012" },
  { id: 45, player: "Savita", game: "Hockey", year: "2018" },
  { id: 46, player: "Krishan Punia", game: "Athletic", year: "2010" },
  { id: 47, player: "Gitika Jakhar", game: "Wrestling", year: "2005" },
  { id: 48, player: "Ramesh Kumar", game: "Kabaddi", year: "2005" },
  { id: 49, player: "Yashpal Solanki", game: "Judo", year: "2012" },
  { id: 50, player: "Jai Bhagwan", game: "Boxing", year: "2014" },
  { id: 51, player: "Sonia Lathar", game: "Boxing", year: "2019" },
  { id: 52, player: "Mandeep Jangra", game: "Boxing", year: "2019" },
  { id: 53, player: "Pooja Dhanda", game: "Wrestling", year: "2019" },
  { id: 54, player: "Surjeet Mann", game: "Wrestling", year: "2002" },
  { id: 55, player: "Ombir Singh", game: "Wrestling", year: "1990" },
  { id: 56, player: "Ravinder Kumar", game: "Wrestling", year: "2011" },
  { id: 57, player: "Maj Deep Singh", game: "Equestrian", year: "2003" },
  { id: 57, player: "Poonam Chopra ", game: "Judo", year: "1996" },
  { id: 57, player: "Dharmender Dalal", game: "Wrestling", year: "2013" },
  { id: 58, player: "Bajrang Punia", game: "Wrestling", year: "2019" },
  { id: 58, player: "Virender Singh", game: "Wrestling", year: "2019" },
  { id: 59, player: "Manu Bhaker", game: "Shooting", year: "2020" },
  { id: 60, player: "Pooja Kadian", game: "Wushu", year: "2018" },
  { id: 61, player: "Amit Kumar Saroha", game: "Para Athletic", year: "2013" },
  { id: 62, player: "Amit Panghal", game: "Boxing", year: "2023" },
  { id: 63, player: "Antim Panghal", game: "Wrestling", year: "2023" },
  { id: 64, player: "Ritu Negi", game: "Kabaddi", year: "2023" },
  { id: 65, player: "Sweety Boora", game: "Kabaddi", year: "2024" },
];

export function ArjunaAwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-md">
            <Trophy className="w-6 h-6  text-white" />
            <h2 className="text-xl sm:text-xl font-bold tracking-wide uppercase text-center">
              Arjuna Awards
            </h2>
          </div>
          <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-3">
            Celebrating India’s elite athletes whose dedication and achievements
            have illuminated the nation’s sporting history.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {arjunaAwards.map((award, index) => (
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
