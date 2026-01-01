import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHoaMembers } from "../../../src/services/api/Member";

/* ================= INTERFACE ================= */
interface HoaMember {
  id: number;
  name_of_association: string;
  president_name?: string | null;
  member_type?: string | null;
  name_of_sec?: string | null;
  icon?: string | null;
  multiple_images?: string[];
}

/* ================= FLAT CARD DATA ================= */
interface CardItem {
  image: string;
  name: string;
  member_type?: string | null;
  designation: string;
  organisation: string;
}

/* ================= COMPONENT ================= */
const OrganisationPage: React.FC = () => {
  const { slug } = useParams();
  const [cards, setCards] = useState<CardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetchHoaMembers(`hoa-members/${slug}`);

        const members: HoaMember[] =
          response?.data?.data?.[0]?.hoa_members || [];

        const cardData: CardItem[] = [];

        members.forEach((item) => {
          /* ===== MULTIPLE IMAGES ===== */
          if (item.multiple_images && item.multiple_images.length > 0) {
            item.multiple_images.forEach((img) => {
              cardData.push({
                image: img,
                name: item.president_name || "",
                member_type: item.member_type || "",
                designation: item.name_of_sec || "",
                organisation: item.name_of_association,
              });
            });
          }

          /* ===== SINGLE IMAGE ===== */
          if (item.icon) {
            cardData.push({
              image: item.icon,
              name: item.president_name || "",
              member_type: item.member_type || "",
              designation: item.name_of_sec || "",
              organisation: item.name_of_association,
            });
          }
        });

        setCards(cardData);
      } catch (err) {
        console.error("Error fetching organisation data:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchMembers();
  }, [slug]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  /* ================= UI ================= */
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition uppercase"
          >
            {/* IMAGE */}
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-60 object-cover"
            />

            {/* TEXT */}
            <div className="p-3">
              <h4 className="font-semibold text-gray-800 text-md">
                {card.name}
              </h4>

              {card.member_type && (
                <p className="text-xs text-blue-600 font-medium">
                  {card.member_type}
                </p>
              )}

              {card.designation && (
                <p className="text-md text-gray-600">{card.designation}</p>
              )}

              <p className="text-sm text-gray-500">{card.organisation}</p>
            </div>
          </div>
        ))}
      </div>

      {cards.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No data available</div>
      )}
    </div>
  );
};

export default OrganisationPage;
