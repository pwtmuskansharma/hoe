// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// /* ================= PDF ICON ================= */
// const PdfIcon: React.FC = () => (
//   <img
//     src="https://olympic.ind.in/wp-content/themes/olympic-india/assets/images/pdf-svgrepo-com.svg"
//     alt="PDF"
//     className="w-5 h-5 mr-3 flex-shrink-0"
//   />
// );

// /* ================= TYPES ================= */
// interface PdfFile {
//   original_name: string;
//   download_link: string;
// }

// interface DocumentItem {
//   id: number;
//   description: string | null;
//   documents: PdfFile[];
//   file_type: string;
//   is_active: boolean;
//   created_at: string;
// }

// interface PolicyCategory {
//   id: number;
//   name: string;
//   slug: string;
//   status: boolean;
//   documents: DocumentItem[];
// }

// /* ================= COMPONENT ================= */
// const PdfPoliciesPage: React.FC = () => {
//   const [policies, setPolicies] = useState<PolicyCategory[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPolicies = async () => {
//       try {
//         const res = await fetch(
//           "https://hoa.premiercourses.in/api/pdf-policies"
//         );
//         const data = await res.json();
//         setPolicies(data?.data || []);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load PDF policies");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPolicies();
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
//         {policies.map((category) => (
//           <section key={category.id}>
//             {/* Category Title */}
//             <h2 className="text-xl font-semibold mb-4 uppercase">
//               {category.name}
//             </h2>

//             {/* Document Cards */}
//             <div className="grid gap-3">
//               {category.documents.map((doc) =>
//                 doc.documents.map((file, idx) => (
//                   <Link
//                     key={`${doc.id}-${idx}`}
//                     to={file.download_link}
//                     // target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
//                   >
//                     <PdfIcon />
//                     <span className="text-sm md:text-base">
//                       {file.original_name}
//                     </span>
//                   </Link>
//                 ))
//               )}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PdfPoliciesPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pdfdocumentFetch } from "../../services/api/Pdf_Policies";
/* ================= PDF ICON ================= */
const PdfIcon: React.FC = () => (
  <img
    src="https://olympic.ind.in/wp-content/themes/olympic-india/assets/images/pdf-svgrepo-com.svg"
    alt="PDF"
    className="w-5 h-5 mr-3 flex-shrink-0"
  />
);

/* ================= TYPES ================= */
interface PdfFile {
  original_name: string;
  download_link: string;
}

interface DocumentItem {
  id: number;
  description: string | null;
  documents: PdfFile[];
  file_type: string;
  is_active: boolean;
  created_at: string;
}

interface PolicyCategory {
  id: number;
  name: string;
  slug: string;
  status: boolean;
  documents: DocumentItem[];
}

/* ================= COMPONENT ================= */
interface PdfPoliciesPageProps {
  slug: string; // slug through which to fetch
}

const PdfPoliciesPage: React.FC<PdfPoliciesPageProps> = ({ slug }) => {
  const [category, setCategory] = useState<PolicyCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await pdfdocumentFetch(`pdf-policies/${slug}`);
        setCategory(response?.data?.data || []);
        console.log("fsdf daata", response);
        debugger;
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError("Failed to load documents.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [slug]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!category) return null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">{category.name}</h1>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* Document Cards */}
        <div className="grid gap-3">
          {category.documents.map((doc) =>
            doc.documents.map((file, idx) => (
              <Link
                key={`${doc.id}-${idx}`}
                to={file.download_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
              >
                <PdfIcon />
                <span className="text-sm md:text-base">
                  {file.original_name}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfPoliciesPage;
