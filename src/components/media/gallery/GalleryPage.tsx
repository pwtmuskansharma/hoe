import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { galleryFetch } from "../../../services/api/Gallery";
/* ================= INTERFACE ================= */
interface GalleryItem {
  name: string;
  type: string;
  folder: string;
  url: string;
}

/* ================= COMPONENT ================= */
const GalleryPage: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await galleryFetch("media");

        setGallery(response?.data?.data || []);
      } catch (err) {
        console.error("Error fetching media:", err);
        setError("Failed to load media.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">GALLERY</h1>
        <p className="text-blue-100 mt-2 text-sm md:text-base">
          Moments & Media Collection
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading gallery...</p>
        ) : gallery.length === 0 ? (
          <p className="text-center text-gray-500">No media found</p>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              md:grid-cols-3
              lg:grid-cols-4
              gap-4
            "
          >
            {gallery.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Info */}
                <div className="p-2 text-center">
                  <p className="text-xs sm:text-sm font-medium truncate">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-gray-500">{item.folder}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { galleryFetch } from "../../../services/api/Gallery";

// interface GalleryFolder {
//   name: string;
//   type: string;
//   thumbnail: string;
//   url: string;
// }

// const GalleryPage: React.FC = () => {
//   const [folders, setFolders] = useState<GalleryFolder[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const response = await galleryFetch("media");
//         setFolders(response?.data?.data || []);
//         console.log("gallery", response?.data?.data);
//         debugger;
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGallery();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* HEADER */}
//       <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
//         <h1 className="text-3xl font-bold text-white">GALLERY</h1>
//         <p className="text-blue-100 mt-2">Folders</p>
//       </div>

//       <div className="max-w-7xl mx-auto p-6">
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
//             {folders.map((item, index) => (
//               <Link
//                 key={index}
//                 to={`/gallery/${item.name}`}
//                 className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//               >
//                 <div className="aspect-square overflow-hidden">
//                   <img
//                     src={item.thumbnail}
//                     alt={item.name}
//                     className="w-full h-full object-cover hover:scale-105 transition"
//                   />
//                 </div>

//                 <div className="p-3 text-center">
//                   <p className="font-semibold text-sm uppercase">{item.name}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;
