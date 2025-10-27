import React from "react";

const membersData = [
  {
    title: "President",
    members: ["Capt. Jasvinder Meenu Beniwal"],
  },
  {
    title: "Secretary General",
    members: [
      "Sh. Krishan Lal Panwar",
      "Cabinet Minister, Development & Panchayats, Government of Haryana",
    ],
  },
  {
    title: "Treasurer",
    members: ["Sh. Manjeet Singh"],
  },
  {
    title: "Vice President",
    members: [
      "Sh. Mohd. Shavin, IAS",
      "Sh. Mukesh Sharma, MLA",
      "Sh. Satyapal Sindhu",
      "Sh. Anil Khatri",
      "Sh. Jitender Singh",
      "Sh. Sunil Malik",
      "Sh. Neeraj Tanwar",
      "Sh. Rakesh Singh",
    ],
  },
  {
    title: "Joint Secretary",
    members: ["Sh. Vikarm, IAS", "Sh. Ravinder Pannu", "Sh. Narender Singh"],
  },
  {
    title: "Executive Member",
    members: [
      "Sh. Ajay Kumar, IAS",
      "Ms. Neha Singh, IAS",
      "Sh. Uttam Singh, IAS",
      "Ms. Surekha",
      "Ms. Priya",
      "Sh. Rohit Pundir",
    ],
  },
];

const Members = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-3">
            Executive Committee Haryana Olympic Association
          </h1>
          <p className="text-gray-700 text-lg">
            Dedicated leaders shaping the future of Haryana sports excellence.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-300 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-2 text-gray-700 text-base leading-relaxed ">
                {section.members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
