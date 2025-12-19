import React from "react";

/* ================= DATA ================= */

// Governance documents with actual links
const governanceDocs = [
  {
    name: "IOA Constitution",
    link: "https://olympic.ind.in/wp-content/uploads/2025/09/IOA-Constitution.pdf",
  },
  {
    name: "Vigilance Commission Rules",
    link: "#",
  },
  {
    name: "Document Retention Policy of IOA",
    link: "#",
  },
  {
    name: "Arbitration Rules of IOA",
    link: "#",
  },
  {
    name: "Medical Code of IOA",
    link: "#",
  },
  {
    name: "Dispute Commission Rules of IOA",
    link: "#",
  },
  {
    name: "IOA Safe Sport Policy",
    link: "#",
  },
  {
    name: "Ethics Commission Rules",
    link: "#",
  },
];

const financeDocs = [
  {
    name: "Statement of Accounts - for the period 01.04.2023 - 31.03.2024",
    link: "#",
  },
  {
    name: "Statement of Accounts - for the period 01.04.2022 - 31.03.2023",
    link: "#",
  },
  {
    name: "Statement of Accounts - for the period 01.04.2021 - 31.03.2022",
    link: "#",
  },
];

/* ================= PDF ICON ================= */
const PdfIcon: React.FC = () => (
  <img
    src="https://olympic.ind.in/wp-content/themes/olympic-india/assets/images/pdf-svgrepo-com.svg"
    alt="PDF"
    className="w-5 h-5 mr-3 flex-shrink-0"
  />
);

/* ================= COMPONENT ================= */
const DocumentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">DOCUMENTS</h1>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-12">
        {/* GOVERNANCE SECTION */}
        <section>
          <h2 className="text-xl font-semibold mb-4">GOVERNANCE</h2>
          <div className="grid gap-2">
            {governanceDocs.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
              >
                <PdfIcon />
                <span className="text-sm md:text-base">{doc.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* FINANCE SECTION */}
        <section>
          <h2 className="text-xl font-semibold mb-4">FINANCE</h2>
          <div className="grid gap-2">
            {financeDocs.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
              >
                <PdfIcon />
                <span className="text-sm md:text-base">{doc.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocumentsPage;
