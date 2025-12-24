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

// code without pagination

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

// working code
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Trophy, Medal, Calendar } from "lucide-react";
// import { Button } from "../ui/button";
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

// interface PaginationMeta {
//   current_page: number;
//   last_page: number;
//   links: { url: string | null; label: string; active: boolean }[];
// }

// interface ApiResponse {
//   success: boolean;
//   award?: { id: number; name: string; slug: string };
//   data?: { data: ApiAwardItem[]; meta?: PaginationMeta };
// }

// export function RajivGandhiAwardsPage() {
//   const { slug } = useParams<{ slug: string }>();
//   const [awards, setAwards] = useState<AwardItem[]>([]);
//   const [awardName, setAwardName] = useState("Rajiv Gandhi Khel Ratna Awards");
//   const [loading, setLoading] = useState(true);
//   const [meta, setMeta] = useState<PaginationMeta | null>(null);
//   const [page, setPage] = useState(1);

//   const fetchAwards = async (pageNum = 1) => {
//     if (!slug) return;
//     setLoading(true);

//     try {
//       const res = await apiFetch(`award/${slug}?page=${pageNum}`);
//       console.log("✅ API response:", res);

//       const apiData = res.data?.data?.data || res.data?.data || [];
//       const awardInfo = res.data?.data?.award || res.data?.award;
//       const pagination = res.data?.data?.meta || res.data?.meta;

//       if (Array.isArray(apiData) && apiData.length) {
//         const formatted: AwardItem[] = apiData.map((item: any) => ({
//           id: item.id,
//           player: item.player_name,
//           game: item.sport?.data?.[0]?.name || "N/A",
//           year: item.year || "—",
//         }));

//         setAwards(formatted);
//         setAwardName(awardInfo?.name || "Awards");
//         setMeta(pagination || null);
//       } else {
//         setAwards([]);
//         setAwardName(awardInfo?.name || "Awards");
//       }
//     } catch (error) {
//       console.error("❌ Error fetching awards:", error);
//       setAwards([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAwards(page);
//   }, [slug, page]);

//   const handlePageChange = (newPage: number) => {
//     if (meta && newPage >= 1 && newPage <= meta.last_page) {
//       setPage(newPage);
//     }
//   };

//   // 🧠 Smart Pagination Range with dots (...)
//   const getPaginationRange = () => {
//     if (!meta) return [];
//     const totalPages = meta.last_page;
//     const current = meta.current_page;
//     const delta = 2;
//     const range: (number | string)[] = [];

//     for (let i = 1; i <= totalPages; i++) {
//       if (i === 1 || i === totalPages || (i >= current - delta && i <= current + delta)) {
//         range.push(i);
//       } else if (range[range.length - 1] !== "...") {
//         range.push("...");
//       }
//     }
//     return range;
//   };

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
//           <>
//             <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//               {awards.map((award, index) => (
//                 <div
//                   key={award.id}
//                   className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 text-center transform hover:-translate-y-1"
//                   style={{
//                     animation: `fadeIn 0.4s ease-out ${index * 0.08}s both`,
//                   }}
//                 >
//                   <div className="flex justify-center mb-3">
//                     <Medal className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
//                   </div>
//                   <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-1">
//                     {award.player}
//                   </h2>
//                   <p className="text-gray-700 text-sm sm:text-base">
//                     {award.game}
//                   </p>
//                   <div className="flex justify-center items-center gap-2 mt-3 text-blue-600 font-medium text-sm sm:text-base">
//                     <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span>{award.year}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Stylish Responsive Pagination */}
//             {meta && meta.last_page > 1 && (
//               <div className="flex flex-wrap justify-center items-center mt-10 gap-2 sm:gap-3">
//                 <Button
//                   variant="outline"
//                   className="px-4 py-2 text-sm rounded-full border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition"
//                   disabled={page === 1}
//                   onClick={() => handlePageChange(page - 1)}
//                 >
//                   ← Prev
//                 </Button>

//                 {getPaginationRange().map((item, idx) =>
//                   item === "..." ? (
//                     <span key={idx} className="text-gray-600 font-semibold px-2">
//                       ...
//                     </span>
//                   ) : (
//                     <Button
//                       key={idx}
//                       onClick={() => handlePageChange(item as number)}
//                       className={`px-4 py-2 text-sm rounded-full ${
//                         page === item
//                           ? "bg-blue-700 text-white shadow-md"
//                           : "bg-white text-blue-700 border border-blue-600 hover:bg-blue-600 hover:text-white"
//                       } transition`}
//                     >
//                       {item}
//                     </Button>
//                   )
//                 )}

//                 <Button
//                   variant="outline"
//                   className="px-4 py-2 text-sm rounded-full border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition"
//                   disabled={page === meta.last_page}
//                   onClick={() => handlePageChange(page + 1)}
//                 >
//                   Next →
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// codadn
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trophy, Medal, Calendar, User, Award } from "lucide-react";
import { Button } from "../ui/button";
import { apiFetch } from "../../services/api/Awards";

interface AwardItem {
  id: number;
  player: string;
  sport: string;
  year: string;
  age?: string | null;
  achievement?: string | null;
  image?: string | null;
}

interface PaginationMeta {
  current_page: number;
  last_page: number;
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
      console.log("jwaefuiaes", res);
      debugger;
      const apiData = res.data?.data || [];
      const pagination = res.data?.meta;

      const formatted: AwardItem[] = apiData.map((item: any) => ({
        id: item.id,
        player: item.player_name,
        sport: item.sport?.data?.[0]?.name || "N/A",
        year: item.year || "—",
        age: item.age,
        achievement: item.achievement,
        image: item.image, // 👈 image from API
      }));

      setAwards(formatted);
      setMeta(pagination || null);
    } catch (err) {
      console.error(err);
      setAwards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAwards(page);
  }, [slug, page]);

  const stripHtml = (html?: string | null) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").trim();
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-3 rounded-full shadow">
            <Trophy className="w-6 h-6" />
            <h2 className="text-lg sm:text-xl font-bold uppercase">
              {awardName}
            </h2>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-700">Loading awards...</p>
        )}

        {/* GRID */}
        {!loading && awards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="h-56 w-full overflow-hidden bg-black-100">
                  <img
                    src={award.image || ""}
                    alt={award.player}
                    className="h-full w-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* BASIC INFO */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-blue-800">
                    {award.player}
                  </h3>
                  <p className="text-gray-600 text-sm">{award.sport}</p>
                  <div className="flex justify-center items-center gap-2 mt-2 text-blue-600 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{award.year}</span>
                  </div>
                </div>

                {/* HOVER DETAILS */}
                <div className="absolute inset-0 bg-blue-900/90 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold">{award.player}</h3>

                    <p className="flex justify-center items-center gap-2">
                      <Medal className="w-4 h-4" />
                      {award.sport}
                    </p>

                    <p className="flex justify-center items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Year: {award.year}
                    </p>

                    {award.age && (
                      <p className="flex justify-center items-center gap-2">
                        <User className="w-4 h-4" />
                        Age: {award.age}
                      </p>
                    )}

                    {award.achievement && (
                      <div className="flex justify-center items-center gap-2 text-sm">
                        <Award className="w-4 h-4" />
                        {stripHtml(award.achievement)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NO DATA */}
        {!loading && awards.length === 0 && (
          <p className="text-center text-gray-700">No award data available.</p>
        )}

        {/* PAGINATION */}
        {meta && meta.last_page > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Prev
            </Button>

            <span className="px-4 py-2 font-semibold text-blue-700">
              {meta.current_page} / {meta.last_page}
            </span>

            <Button
              disabled={page === meta.last_page}
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
