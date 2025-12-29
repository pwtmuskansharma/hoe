import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsFetch } from "../../../services/api/News";
/* ================= INTERFACES ================= */
interface NewsItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  created_at: string;
  links: {
    single_screen_api: string;
  };
}

const ITEMS_PER_PAGE = 6;

/* ================= COMPONENT ================= */
const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsFetch("news"); // ✅ API call

        setNews(response?.data?.data || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  /* Pagination logic */
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">NEWS</h1>
        <p className="text-blue-100 mt-2">Latest updates & announcements</p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading news...</p>
        ) : (
          <>
            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.slug}`}
                  state={{ api: item.links.single_screen_api }}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(item.created_at).toDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
              {/* Prev */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="rounded-full px-4 py-2 bg-blue-500 text-white
               hover:bg-blue-600 transition disabled:opacity-50"
              >
                ← Prev
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition
        ${
          currentPage === i + 1
            ? "bg-blue-600 text-white shadow-md"
            : "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white"
        }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="rounded-full px-4 py-2 bg-blue-500 text-white
               hover:bg-blue-600 transition disabled:opacity-50"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
