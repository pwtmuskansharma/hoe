import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiSportCategory } from "../../../src/services/api/Sports";

interface SportItem {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  is_active: number;
}

type GroupedData = {
  [key: string]: SportItem[];
};

const SportCategoryPage: React.FC = () => {
  const { slug } = useParams(); // judo
  const [data, setData] = useState<GroupedData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSportCategory = async () => {
      try {
        const response = await apiSportCategory(`sport-category/${slug}`);
        setData(response?.data?.data || {});
      } catch (err) {
        console.error("Error fetching sport category:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchSportCategory();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.keys(data).map((letter) => (
          <div key={letter}>
            {/* Alphabet Heading */}
            <h2 className="text-3xl font-bold mb-6">{letter}</h2>

            {/* Cards */}
            <div className="space-y-4">
              {data[letter].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition bg-white"
                >
                  {/* ICON */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                    <img src={item.icon} alt="icon" className="w-10 h-10" />
                  </div>

                  {/* NAME */}
                  <div>
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategoryPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
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
//   const { slug } = useParams(); // parent slug (judo etc)
//   const navigate = useNavigate();

//   const [data, setData] = useState<GroupedData>({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSportCategory = async () => {
//       try {
//         const response = await apiSportCategory(`sport-category/${slug}`);
//         setData(response?.data?.data || {});
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) fetchSportCategory();
//   }, [slug]);

//   if (loading) {
//     return <div className="text-center py-20">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {Object.keys(data).map((letter) => (
//           <div key={letter}>
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] grid-flow-col auto-rows-max gap-6 justify-items-center">
//               {/* LETTER — SAME GRID, FIRST ROW */}
//               <h2 className="col-span-1 row-start-1 text-3xl font-bold mb-2">
//                 {letter}
//               </h2>

//               {/* CARDS — START FROM ROW 2 */}
//               {data[letter].map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => navigate(`/sport-documents/${item.slug}`)}
//                   className="row-start-2 cursor-pointer w-[220px] h-[140px]
//           rounded-2xl overflow-hidden
//           bg-gradient-to-r from-indigo-500 via-blue-400 to-teal-700 to-blue-400
//           hover:shadow-xl transition relative"
//                 >
//                   <div className="absolute inset-0 flex flex-col items-center justify-center ">
//                     <img
//                       src={item.icon}
//                       alt={item.name}
//                       className="w-14 h-14 mb-3"
//                     />
//                     <h3 className="text-white font-semibold tracking-wide text-sm uppercase">
//                       {item.name}
//                     </h3>
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
