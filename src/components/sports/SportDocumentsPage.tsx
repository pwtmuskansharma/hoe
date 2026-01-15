// import React, { useEffect, useState } from "react";
// import { Link, useParams, useLocation } from "react-router-dom";
// import { apiSportCategory } from "../../../src/services/api/Sports";

// interface DocumentItem {
//   original_name: string;
//   download_link: string;
// }

// interface SportDocument {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   documents: DocumentItem[];
//   link_1?: string | null;
//   link_2?: string | null;
//   link_3?: string | null;
// }

// const SportDocumentsPage: React.FC = () => {
//   const { slug } = useParams(); // archery
//   const [data, setData] = useState<SportDocument[]>([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const fromCategory = location.state?.fromCategory;

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const res = await apiSportCategory(`sport-category-documents/${slug}`);
//         setData(res?.data?.data || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchDocuments();
//   }, [slug]);

//   if (loading) {
//     return <div className="text-center py-20">Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* ===== HEADER ===== */}
//       <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-12 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
//           {slug}
//         </h1>
//         <Link
//           to={fromCategory ? `/sports/${fromCategory}` : "/sport-category"}
//           className="text-blue-200 text-sm underline uppercase"
//         >
//           ← Back to {fromCategory}
//         </Link>
//       </div>

//       {/* ===== CONTENT ===== */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {data.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white border rounded-2xl px-6 py-5 hover:shadow-lg transition flex flex-col items-center max-w-[320px] mx-auto"
//             >
//               {/* TITLE – CENTER */}
//               <h2 className="text-base font-semibold text-gray-800 text-center mb-5">
//                 {item.title}
//               </h2>

//               {/* PDF FILES – CENTERED & BALANCED */}
//               <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
//                 {item.documents.map((doc, i) => (
//                   <Link
//                     key={i}
//                     to={doc.download_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-[120px] h-32 flex flex-col items-center border rounded-xl p-3 hover:bg-gray-50 transition"
//                   >
//                     {/* PDF ICON */}
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
//                       alt="pdf"
//                       className="w-12 h-14 mb-2"
//                     />

//                     {/* FILE NAME */}
//                     <p className="text-xs text-center text-gray-700 line-clamp-2">
//                       {doc.original_name}
//                     </p>
//                   </Link>
//                 ))}
//               </div>

//               {/* BUTTON – NOT FULL WIDTH */}
//               <Link
//                 to={item.documents[0]?.download_link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#0e276b] text-white rounded-md font-semibold hover:bg-blue-700  text-sm px-6 py-2  hover:opacity-90 transition"
//               >
//                 View Documents →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         {/* ===== LINKS SECTION ===== */}
//         {data.some((item) => item.link_1 || item.link_2 || item.link_3) && (
//           <div className="container mx-auto px-4 pb-16">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//               Useful Links
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {data.map((item) =>
//                 [item.link_1, item.link_2, item.link_3]
//                   .filter(Boolean)
//                   .map((link, index) => (
//                     <Link
//                       key={`${item.id}-${index}`}
//                       to={link as string}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white border rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition mx-auto max-w-[320px]"
//                     >
//                       {/* ICON */}
//                       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
//                         🔗
//                       </div>

//                       {/* LINK TEXT */}
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-gray-800 break-all line-clamp-2">
//                           {link}
//                         </p>
//                       </div>
//                     </Link>
//                   ))
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SportDocumentsPage;

import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { apiSportCategory } from "../../../src/services/api/Sports";

interface DocumentItem {
  original_name: string;
  download_link: string;
}

interface SportDocument {
  id: number;
  title: string;
  slug: string;
  description: string;
  documents: DocumentItem[];
  label_1?: string | null;
  link_1?: string | null;
  label_2?: string | null;
  link_2?: string | null;
  label_3?: string | null;
  link_3?: string | null;
}

const SportDocumentsPage: React.FC = () => {
  const { slug } = useParams(); // archery
  const [data, setData] = useState<SportDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const fromCategory = location.state?.fromCategory;

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await apiSportCategory(`sport-category-documents/${slug}`);
        setData(res?.data?.data || []);
        console.log("dgdfg", res?.data?.data);
        debugger;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchDocuments();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== HEADER ===== */}
      <div
        className="bg-gradient-to-r from-blue-900 to-indigo-900 py-12 text-center"
        style={{
          backgroundImage: "url('/bggg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black uppercase">
          {slug}
        </h1>
        <Link
          to={fromCategory ? `/sports/${fromCategory}` : "/sport-category"}
          className="text-blue-900 text-sm underline uppercase"
        >
          ← Back to {fromCategory}
        </Link>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1">
          {data.map((item) => (
            <div key={item.id} className=" rounded-xl p-2 ">
              {/* HEADING */}
              {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {item.title}
              </h2> */}

              {/* DOCUMENT LIST */}
              <div className="grid gap-3">
                {item.documents.map((doc, index) => (
                  <Link
                    key={index}
                    to={doc.download_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        group
        flex items-center gap-3
        p-3 bg-white
        rounded-lg shadow
        hover:bg-gray-100
        transition
      "
                  >
                    {/* PDF ICON */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                      alt="pdf"
                      className="
          w-6 h-6 flex-shrink-0
          transition-transform duration-300
          group-hover:rotate-12
        "
                    />

                    {/* FILE NAME */}
                    <span
                      className="
          text-sm md:text-base text-gray-700 break-all
          transition-colors duration-300
          group-hover:text-orange-400
        "
                    >
                      {doc.original_name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* ===== LINKS SECTION ===== */}
        {data.some((item) => item.link_1 || item.link_2 || item.link_3) && (
          <div className="container mx-auto px-4 pb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center uppercase">
              Useful Links
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((item) => {
                const links = [
                  { label: item.label_1, link: item.link_1 },
                  { label: item.label_2, link: item.link_2 },
                  { label: item.label_3, link: item.link_3 },
                ].filter((i) => i.label && i.link);

                return links.map((itemLink, index) => (
                  <Link
                    key={`${item.id}-${index}`}
                    to={itemLink.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border rounded-xl p-5 flex items-center gap-4
                   hover:shadow-lg transition group w-full max-w-sm mx-auto"
                  >
                    {/* ICON */}
                    <div
                      className="w-11 h-11 flex items-center justify-center rounded-full
                     bg-blue-100 text-blue-700 text-lg font-bold
                     group-hover:scale-110 transition"
                    >
                      🔗
                    </div>

                    {/* LABEL */}
                    <div className="flex-1">
                      <p
                        className="text-sm font-medium text-gray-800 line-clamp-2
                        group-hover:text-blue-600 transition"
                      >
                        {itemLink.label}
                      </p>
                    </div>
                  </Link>
                ));
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportDocumentsPage;
