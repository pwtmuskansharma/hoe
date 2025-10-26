import React from "react";
import { X } from "lucide-react"; // optional icon (if you installed lucide-react, else replace with ×)

interface PreviewModalProps {
  form: any;
  onConfirm: () => void;
  onCancel: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ form, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-6 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition"
        >
          <X className="w-5 h-5" />
          {/* If not using lucide-react, just use: × */}
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">
          Preview Your Details
        </h2>

        {/* Data Display */}
        <div className="text-sm space-y-2">
          <p><span className="font-semibold">First Name:</span> {form.firstName}</p>
          <p><span className="font-semibold">Middle Name:</span> {form.middleName}</p>
          <p><span className="font-semibold">Last Name:</span> {form.lastName}</p>
          <p><span className="font-semibold">Date of Birth:</span> {form.dob}</p>
          <p><span className="font-semibold">Gender:</span> {form.gender}</p>
          <p><span className="font-semibold">Mobile:</span> {form.mobile}</p>
          <p><span className="font-semibold">Email:</span> {form.email}</p>
          <p><span className="font-semibold">Sports:</span> {Array.isArray(form.sportCategory) ? form.sportCategory.join(", ") : form.sportCategory}</p>
          <p><span className="font-semibold">Event:</span> {form.event || "—"}</p>
          <p><span className="font-semibold">Username:</span> {form.username}</p>
          <p><span className="font-semibold">Terms Accepted:</span> {form.terms ? "Yes" : "No"}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Submit
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
