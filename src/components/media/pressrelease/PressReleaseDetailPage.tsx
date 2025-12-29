import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pressRelease } from "../../../services/api/PressRelease";
/* ================= INTERFACE ================= */
interface PressDetail {
  title: string;
  subtitle: string;
  content: string;
  featured_image: string;
  created_at: string;
  seo_title: string;
  seo_description: string;
}

/* ================= COMPONENT ================= */
const PressReleaseDetailPage: React.FC = () => {
  const { slug } = useParams();
  const [press, setPress] = useState<PressDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPressDetail = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const response = await pressRelease(`press-releases/${slug}`); // ✅ correct template string

        setPress(response?.data?.data || null);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchPressDetail();
  }, [slug]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!press) {
    return <p className="text-center mt-10">Press release not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <img
          src={press.featured_image}
          alt={press.title}
          className="w-full h-72 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">{press.title}</h1>

        <p className="text-lg text-gray-600 mt-2">{press.subtitle}</p>

        <p className="text-sm text-gray-400 mt-2">
          {new Date(press.created_at).toDateString()}
        </p>

        <div
          className="prose max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: press.content }}
        />
      </div>
    </div>
  );
};

export default PressReleaseDetailPage;
