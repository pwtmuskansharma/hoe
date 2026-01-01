import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchHoaMembers } from "../../../src/services/api/Member";

/* ================= INTERFACE ================= */
interface HoaMember {
  id: number;
  name_of_association: string;
  president_name?: string;
  name_of_sec?: string;
  email?: string;
  another_email?: string;
  icon: string;
  created_at?: string;
}

type GroupedData = {
  [key: string]: HoaMember[];
};

/* ================= COMPONENT ================= */
const MemberPage: React.FC = () => {
  const { slug } = useParams();
  const [data, setData] = useState<GroupedData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // ✅ service function call
        const response = await fetchHoaMembers(`hoa-members/${slug}`);

        const members: HoaMember[] =
          response?.data?.data?.[0]?.hoa_members || [];

        console.log("dhusd", members);
        debugger;

        /* ===== Alphabet Grouping (Same Structure) ===== */
        const grouped: GroupedData = {};

        members.forEach((item) => {
          const letter = item.name_of_association.charAt(0).toUpperCase();

          if (!grouped[letter]) {
            grouped[letter] = [];
          }
          grouped[letter].push(item);
        });

        setData(grouped);
      } catch (err) {
        console.error("Error fetching HOA members:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchMembers();
  }, [slug]);

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
                  className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition bg-white"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name_of_association}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    {/* TITLE */}
                    <h3 className="font-semibold text-gray-800 text-base">
                      {item.name_of_association}
                    </h3>

                    {/* PRESIDENT */}
                    {item.president_name && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">President:</span>{" "}
                        {item.president_name}
                      </p>
                    )}
                    {/* Sec */}
                    {item.name_of_sec && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Secretary:</span>{" "}
                        {item.name_of_sec}
                      </p>
                    )}

                    {/* EMAIL */}
                    {item.email && (
                      <p className="text-sm text-gray-500 break-words">
                        <span className="font-medium">Email:</span> {item.email}
                      </p>
                    )}

                    {/* another email */}
                    {item.another_email && (
                      <p className="text-sm text-gray-500 break-words">
                        <span className="font-medium">An Other Email:</span>{" "}
                        {item.another_email}
                      </p>
                    )}
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

export default MemberPage;
