import React, { useState, useEffect } from "react";

const achievementsOptions = ["Gold", "Silver", "Bronze", "Participation"];
const levels = ["District", "State", "National", "International", "Other"];

export default function AllAchievements({ formData, updateFormData }) {
  // Initialize achievements from parent or empty
  const [achievements, setAchievements] = useState(() => {
    return (
      formData.achievements || {
        District: [],
        State: [],
        National: [],
        International: [],
        Other: "",
      }
    );
  });

  // Track which level has been added (to toggle Add/Reset button)
  const [addedLevels, setAddedLevels] = useState(() => {
    const initial = {};
    levels.forEach((level) => {
      initial[level] = achievements[level]?.length > 0;
    });
    return initial;
  });

  // Sync with parent whenever achievements change
  useEffect(() => {
    updateFormData({ achievements });
  }, [achievements, updateFormData]);

  // Handle field change
  const handleChange = (level, index, field, value) => {
    if (level === "Other") {
      setAchievements({ ...achievements, Other: value });
      return;
    }

    const updatedLevel = [...achievements[level]];
    updatedLevel[index] = { ...updatedLevel[index], [field]: value };
    setAchievements({ ...achievements, [level]: updatedLevel });
  };

  // Add new achievement entry for a level
  const addAchievement = (level) => {
    if (level === "Other") return; // Only text field

    const updatedLevel = [
      ...(achievements[level] || []),
      {
        tournamentName: "",
        organization: "",
        place: "",
        date: "",
        achievement: "",
      },
    ];

    setAchievements({ ...achievements, [level]: updatedLevel });
    setAddedLevels({ ...addedLevels, [level]: true });
  };

  // Reset achievement fields for a level
  const resetAchievement = (level) => {
    setAchievements({ ...achievements, [level]: [] });
    setAddedLevels({ ...addedLevels, [level]: false });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {levels.map((level) => (
        <div
          key={level}
          className="border rounded-xl p-6 mt-6 shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {level} Achievement
          </h2>

          {/* Other is just a text input */}
          {level === "Other" ? (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Other Achievements
              </label>
              <textarea
                placeholder="Enter other achievements"
                value={achievements.Other || ""}
                onChange={(e) =>
                  handleChange(level, 0, "Other", e.target.value)
                }
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                rows={4} // Adjust height as needed
              />
            </div>
          ) : (
            <>
              {(achievements[level] || []).map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-md p-4 mb-4 bg-gray-50 space-y-3"
                >
                  {/* Tournament Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Tournament Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter tournament name"
                      value={item.tournamentName || ""}
                      onChange={(e) =>
                        handleChange(
                          level,
                          idx,
                          "tournamentName",
                          e.target.value
                        )
                      }
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Organization / Authority */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Organization / Authority
                    </label>
                    <input
                      type="text"
                      placeholder="Organizer name"
                      value={item.organization || ""}
                      onChange={(e) =>
                        handleChange(level, idx, "organization", e.target.value)
                      }
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Place */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Place of Competition
                    </label>
                    <input
                      type="text"
                      placeholder="City / Venue"
                      value={item.place || ""}
                      onChange={(e) =>
                        handleChange(level, idx, "place", e.target.value)
                      }
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Date of Competition
                    </label>
                    <input
                      type="date"
                      value={item.date || ""}
                      onChange={(e) =>
                        handleChange(level, idx, "date", e.target.value)
                      }
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>

                  {/* Achievement Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Achievement
                    </label>
                    <select
                      value={item.achievement || ""}
                      onChange={(e) =>
                        handleChange(level, idx, "achievement", e.target.value)
                      }
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      <option value="">Select</option>
                      {achievementsOptions.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}

              {/* Add / Reset Button */}
              {!addedLevels[level] ? (
                <button
                  type="button"
                  onClick={() => addAchievement(level)}
                  className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
                >
                  + Add {level} Achievement
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => resetAchievement(level)}
                  className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reset {level} Achievement
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
