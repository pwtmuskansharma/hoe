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

// document working code

// import React, { useEffect, useState } from "react";
// import { documentFetch } from "../../services/api/Document";

// /* ================= PDF ICON ================= */
// const PdfIcon: React.FC = () => (
//   <img
//     src="https://olympic.ind.in/wp-content/themes/olympic-india/assets/images/pdf-svgrepo-com.svg"
//     alt="PDF"
//     className="w-5 h-5 mr-3 flex-shrink-0"
//   />
// );

// /* ================= TYPES ================= */
// interface FileItem {
//   original_name: string;
//   download_link: string;
// }

// interface DocumentItem {
//   id: number;
//   description: string | null;
//   documents: FileItem[];
//   file_type: string;
// }

// interface DocumentHeading {
//   id: number;
//   name: string;
//   slug: string;
//   documents: DocumentItem[];
// }

// /* ================= COMPONENT ================= */
// const DocumentsPage: React.FC = () => {
//   const [documents, setDocuments] = useState<DocumentHeading[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const response = await documentFetch("documents");
//         setDocuments(response?.data?.data || []);
//       } catch (err) {
//         console.error("Error fetching documents:", err);
//         setError("Failed to load documents.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error)
//     return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
//         <h1 className="text-3xl font-bold text-white">DOCUMENTS</h1>
//       </div>

//       <div className="max-w-4xl mx-auto p-6 space-y-12">
//         {documents.map((heading) => (
//           <section key={heading.id}>
//             {/* Heading */}
//             <h2 className="text-xl font-semibold mb-4 uppercase">
//               {heading.name || ""}
//             </h2>

//             <div className="grid gap-3">
//               {heading.documents.map((doc) =>
//                 doc.documents.map((file, idx) => (
//                   <a
//                     key={`${doc.id}-${idx}`}
//                     href={file.download_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
//                   >
//                     <PdfIcon />
//                     <span className="text-sm md:text-base">
//                       {file.original_name}
//                     </span>
//                   </a>
//                 ))
//               )}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DocumentsPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Trophy, Medal, Calendar, User, Award } from "lucide-react";
// import { Button } from "../ui/button";
// import { apiFetch } from "../../services/api/Awards";

// interface AwardItem {
//   id: number;
//   player: string;
//   sport: string;
//   year: string;
//   age?: string | null;
//   achievement?: string | null;
//   image?: string | null;
// }

// interface PaginationMeta {
//   current_page: number;
//   last_page: number;
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
//       console.log("jwaefuiaes", res);
//       debugger;
//       const apiData = res.data?.data || [];
//       const awardInfo = res.data?.data?.award || res.data?.award;
//       const pagination = res.data?.meta;

//       const formatted: AwardItem[] = apiData.map((item: any) => ({
//         id: item.id,
//         player: item.player_name,
//         sport: item.sport?.data?.[0]?.name || "N/A",
//         year: item.year || "—",
//         age: item.age,
//         achievement: item.achievement,
//         image: item.image, // 👈 image from API
//       }));

//       setAwards(formatted);
//       setMeta(pagination || null);
//     } catch (err) {
//       console.error(err);
//       setAwards([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAwards(page);
//   }, [slug, page]);

//   const stripHtml = (html?: string | null) => {
//     if (!html) return "";
//     return html.replace(/<[^>]*>/g, "").trim();
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-3 rounded-full shadow">
//             <Trophy className="w-6 h-6" />
//             <h2 className="text-lg sm:text-xl font-bold uppercase">
//               {awardName}
//             </h2>
//           </div>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <p className="text-center text-gray-700">Loading awards...</p>
//         )}

//         {/* GRID */}
//         {!loading && awards.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {awards.map((award) => (
//               <div
//                 key={award.id}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
//               >
//                 {/* IMAGE */}
//                 <div className="h-56 w-full overflow-hidden bg-black-100">
//                   <img
//                     src={award.image || ""}
//                     alt={award.player}
//                     className="h-full w-full object-contain group-hover:scale-110 transition duration-500"
//                   />
//                 </div>

//                 {/* BASIC INFO */}
//                 <div className="p-5 text-center">
//                   <h3 className="text-lg font-semibold text-blue-800">
//                     {award.player}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{award.sport}</p>
//                   <div className="flex justify-center items-center gap-2 mt-2 text-blue-600 font-medium">
//                     <Calendar className="w-4 h-4" />
//                     <span>{award.year}</span>
//                   </div>
//                 </div>

//                 {/* HOVER DETAILS */}
//                 <div className="absolute inset-0 bg-blue-900/90 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-6">
//                   <div className="text-center space-y-3">
//                     <h3 className="text-xl font-bold">{award.player}</h3>

//                     <p className="flex justify-center items-center gap-2">
//                       <Medal className="w-4 h-4" />
//                       {award.sport}
//                     </p>

//                     <p className="flex justify-center items-center gap-2">
//                       <Calendar className="w-4 h-4" />
//                       Year: {award.year}
//                     </p>

//                     {award.age && (
//                       <p className="flex justify-center items-center gap-2">
//                         <User className="w-4 h-4" />
//                         Age: {award.age}
//                       </p>
//                     )}

//                     {award.achievement && (
//                       <div className="flex justify-center items-center gap-2 text-sm">
//                         <Award className="w-4 h-4" />
//                         {stripHtml(award.achievement)}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* NO DATA */}
//         {!loading && awards.length === 0 && (
//           <p className="text-center text-gray-700">No award data available.</p>
//         )}

//         {/* PAGINATION */}
//         {meta && meta.last_page > 1 && (
//           <div className="flex justify-center gap-3 mt-12">
//             <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
//               Prev
//             </Button>

//             <span className="px-4 py-2 font-semibold text-blue-700">
//               {meta.current_page} / {meta.last_page}
//             </span>

//             <Button
//               disabled={page === meta.last_page}
//               onClick={() => setPage(page + 1)}
//             >
//               Next
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
