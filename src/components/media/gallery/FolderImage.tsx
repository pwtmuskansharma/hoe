import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { galleryFetch } from "../../../services/api/Gallery";

interface GalleryImage {
  name: string;
  url: string;
}

const GalleryFolderPage: React.FC = () => {
  const { folder } = useParams();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await galleryFetch(`gallery/folder/${folder}`);
        setImages(response?.data?.data || []);
        console.log("sdata folder", response?.data?.data);
        debugger;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (folder) fetchImages();
  }, [folder]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 text-center">
        <h1 className="text-2xl font-bold text-white uppercase">{folder}</h1>
        <Link to="/gallery" className="text-blue-200 text-sm underline">
          ← Back to Gallery
        </Link>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {images.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryFolderPage;
