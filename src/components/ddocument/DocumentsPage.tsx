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

import React, { useEffect, useState } from "react";
import { documentFetch } from "../../services/api/Document";
import { Link } from "react-router-dom";

/* ================= PDF ICON ================= */
const PdfIcon: React.FC = () => (
  <img
    src="https://olympic.ind.in/wp-content/themes/olympic-india/assets/images/pdf-svgrepo-com.svg"
    alt="PDF"
    className="w-5 h-5 mr-3 flex-shrink-0"
  />
);

/* ================= TYPES ================= */
interface FileItem {
  original_name: string;
  download_link: string;
}

interface DocumentItem {
  id: number;
  description: string | null;
  documents: FileItem[];
  file_type: string;
}

interface DocumentHeading {
  id: number;
  name: string;
  slug: string;
  documents: DocumentItem[];
}

/* ================= COMPONENT ================= */
const DocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentHeading[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await documentFetch("documents");
        setDocuments(response?.data?.data || []);
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError("Failed to load documents.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  // Filter headings to include only those with at least 1 document
  const filteredHeadings = documents.filter((heading) =>
    heading.documents.some((doc) => doc.documents && doc.documents.length > 0)
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">DOCUMENTS</h1>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {filteredHeadings.map((heading) => (
          <section key={heading.id}>
            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4 uppercase">
              {heading.name || ""}
            </h2>

            <div className="grid gap-3">
              {heading.documents.map((doc) =>
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
          </section>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
