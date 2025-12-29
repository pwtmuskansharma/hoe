import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pressRelease } from "../../../services/api/PressRelease";

/* ================= INTERFACES ================= */
interface PressRelease {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  short_description: string;
  featured_image: string;
  created_at: string;
}

interface Meta {
  current_page: number;
  last_page: number;
}

/* ================= COMPONENT ================= */
const PressReleasesPage: React.FC = () => {
  const [press, setPress] = useState<PressRelease[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPress = async () => {
      try {
        setLoading(true);

        const response = await pressRelease(`press-releases?page=${page}`);

        setPress(response?.data?.data || []);

        // ✅ IMPORTANT: pagination meta
        setMeta(response?.data?.meta || null);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchPress();
  }, [page]);

  if (loading) {
    return <p className="text-center mt-10">Loading press releases...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">Press Releases</h1>
        <p className="text-indigo-200 mt-2">Latest announcements & updates</p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {press.map((item) => (
            <Link
              key={item.id}
              to={`/press-releases/${item.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.featured_image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {item.short_description}
                </p>

                <p className="text-xs text-gray-400 mt-3">
                  {new Date(item.created_at).toDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {meta && meta.last_page > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Prev */}
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 rounded bg-indigo-500 text-white
              disabled:opacity-50 hover:bg-indigo-600 transition"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(meta.last_page)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-full font-semibold transition
                  ${
                    page === i + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              disabled={page === meta.last_page}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 rounded bg-indigo-500 text-white
              disabled:opacity-50 hover:bg-indigo-600 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PressReleasesPage;
