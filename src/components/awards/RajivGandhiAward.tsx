// import { Trophy, Medal, Calendar } from "lucide-react";

// const awards = [
//   { id: 1, player: "Rani Rampal", game: "Hockey", year: "2020" },
//   { id: 2, player: "Vinesh Phogat", game: "Wrestling", year: "2020" },
//   { id: 3, player: "Bajrang Punia", game: "Wrestling", year: "2019" },
//   { id: 4, player: "Deepa Malik", game: "Para Athletics", year: "2019" },
//   { id: 5, player: "Sardar Singh", game: "Hockey", year: "2017" },
//   { id: 6, player: "Sakshi Malik", game: "Wrestling", year: "2016" },
//   { id: 7, player: "Yogeshwar Dutt", game: "Wrestling", year: "2012" },
//   { id: 8, player: "Gagan Narang", game: "Shooting", year: "2011" },
//   { id: 9, player: "Saina Nehwal", game: "Badminton", year: "2010" },
//   { id: 10, player: "Vijender Singh", game: "Boxing", year: "2009" },
//   { id: 11, player: "Sushil Kumar", game: "Wrestling", year: "2009" },
//   { id: 12, player: "K. Malleswari", game: "Weightlifting", year: "1994-95" },
// ];

// export function RajivGandhiAwardsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-md">
//             <Trophy className="w-6 h-6  text-white" />
//             <h2 className="text-xl sm:text-xl font-bold tracking-wide uppercase text-center">
//               Rajiv Gandhi Khel Ratna Awards
//             </h2>
//           </div>
//           <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-3">
//             Celebrating India’s elite athletes whose dedication and achievements
//             have illuminated the nation’s sporting history.
//           </p>
//         </div>

//         {/* Awards Grid */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//           {awards.map((award, index) => (
//             <div
//               key={award.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 text-center transform hover:-translate-y-1"
//               style={{
//                 animation: `fadeIn 0.4s ease-out ${index * 0.08}s both`,
//               }}
//             >
//               <div className="flex justify-center mb-3">
//                 <Medal className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
//               </div>
//               <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1">
//                 {award.player}
//               </h2>
//               <p className="text-gray-700 text-sm sm:text-base">{award.game}</p>
//               <div className="flex justify-center items-center gap-2 mt-3 text-blue-600 font-medium text-sm sm:text-base">
//                 <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span>{award.year}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Trophy, Medal, Calendar } from "lucide-react";
// import { apiFetch } from "../../services/api/Awards";
// interface Sport {
//   id: number;
//   name: string;
//   slug: string;
// }

// interface ApiSportData {
//   data: Sport[];
// }

// interface ApiAwardItem {
//   id: number;
//   player_name: string;
//   year: string;
//   sport?: ApiSportData;
// }

// interface AwardItem {
//   id: number;
//   player: string;
//   game: string;
//   year: string;
// }

// interface ApiResponse {
//   success: boolean;
//   award?: { id: number; name: string; slug: string };
//   data?: { data: ApiAwardItem[] };
// }

// export function RajivGandhiAwardsPage() {
//   const { slug } = useParams<{ slug: string }>();
//   const [awards, setAwards] = useState<AwardItem[]>([]);
//   const [awardName, setAwardName] = useState("Rajiv Gandhi Khel Ratna Awards");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAwards = async () => {
//       if (!slug) return;
//       setLoading(true);

//       try {
//         console.log("Fetching award data for slug:", slug);
//         const res = await apiFetch(`award/${slug}`);
//         console.log("✅ API response:", res);
//         debugger;

//         // unwrap safely
//         const apiData = res.data?.data?.data || res.data?.data || [];
//         const awardInfo = res.data?.data?.award || res.data?.award;

//         if (res.ok && Array.isArray(apiData) && apiData.length) {
//           const formatted: AwardItem[] = apiData.map((item: any) => ({
//             id: item.id,
//             player: item.player_name,
//             game: item.sport?.data?.[0]?.name || "N/A",
//             year: item.year || "—",
//           }));

//           setAwards(formatted);
//           setAwardName(awardInfo?.name || "Awards");
//         } else {
//           console.warn("⚠️ No awards found in API response:", res);
//           setAwards([]);
//           setAwardName(awardInfo?.name || "Awards");
//         }
//       } catch (error) {
//         console.error("❌ Error fetching awards:", error);
//         setAwards([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAwards();
//   }, [slug]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-md">
//             <Trophy className="w-6 h-6 text-white" />
//             <h2 className="text-xl sm:text-xl font-bold tracking-wide uppercase text-center">
//               {awardName}
//             </h2>
//           </div>
//           <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-3">
//             Honoring India’s most exceptional athletes whose determination and
//             excellence have inspired generations.
//           </p>
//         </div>

//         {/* Loading / No Data / Awards Grid */}
//         {loading ? (
//           <div className="text-center text-gray-700 font-medium">
//             Loading awards...
//           </div>
//         ) : awards.length === 0 ? (
//           <div className="text-center text-gray-700 font-medium">
//             No award data available.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//             {awards.map((award, index) => (
//               <div
//                 key={award.id}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 text-center transform hover:-translate-y-1"
//                 style={{
//                   animation: `fadeIn 0.4s ease-out ${index * 0.08}s both`,
//                 }}
//               >
//                 <div className="flex justify-center mb-3">
//                   <Medal className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
//                 </div>
//                 <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1">
//                   {award.player}
//                 </h2>
//                 <p className="text-gray-700 text-sm sm:text-base">
//                   {award.game}
//                 </p>
//                 <div className="flex justify-center items-center gap-2 mt-3 text-blue-600 font-medium text-sm sm:text-base">
//                   <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
//                   <span>{award.year}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trophy, Medal, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { apiFetch } from "../../services/api/Awards";

interface Sport {
  id: number;
  name: string;
  slug: string;
}

interface ApiSportData {
  data: Sport[];
}

interface ApiAwardItem {
  id: number;
  player_name: string;
  year: string;
  sport?: ApiSportData;
}

interface AwardItem {
  id: number;
  player: string;
  game: string;
  year: string;
}

interface PaginationMeta {
  current_page: number;
  last_page: number;
  links: { url: string | null; label: string; active: boolean }[];
}

interface ApiResponse {
  success: boolean;
  award?: { id: number; name: string; slug: string };
  data?: { data: ApiAwardItem[]; meta?: PaginationMeta };
}

export function RajivGandhiAwardsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [awards, setAwards] = useState<AwardItem[]>([]);
  const [awardName, setAwardName] = useState("Rajiv Gandhi Khel Ratna Awards");
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [page, setPage] = useState(1);

  const fetchAwards = async (pageNum = 1) => {
    if (!slug) return;
    setLoading(true);

    try {
      const res = await apiFetch(`award/${slug}?page=${pageNum}`);
      console.log("✅ API response:", res);

      const apiData = res.data?.data?.data || res.data?.data || [];
      const awardInfo = res.data?.data?.award || res.data?.award;
      const pagination = res.data?.data?.meta || res.data?.meta;

      if (Array.isArray(apiData) && apiData.length) {
        const formatted: AwardItem[] = apiData.map((item: any) => ({
          id: item.id,
          player: item.player_name,
          game: item.sport?.data?.[0]?.name || "N/A",
          year: item.year || "—",
        }));

        setAwards(formatted);
        setAwardName(awardInfo?.name || "Awards");
        setMeta(pagination || null);
      } else {
        setAwards([]);
        setAwardName(awardInfo?.name || "Awards");
      }
    } catch (error) {
      console.error("❌ Error fetching awards:", error);
      setAwards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAwards(page);
  }, [slug, page]);

  const handlePageChange = (newPage: number) => {
    if (meta && newPage >= 1 && newPage <= meta.last_page) {
      setPage(newPage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-white px-5 py-3 rounded-full shadow-md">
            <Trophy className="w-6 h-6 text-white" />
            <h2 className="text-xl sm:text-xl font-bold tracking-wide uppercase text-center">
              {awardName}
            </h2>
          </div>
          <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-3">
            Honoring India’s most exceptional athletes whose determination and
            excellence have inspired generations.
          </p>
        </div>

        {/* Loading / No Data / Awards Grid */}
        {loading ? (
          <div className="text-center text-gray-700 font-medium">
            Loading awards...
          </div>
        ) : awards.length === 0 ? (
          <div className="text-center text-gray-700 font-medium">
            No award data available.
          </div>
        ) : (
          <>
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
                  <p className="text-gray-700 text-sm sm:text-base">
                    {award.game}
                  </p>
                  <div className="flex justify-center items-center gap-2 mt-3 text-blue-600 font-medium text-sm sm:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{award.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
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
                  .filter(
                    (link) =>
                      !link.label.includes("&laquo;") &&
                      !link.label.includes("&raquo;")
                  )
                  .map((link, idx) => (
                    <Button
                      key={idx}
                      variant={link.active ? "default" : "outline"}
                      className={`px-4 py-2 text-sm ${
                        link.active
                          ? "bg-blue-700 text-white"
                          : "text-blue-700"
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
          </>
        )}
      </div>
    </div>
  );
}
