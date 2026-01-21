import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHoaMembers } from "../../services/api/Member";

interface HoaMember {
  id: number;
  name_of_association: string;
  icon?: string;
  president_name?: string;
  name_of_sec?: string;
  address?: string;
  email?: string;
  phone?: string;
  website?: string;
}

const MemberUnit: React.FC = () => {
  const { slug } = useParams();
  const [members, setMembers] = useState<HoaMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<HoaMember | null>(null);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetchHoaMembers(`hoa-members/${slug}`);
        const fetchedMembers = response?.data?.data?.[0]?.hoa_members || [];
        const pageTitle = response?.data?.data?.[0]?.name || "";
        setTitle(pageTitle);
        // ✅ First added → first show, last added → last show
        const orderedMembers = [...fetchedMembers].sort((a, b) => a.id - b.id);

        setMembers(orderedMembers);
      } catch (error) {
        console.error("Failed to fetch HOA members", error);
      }
    };

    if (slug) fetchMembers();
  }, [slug]);

  return (
    <div className="max-w-full mx-auto">
      {/* ================= PAGE HEADER ================= */}
      <div
        className="py-8 text-center "
        style={{
          backgroundImage: "url('/bggg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="md:text-3xl text-2xl font-bold text-black uppercase">
          {title}
        </h1>
      </div>

      {/* ================= MEMBERS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 py-12 md:px-16 px-5">
        {members.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMember(item)}
            className="cursor-pointer bg-white rounded-lg border shadow-sm hover:shadow-lg transition"
          >
            <div
              className="text-center py-3 font-semibold uppercase text-sm rounded-t-lg h-20"
              style={{
                backgroundImage: "url('/bggg.jpg')",
                backgroundSize: "cover",
              }}
            >
              {item.name_of_association}
            </div>

            <div className="flex items-center justify-center h-[130px] p-4">
              {item.icon ? (
                <img
                  src={item.icon}
                  alt={item.name_of_association}
                  className="w-24 h-24 object-contain"
                />
              ) : (
                <span className="text-gray-400">No Logo</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberUnit;
