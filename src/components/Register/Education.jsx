import React, { useState, useEffect } from "react";

export default function AchievementsAndEducation({ formData, updateFormData }) {
  const educationLevels = [
    { id: 1, label: "10th", value: "10th" },
    { id: 2, label: "12th", value: "12th" },
    { id: 5, label: "Diploma", value: "diploma" },
    { id: 3, label: "Graduation", value: "graduation" },
    { id: 4, label: "Post Graduation", value: "post_graduation" },
    { id: 6, label: "Other", value: "other" },
  ];

  const [educationList, setEducationList] = useState(() => {
    const initial = [
      {
        level: "10th",
        otherLevel: "",
        institution: "",
        degree: "",
        location: "",
        district: "",
        state: "",
        city: "",
        pincode: "",
        isDefault: true,
      },
    ];

    if (formData.education && formData.education.length > 0) {
      formData.education.forEach((edu) => {
        if (edu.level !== "10th") {
          initial.push({ ...edu, isDefault: false });
        }
      });
    }

    return initial;
  });

  useEffect(() => {
    updateFormData({ education: educationList });
  }, [educationList, updateFormData]);

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        level: "",
        otherLevel: "",
        institution: "",
        degree: "",
        location: "",
        district: "",
        state: "",
        city: "",
        pincode: "",
        isDefault: false,
      },
    ]);
  };

  const resetEducation = (index) => {
    const newList = [...educationList];
    newList.splice(index, 1);
    setEducationList(newList);
  };

  const handleEducationChange = (index, field, value) => {
    const newList = [...educationList];
    newList[index][field] = value;
    setEducationList(newList);
  };

  const getFilteredLevels = (currentIndex) => {
    const selected = educationList
      .map((edu, i) => (i !== currentIndex ? edu.level : null))
      .filter((lvl) => lvl && lvl !== "other");

    return educationLevels.filter(
      (lvl) => lvl.value === "other" || !selected.includes(lvl.value)
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="border rounded-xl p-6 shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-4">Education Qualification</h3>

        {educationList.map((edu, index) => (
          <div
            key={index}
            className="border rounded-md p-4 mb-4 bg-gray-50 space-y-3"
          >
            <div>
              <label className="block mb-1 font-medium">Education Level</label>
              <select
                value={edu.level}
                disabled={edu.isDefault}
                onChange={(e) =>
                  handleEducationChange(index, "level", e.target.value)
                }
                className={`w-full p-2 border rounded-md ${
                  edu.isDefault ? "bg-gray-200 cursor-not-allowed" : ""
                }`}
              >
                <option value="">Select Level</option>
                {getFilteredLevels(index).map((lvl) => (
                  <option key={lvl.id} value={lvl.value}>
                    {lvl.label}
                  </option>
                ))}
              </select>
            </div>

            {edu.level === "other" && (
              <div>
                <label className="block mb-1 font-medium">
                  Enter Other Education Level
                </label>
                <input
                  type="text"
                  value={edu.otherLevel}
                  onChange={(e) =>
                    handleEducationChange(index, "otherLevel", e.target.value)
                  }
                  placeholder="Enter custom education level"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}

            <div>
              <label className="block mb-1 font-medium">Institution Name</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleEducationChange(index, "institution", e.target.value)
                }
                className="w-full p-2 border rounded-md"
                placeholder="Enter a institution name"
              />
            </div>

            {/* ✅ Hide Degree for 10th and 12th */}
            {edu.level !== "10th" && edu.level !== "12th" && (
              <div>
                <label className="block mb-1 font-medium">Degree Name</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter a degree name"
                />
              </div>
            )}

            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) =>
                  handleEducationChange(index, "location", e.target.value)
                }
                className="w-full p-2 border rounded-md"
                placeholder="Enter a location"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">State</label>
              <input
                type="text"
                value={edu.state}
                onChange={(e) =>
                  handleEducationChange(index, "state", e.target.value)
                }
                className="w-full p-2 border rounded-md"
                placeholder="Enter a state"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">District</label>
              <input
                type="text"
                value={edu.district}
                onChange={(e) =>
                  handleEducationChange(index, "district", e.target.value)
                }
                className="w-full p-2 border rounded-md"
                placeholder="Enter a district"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">City</label>
              <input
                type="text"
                value={edu.city}
                onChange={(e) =>
                  handleEducationChange(index, "city", e.target.value)
                }
                className="w-full p-2 border rounded-md"
                placeholder="Enter a city"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Pincode</label>
              <input
                type="text"
                value={edu.pincode}
                maxLength={6}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[0-9]*$/.test(value)) {
                    handleEducationChange(index, "pincode", value);
                  }
                }}
                className="w-full p-2 border rounded-md"
                placeholder="Enter a pincode"
              />
            </div>

            {!edu.isDefault && (
              <button
                type="button"
                onClick={() => resetEducation(index)}
                className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Reset/delete Education
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addEducation}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Education
        </button>
      </div>
    </div>
  );
}
