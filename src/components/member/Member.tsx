// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { fetchHoaMembers } from "../../../src/services/api/Member";

// /* ================= INTERFACE ================= */
// interface HoaMember {
//   id: number;
//   name_of_association: string;
//   president_name?: string;
//   name_of_sec?: string;
//   email?: string;
//   another_email?: string;
//   icon: string;
//   created_at?: string;
// }

// type GroupedData = {
//   [key: string]: HoaMember[];
// };

// /* ================= COMPONENT ================= */
// const MemberPage: React.FC = () => {
//   const { slug } = useParams();
//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         // ✅ service function call
//         const response = await fetchHoaMembers(`hoa-members/${slug}`);

//         const members: HoaMember[] =
//           response?.data?.data?.[0]?.hoa_members || [];

//         console.log("dhusd", members);
//         debugger;

//         /* ===== Alphabet Grouping (Same Structure) ===== */
//         const grouped: GroupedData = {};

//         members.forEach((item) => {
//           const letter = item.name_of_association.charAt(0).toUpperCase();

//           if (!grouped[letter]) {
//             grouped[letter] = [];
//           }
//           grouped[letter].push(item);
//         });

//         setData(grouped);
//       } catch (err) {
//         console.error("Error fetching HOA members:", err);
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchMembers();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-60">
//         <span className="text-gray-500">Loading...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-red-500 py-10">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {Object.keys(data).map((letter) => (
//           <div key={letter}>
//             {/* Alphabet Heading */}
//             <h2 className="text-3xl font-bold mb-6">{letter}</h2>

//             {/* Cards */}
//             <div className="space-y-4">
//               {data[letter].map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition bg-white"
//                 >
//                   {/* ICON */}
//                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shrink-0">
//                     <img
//                       src={item.icon}
//                       alt={item.name_of_association}
//                       className="w-10 h-10 object-contain"
//                     />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="flex-1">
//                     {/* TITLE */}
//                     <h3 className="font-semibold text-gray-800 text-base">
//                       {item.name_of_association}
//                     </h3>

//                     {/* PRESIDENT */}
//                     {item.president_name && (
//                       <p className="text-sm text-gray-600">
//                         <span className="font-medium">President:</span>{" "}
//                         {item.president_name}
//                       </p>
//                     )}
//                     {/* Sec */}
//                     {item.name_of_sec && (
//                       <p className="text-sm text-gray-600">
//                         <span className="font-medium">Secretary:</span>{" "}
//                         {item.name_of_sec}
//                       </p>
//                     )}

//                     {/* EMAIL */}
//                     {item.email && (
//                       <p className="text-sm text-gray-500 break-words">
//                         <span className="font-medium">Email:</span> {item.email}
//                       </p>
//                     )}

//                     {/* another email */}
//                     {item.another_email && (
//                       <p className="text-sm text-gray-500 break-words">
//                         <span className="font-medium">An Other Email:</span>{" "}
//                         {item.another_email}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MemberPage;

// open model below code

// import React, { useEffect, useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { fetchHoaMembers } from "../../../src/services/api/Member";

// /* ================= INTERFACE ================= */
// interface HoaMember {
//   id: number;
//   name_of_association: string;
//   president_name?: string;
//   name_of_sec?: string;
//   email?: string;
//   another_email?: string;
//   icon: string;
// }

// type GroupedData = {
//   [key: string]: HoaMember[];
// };

// interface FlatItem extends HoaMember {
//   letter?: string;
// }

// /* ================= COMPONENT ================= */
// const MemberPage: React.FC = () => {
//   const { slug } = useParams();
//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   /* 🔥 MODAL STATE */
//   const [selectedMember, setSelectedMember] = useState<HoaMember | null>(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetchHoaMembers(`hoa-members/${slug}`);
//         let members: HoaMember[] = response?.data?.data?.[0]?.hoa_members || [];

//         /* ✅ SORT MEMBERS BY NAME */
//         members = members.sort((a, b) =>
//           a.name_of_association.localeCompare(b.name_of_association)
//         );

//         /* ✅ GROUP BY LETTER */
//         const grouped: GroupedData = {};
//         members.forEach((item) => {
//           const letter = item.name_of_association.charAt(0).toUpperCase();

//           if (!grouped[letter]) grouped[letter] = [];
//           grouped[letter].push(item);
//         });

//         setData(grouped);
//       } catch (err) {
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchMembers();
//   }, [slug]);

//   /* 🔑 FLATTEN DATA (A → Z) */
//   const flatList = useMemo(() => {
//     const list: FlatItem[] = [];

//     Object.keys(data)
//       .sort() // ✅ SORT LETTERS
//       .forEach((letter) => {
//         data[letter].forEach((item, index) => {
//           list.push({
//             ...item,
//             letter: index === 0 ? letter : undefined,
//           });
//         });
//       });

//     return list;
//   }, [data]);

//   if (loading) return <div className="text-center py-20">Loading...</div>;
//   if (error)
//     return <div className="text-center text-red-500 py-10">{error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       {/* 🔥 GRID (RESPONSIVE) */}
//       <div
//         className="grid gap-10
//         grid-cols-1
//         sm:grid-cols-2
//         md:grid-cols-3
//         lg:grid-cols-4"
//       >
//         {flatList.map((item) => (
//           <div key={item.id} className="relative">
//             {/* 🔤 ALPHABET BADGE */}
//             {item.letter && (
//               <span
//                 className="absolute -top-8 left-3 z-20
//                 bg-white text-gray-900
//                 font-bold text-sm
//                 px-3 py-1 rounded-lg shadow"
//               >
//                 {item.letter}
//               </span>
//             )}

//             {/* 🔹 CARD */}
//             <div
//               onClick={() => setSelectedMember(item)}
//               className="cursor-pointer h-[160px]
//               rounded-2xl flex flex-col
//               items-center justify-center text-center
//               bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400
//               hover:scale-[1.04] transition-all duration-300 shadow-md"
//             >
//               <img
//                 src={item.icon}
//                 alt={item.name_of_association}
//                 className="w-14 h-14 mb-3 object-contain"
//               />
//               <h3 className="text-white font-semibold text-sm uppercase px-3 line-clamp-2">
//                 {item.name_of_association}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= RESPONSIVE MODAL ================= */}
//       {selectedMember && (
//         <div
//           className="fixed inset-0 z-50
//           flex items-center justify-center
//           bg-black/60 px-4"
//         >
//           <div
//             className="bg-white rounded-2xl
//             w-full max-w-lg
//             max-h-[90vh] overflow-y-auto
//             p-6 relative animate-fadeIn"
//           >
//             {/* CLOSE */}
//             <button
//               onClick={() => setSelectedMember(null)}
//               className="absolute top-3 right-3
//               text-gray-500 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* ICON */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={selectedMember.icon}
//                 alt={selectedMember.name_of_association}
//                 className="w-20 h-20 object-contain"
//               />
//             </div>

//             {/* NAME */}
//             <h2
//               className="text-lg sm:text-xl
//               font-bold text-center
//               text-gray-800 mb-4 uppercase"
//             >
//               {selectedMember.name_of_association}
//             </h2>

//             {/* DETAILS */}
//             <div className="space-y-2 text-sm sm:text-base text-gray-700">
//               {selectedMember.email && (
//                 <p>
//                   <span className="font-semibold">Email:</span>{" "}
//                   {selectedMember.email}
//                 </p>
//               )}

//               {selectedMember.another_email && (
//                 <p>
//                   <span className="font-semibold">Alt Email:</span>{" "}
//                   {selectedMember.another_email}
//                 </p>
//               )}

//               {selectedMember.president_name && (
//                 <p>
//                   <span className="font-semibold">President:</span>{" "}
//                   {selectedMember.president_name}
//                 </p>
//               )}

//               {selectedMember.name_of_sec && (
//                 <p>
//                   <span className="font-semibold">Secretary:</span>{" "}
//                   {selectedMember.name_of_sec}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MemberPage;

// import React, { useEffect, useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { fetchHoaMembers } from "../../../src/services/api/Member";

// /* ================= INTERFACE ================= */
// interface HoaMember {
//   id: number;
//   name_of_association: string;
//   president_name?: string;
//   name_of_sec?: string;
//   email?: string;
//   another_email?: string;
//   icon: string;
// }

// type GroupedData = {
//   [key: string]: HoaMember[];
// };

// interface FlatItem extends HoaMember {
//   letter?: string;
// }

// /* ================= COMPONENT ================= */
// const MemberPage: React.FC = () => {
//   const { slug } = useParams();
//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   /* 🔥 ACTIVE CARD STATE */
//   const [activeId, setActiveId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetchHoaMembers(`hoa-members/${slug}`);
//         let members: HoaMember[] = response?.data?.data?.[0]?.hoa_members || [];

//         /* ✅ STEP 1: SORT MEMBERS BY NAME */
//         members = members.sort((a, b) =>
//           a.name_of_association.localeCompare(b.name_of_association)
//         );

//         /* ✅ STEP 2: GROUP BY FIRST LETTER */
//         const grouped: GroupedData = {};
//         members.forEach((item) => {
//           const letter = item.name_of_association.charAt(0).toUpperCase();

//           if (!grouped[letter]) grouped[letter] = [];
//           grouped[letter].push(item);
//         });

//         setData(grouped);
//       } catch (err) {
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchMembers();
//   }, [slug]);

//   /* 🔑 FLATTEN DATA (A → Z ORDER) */
//   const flatList = useMemo(() => {
//     const list: FlatItem[] = [];

//     Object.keys(data)
//       .sort() // ✅ SORT LETTERS A-Z
//       .forEach((letter) => {
//         data[letter].forEach((item, index) => {
//           list.push({
//             ...item,
//             letter: index === 0 ? letter : undefined,
//           });
//         });
//       });

//     return list;
//   }, [data]);

//   if (loading) return <div className="text-center py-20">Loading...</div>;
//   if (error)
//     return <div className="text-center text-red-500 py-10">{error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       {/* 🔥 GRID */}
//       <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
//         {flatList.map((item) => {
//           const isOpen = activeId === item.id;

//           return (
//             <div key={item.id} className="relative">
//               {/* 🔤 ALPHABET BADGE */}
//               {item.letter && (
//                 <span className="absolute -top-9 left-3 z-20 bg-white text-black font-bold text-base px-3 py-1 rounded-lg shadow">
//                   {item.letter}
//                 </span>
//               )}

//               {/* 🔹 CARD */}
//               <div
//                 onClick={() => setActiveId(isOpen ? null : item.id)}
//                 className={`cursor-pointer rounded-2xl overflow-hidden
//                 bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400
//                 transition-all duration-300 shadow-md
//                 ${isOpen ? "scale-[1.02]" : "hover:scale-[1.04]"}`}
//               >
//                 {/* TOP */}
//                 <div className="h-[160px] flex flex-col items-center justify-center text-center px-4">
//                   {/* <img
//                     src={item.icon}
//                     alt={item.name_of_association}
//                     className="w-16 h-16 mb-3 object-contain"
//                   /> */}
//                   <h3 className="text-white font-semibold text-md uppercase line-clamp-2">
//                     {item.name_of_association}
//                   </h3>
//                   <div className="border-t border-white/30 pt-3 space-y-1">
//                     {item.email && (
//                       <p>
//                         <span className="font-semibold">Email:</span>{" "}
//                         {item.email}
//                       </p>
//                     )}

//                     {item.another_email && (
//                       <p>
//                         <span className="font-semibold">Alt:</span>{" "}
//                         {item.another_email}
//                       </p>
//                     )}

//                     {item.president_name && (
//                       <p>
//                         <span className="font-semibold">President:</span>{" "}
//                         {item.president_name}
//                       </p>
//                     )}

//                     {item.name_of_sec && (
//                       <p>
//                         <span className="font-semibold">Secretary:</span>{" "}
//                         {item.name_of_sec}
//                       </p>
//                     )}
//                   </div>

//                   {/* <span className="text-sm text-white/80 mt-1"> */}
//                   {/* {isOpen ? "Tap to close ▲" : "Tap for details ▼"}
//                   </span> */}
//                 </div>

//                 {/* DETAILS */}
//                 <div
//                   className={`px-5 pb-4 text-sm text-white/90
//                   transition-all duration-300
//                   ${
//                     isOpen
//                       ? "max-h-[300px] opacity-100"
//                       : "max-h-0 opacity-0 overflow-hidden"
//                   }`}
//                 >
//                   <div className="border-t border-white/30 pt-3 space-y-1">
//                     {item.email && (
//                       <p>
//                         <span className="font-semibold">Email:</span>{" "}
//                         {item.email}
//                       </p>
//                     )}

//                     {item.another_email && (
//                       <p>
//                         <span className="font-semibold">Alt:</span>{" "}
//                         {item.another_email}
//                       </p>
//                     )}

//                     {item.president_name && (
//                       <p>
//                         <span className="font-semibold">President:</span>{" "}
//                         {item.president_name}
//                       </p>
//                     )}

//                     {item.name_of_sec && (
//                       <p>
//                         <span className="font-semibold">Secretary:</span>{" "}
//                         {item.name_of_sec}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MemberPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchHoaMembers } from "../../../src/services/api/Member";

// /* ================= INTERFACE ================= */
// interface HoaMember {
//   id: number;
//   name_of_association: string;
//   president_name?: string;
//   name_of_sec?: string;
//   email?: string;
//   another_email?: string;
//   icon: string;
// }

// type GroupedData = {
//   [key: string]: HoaMember[];
// };

// /* ================= COMPONENT ================= */
// const MemberPage: React.FC = () => {
//   const { slug } = useParams();
//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetchHoaMembers(`hoa-members/${slug}`);
//         let members: HoaMember[] = response?.data?.data?.[0]?.hoa_members || [];

//         /* SORT A-Z */
//         members.sort((a, b) =>
//           a.name_of_association.localeCompare(b.name_of_association)
//         );

//         /* GROUP BY FIRST LETTER */
//         const grouped: GroupedData = {};
//         members.forEach((item) => {
//           const letter = item.name_of_association.charAt(0).toUpperCase();
//           if (!grouped[letter]) grouped[letter] = [];
//           grouped[letter].push(item);
//         });

//         setData(grouped);
//       } catch {
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchMembers();
//   }, [slug]);

//   if (loading) return <div className="text-center py-20">Loading...</div>;
//   if (error)
//     return <div className="text-center text-red-500 py-10">{error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-8 lg:px-14 py-12 space-y-14">
//       {Object.keys(data)
//         .sort()
//         .map((letter) => (
//           <div key={letter}>
//             {/* ALPHABET TITLE */}
//             <h2 className="text-3xl font-bold mb-6 text-gray-800">{letter}</h2>

//             {/* ALPHABET GRID */}
//             <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//               {data[letter].map((item) => (
//                 <div
//                   key={item.id}
//                   className="rounded-2xl overflow-hidden shadow-md
//                   bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400
//                   hover:scale-[1.03] transition-transform duration-300"
//                 >
//                   <div className="p-5 text-white h-[220px] space-y-2">
//                     <h3 className="font-semibold text-center text-md uppercase line-clamp-2">
//                       {item.name_of_association}
//                     </h3>

//                     <div className="border-t border-white/30 pt-3 text-sm space-y-1">
//                       {item.email && (
//                         <p>
//                           <span className="font-semibold">Email:</span>{" "}
//                           {item.email}
//                         </p>
//                       )}

//                       {item.another_email && (
//                         <p>
//                           <span className="font-semibold">Alt Email:</span>{" "}
//                           {item.another_email}
//                         </p>
//                       )}

//                       {item.president_name && (
//                         <p>
//                           <span className="font-semibold">President:</span>{" "}
//                           {item.president_name}
//                         </p>
//                       )}

//                       {item.name_of_sec && (
//                         <p>
//                           <span className="font-semibold">Secretary:</span>{" "}
//                           {item.name_of_sec}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default MemberPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHoaMembers } from "../../../src/services/api/Member";

interface HoaMember {
  id: number;
  name_of_association: string;
  icon?: string;
  president_name?: string;
  name_of_sec?: string;
  address?: string;
  email?: string;
  phone?: string;
  website?: string;
  sport?: {
    data?: {
      id: number;
      name: string;
      slug: string;
    }[];
  };
}

const MemberPage: React.FC = () => {
  const { slug } = useParams();
  const [members, setMembers] = useState<HoaMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<HoaMember | null>(null);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetchHoaMembers(`hoa-members/${slug}`);
      console.log("data", response);

      // ✅ TITLE (name) FETCH
      const pageTitle = response?.data?.data?.[0]?.name || "";
      setTitle(pageTitle);

      const fetchedMembers = response?.data?.data?.[0]?.hoa_members || [];

      const sortedMembers = [...fetchedMembers].sort((a, b) =>
        a.sport?.data?.[0]?.name.localeCompare(b.sport?.data?.[0]?.name),
      );

      setMembers(sortedMembers);
    };

    if (slug) fetchMembers();
  }, [slug]);

  return (
    <div className="max-w-full mx-auto">
      {/* PAGE HEADER */}
      <div
        className="py-8 text-center"
        style={{
          backgroundImage: "url('/bggg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="md:text-3xl text-2xl font-bold text-black uppercase">
          {title}
        </h1>
      </div>

      {/* MEMBERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 md:px-16 px-5">
        {members.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMember(item)}
            className="cursor-pointer bg-white rounded-lg border shadow-sm hover:shadow-lg transition"
          >
            <div
              className="text-center py-3 font-semibold uppercase text-sm rounded-t-lg"
              style={{
                backgroundImage: "url('/bggg.jpg')",
                backgroundSize: "cover",
              }}
            >
              {item.sport?.data?.[0]?.name || "—"}
            </div>

            <div className="flex items-center justify-center h-[130px] p-4">
              {item.icon ? (
                <img src={item.icon} className="w-24 h-24 object-contain" />
              ) : (
                <span className="text-gray-400">No Logo</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelectedMember(null)} // ✅ outside click close
        >
          <div
            className="bg-white w-[500px] max-w-4xl rounded-lg shadow-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // ❌ prevent close on inside click
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-1 right-3 text-gray-600 hover:text-black text-2xl"
            >
              ×
            </button>

            {/* MODAL HEADER */}
            <div
              className="bg-[#0d1b4c] text-black text-center py-4 font-bold uppercase"
              style={{
                backgroundImage: "url('/bggg.jpg')",
                backgroundSize: "cover",
              }}
            >
              {selectedMember.sport?.data?.[0]?.name || "—"}
            </div>

            {/* MODAL BODY */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LEFT LOGO */}
              <div className="flex justify-center">
                {selectedMember.icon && (
                  <img
                    src={selectedMember.icon}
                    className="w-32 h-32 object-contain"
                  />
                )}
              </div>

              {/* RIGHT DETAILS */}
              <div className="md:col-span-2 space-y-3 text-sm ">
                <p className="uppercase">
                  <strong>Name:</strong>{" "}
                  {selectedMember.name_of_association || "—"}
                </p>
                <p className="uppercase">
                  <strong>President:</strong>{" "}
                  {selectedMember.president_name || "—"}
                </p>
                <p className="uppercase">
                  <strong>Secretary:</strong>{" "}
                  {selectedMember.name_of_sec || "—"}
                </p>
                {/* <p>
                  <strong>Address:</strong> {selectedMember.address || "—"}
                </p> */}
                <p>
                  <strong className="uppercase">Email:</strong>{" "}
                  {selectedMember.email || "—"}
                </p>
                {/* <p>
                  <strong>Phone:</strong> {selectedMember.phone || "—"}
                </p> */}
                {/*
                {selectedMember.website && (
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href={selectedMember.website}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Visit
                    </a>
                  </p>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberPage;
