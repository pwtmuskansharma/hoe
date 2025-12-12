import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function PreviewModal({ show, onClose, data }) {
  const [submitting, setSubmitting] = useState(false); // track submission

  if (!show) return null;

  // Submit form data to API
  const handleConfirm = async () => {
    try {
      setSubmitting(true);
      console.log("Submitting data:", data); // for debugging
      debugger;

      const apiUrl = "https://your-api-endpoint.com/submit-form"; // replace with your endpoint
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        onClose(); // close modal after success
      } else {
        alert(result.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-3xl w-full h-[90vh] overflow-y-auto shadow-xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Preview Form Data</h2>
            <button
              onClick={onClose}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center justify-center"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>

          {/* FORM SECTIONS */}
          <Section title="Basic Details">
            <Row
              label="Name"
              value={`${data.firstName} ${data.middleName} ${data.lastName}`}
            />
            <Row label="Father Name" value={data.fatherName} />
            <Row label="Mother Name" value={data.motherName} />
            <Row label="Gender" value={data.gender} />
            <Row label="DOB" value={data.dob} />
            <Row label="Mobile" value={data.mobile} />
            <Row label="Email" value={data.email} />
            <Row
              label="Email Verified"
              value={data.isEmailVerified ? "Yes" : "No"}
            />
            <Row label="Blood Group" value={data.bloodGroup} />
            <Row label="Sport" value={data.sportId?.name} />
            <Row label="Categories" value={data.categoryId.join(", ")} />
          </Section>

          <Section title="Temporary Address">
            {Object.entries(data.tempAddress).map(([key, val]) => (
              <Row key={key} label={key} value={val} />
            ))}
          </Section>

          <Section title="Permanent Address">
            {Object.entries(data.permAddress).map(([key, val]) => (
              <Row key={key} label={key} value={val} />
            ))}
          </Section>

          <Section title="Aadhaar Details">
            <Row label="Aadhaar No" value={data.aadhaar} />
            <Row
              label="Verified"
              value={data.isAadhaarVerified ? "Yes" : "No"}
            />
            <Row
              label="Aadhaar File"
              value={data.aadhaarFile ? "File Uploaded" : "No File"}
            />
          </Section>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Education Details</h3>
            {data.education && data.education.length > 0 ? (
              data.education.map((edu, i) => (
                <div
                  key={i}
                  className="border p-4 rounded mb-3 bg-gray-50 space-y-1"
                >
                  <p>
                    <strong>Education Level:</strong>{" "}
                    {edu.level === "other" ? edu.otherLevel : edu.level}
                  </p>
                  <p>
                    <strong>Institution:</strong> {edu.institution || "—"}
                  </p>
                  <p>
                    <strong>Degree:</strong> {edu.degree || "—"}
                  </p>
                  <p>
                    <strong>Location:</strong> {edu.location || "—"}
                  </p>
                  <p>
                    <strong>State:</strong> {edu.state || "—"}
                  </p>
                  <p>
                    <strong>District:</strong> {edu.district || "—"}
                  </p>
                  <p>
                    <strong>City:</strong> {edu.city || "—"}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {edu.pincode || "—"}
                  </p>
                </div>
              ))
            ) : (
              <p>No education added.</p>
            )}
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Achievements Details</h3>
            {data.achievements ? (
              <>
                {["District", "State", "National", "International"].map(
                  (level) => (
                    <div key={level} className="mb-4">
                      <h4 className="text-lg font-bold mb-1">{level}</h4>
                      {data.achievements[level]?.length > 0 ? (
                        data.achievements[level].map((item, idx) => (
                          <div
                            key={idx}
                            className="border p-4 rounded bg-gray-50 mb-2"
                          >
                            <p>
                              <strong>Tournament:</strong>{" "}
                              {item.tournamentName || "—"}
                            </p>
                            <p>
                              <strong>Organization:</strong>{" "}
                              {item.organization || "—"}
                            </p>
                            <p>
                              <strong>Place:</strong> {item.place || "—"}
                            </p>
                            <p>
                              <strong>Date:</strong> {item.date || "—"}
                            </p>
                            <p>
                              <strong>Achievement:</strong>{" "}
                              {item.achievement || "—"}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 ml-2 text-sm">
                          No {level} achievements added.
                        </p>
                      )}
                    </div>
                  )
                )}
                <div className="mb-2">
                  <h4 className="text-lg font-bold mb-1">Other</h4>
                  <p className="bg-gray-50 p-3 rounded">
                    {data.achievements.Other || "No Other Achievements"}
                  </p>
                </div>
              </>
            ) : (
              <p>No achievements added.</p>
            )}
          </div>

          <Section title="Social Media Links">
            {Object.entries(data.socialMedia).map(([platform, obj]) => (
              <Row key={platform} label={platform} value={obj.url} />
            ))}
          </Section>

          <Section title="Login Details">
            <Row label="Login Username" value={data.email} />
          </Section>

          {/* Buttons */}
          <div className="mt-4 flex justify-end gap-3">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              onClick={onClose}
              disabled={submitting}
            >
              Close Preview
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={handleConfirm}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Confirm"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold border-b pb-1 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <p className="mb-1">
      <strong>{label}: </strong>
      {value || "---"}
    </p>
  );
}
