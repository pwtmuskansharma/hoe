// working code for all pages

import { apiAboutPage } from "../../services/api/Pages";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* ================= TYPES ================= */
interface PageData {
  id: number;
  title: string;
  slug: string;
  body: string;
  image?: string;
}

/* ================= COMPONENT ================= */
const About = () => {
  const { slug } = useParams<{ slug: string }>();

  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await apiAboutPage(`pages/${slug || "about-hoa"}`);
        const result = res;
        console.log("sayfcdfcda", result.data.data);
        debugger;
        if (result && result.data.data) {
          setPage(result.data.data);
        } else {
          setError("Page not found");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  /* ================= STATES ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error || "No content available"}
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-200 to-sky-200 px-6 py-12">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          {page.title}
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

        {/* Image */}
        {page.image && (
          <img
            src={page.image}
            alt={page.title}
            className="w-full h-auto rounded-xl mb-8"
          />
        )}

        {/* Body Content */}
        <section
          className="text-gray-700 text-base md:text-lg leading-relaxed space-y-5"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      </div>
    </div>
  );
};

export default About;
