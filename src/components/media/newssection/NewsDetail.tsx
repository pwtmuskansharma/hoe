import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newsFetch } from "../../../services/api/News";

interface NewsDetail {
  title: string;
  body: string;
  image: string;
  created_at: string;
}

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams(); // 👈 slug from URL
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const response = await newsFetch(`news/${slug}`); // ✅ correct template string

        setNews(response?.data?.data || null);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!news) {
    return <p className="text-center mt-10">News not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-72 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">{news.title}</h1>

        <p className="text-sm text-gray-400 mt-2">
          {new Date(news.created_at).toDateString()}
        </p>

        <div
          className="prose max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: news.body }}
        />
      </div>
    </div>
  );
};

export default NewsDetailPage;
