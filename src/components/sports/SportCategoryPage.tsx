// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { apiSportCategory } from "../../../src/services/api/Sports";

// interface SportItem {
//   id: number;
//   name: string;
//   slug: string;
//   icon: string;
//   description: string;
//   is_active: number;
// }

// type GroupedData = {
//   [key: string]: SportItem[];
// };

// const SportCategoryPage: React.FC = () => {
//   const { slug } = useParams(); // judo
//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSportCategory = async () => {
//       try {
//         const response = await apiSportCategory(`sport-category/${slug}`);
//         setData(response?.data?.data || {});
//       } catch (err) {
//         console.error("Error fetching sport category:", err);
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchSportCategory();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-60">
//         <span className="text-gray-500">Loading...</span>
//       </div>
//     );
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
//                   className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition bg-white"
//                 >
//                   {/* ICON */}
//                   <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
//                     <img src={item.icon} alt="icon" className="w-10 h-10" />
//                   </div>

//                   {/* NAME */}
//                   <div>
//                     <h3 className="font-medium text-gray-800">{item.name}</h3>
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

// export default SportCategoryPage;

// import React, { useEffect, useState, useMemo } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { apiSportCategory } from "../../../src/services/api/Sports";

// interface SportItem {
//   id: number;
//   name: string;
//   slug: string;
//   icon: string;
//   description: string;
//   is_active: number;
//   letter?: string;
// }

// type GroupedData = {
//   [key: string]: SportItem[];
// };

// const SportCategoryPage: React.FC = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSportCategory = async () => {
//       try {
//         const response = await apiSportCategory(`sport-category/${slug}`);
//         setData(response?.data?.data || {});
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchSportCategory();
//   }, [slug]);

//   /* 🔑 FLATTEN DATA INTO SINGLE LIST */
//   const flatList = useMemo(() => {
//     const list: SportItem[] = [];
//     Object.keys(data).forEach((letter) => {
//       data[letter].forEach((item, index) => {
//         list.push({
//           ...item,
//           letter: index === 0 ? letter : undefined,
//         });
//       });
//     });
//     return list;
//   }, [data]);

//   if (loading) {
//     return <div className="text-center py-20">Loading...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* 🔥 SINGLE AUTO GRID */}
//       <div
//         className="grid gap-6
//         grid-cols-[repeat(auto-fill,minmax(220px,1fr))]"
//       >
//         {flatList.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => navigate(`/sport-documents/${item.slug}`)}
//             className="relative cursor-pointer h-[140px]
//             rounded-2xl overflow-hidden
//            bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400
//             hover:scale-[1.03] transition-all duration-300 shadow-md"
//           >
//             {/* 🔤 ALPHABET BADGE */}
//             {item.letter && (
//               <span
//                 className="absolute top-3 left-3 z-10
//                 bg-white text-gray-900
//                 font-bold text-base
//                 px-3 py-1 rounded-lg shadow"
//               >
//                 {item.letter}
//               </span>
//             )}

//             {/* CONTENT */}
//             <div
//               className="absolute inset-0 flex flex-col
//               items-center justify-center text-center"
//             >
//               <img src={item.icon} alt={item.name} className="w-14 h-14 mb-3" />
//               <h3 className="text-white font-semibold text-sm uppercase">
//                 {item.name}
//               </h3>
//             </div>

//             {/* HOVER OVERLAY */}
//             <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SportCategoryPage;

import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiSportCategory } from "../../../src/services/api/Sports";

interface SportItem {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  is_active: number;
  letter?: string;
}

type GroupedData = {
  [key: string]: SportItem[];
};

const SportCategoryPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<GroupedData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSportCategory = async () => {
      try {
        const response = await apiSportCategory(`sport-category/${slug}`);
        setData(response?.data?.data || {});
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchSportCategory();
  }, [slug]);

  /* 🔑 FLATTEN DATA INTO SINGLE LIST */
  const flatList = useMemo(() => {
    const list: SportItem[] = [];
    Object.keys(data).forEach((letter) => {
      data[letter].forEach((item, index) => {
        list.push({
          ...item,
          letter: index === 0 ? letter : undefined,
        });
      });
    });
    return list;
  }, [data]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* 🔥 SINGLE AUTO GRID */}
      <div className="grid gap-12 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {flatList.map((item) => (
          /* 🔹 WRAPPER */
          <div key={item.id} className="relative">
            {/* 🔤 ALPHABET BADGE (CARD KE BAHAR) */}
            {item.letter && (
              <span
                className="absolute -top-9 left-3 z-20
                bg-white text-gray-900
                font-bold text-base
                px-3 py-1 rounded-lg shadow"
              >
                {item.letter}
              </span>
            )}

            {/* 🔹 CARD */}
            <div
              // onClick={() => navigate(`/sport-documents/${item.slug}`)}
              onClick={() =>
                navigate(`/sport-documents/${item.slug}`, {
                  state: { fromCategory: slug },
                })
              }
              className="relative cursor-pointer h-[140px]
              rounded-2xl overflow-hidden
              bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400
              hover:scale-[1.03] transition-all duration-300 shadow-md"
            >
              {/* CONTENT */}
              <div
                className="absolute inset-0 flex flex-col
                items-center justify-center text-center"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-16 h-16 mb-3"
                />
                <h3 className="text-white font-semibold text-md uppercase">
                  {item.name}
                </h3>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategoryPage;
