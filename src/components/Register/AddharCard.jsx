import React, { useState } from "react";

export default function AddharCard({ formData, updateFormData }) {
  const [aadhaarNumber, setAadhaarNumber] = useState(formData.aadhaar || "");
  const [isAadhaarValid, setIsAadhaarValid] = useState(
    formData.isAadhaarVerified || false
  );
  const [otp, setOtp] = useState(formData.aadhaarOtp || "");
  const [aadhaarFile, setAadhaarFile] = useState(formData.aadhaarFile || null);

  // Format Aadhaar → XXXX-XXXX-XXXX
  const formatAadhaar = (value) => {
    let digits = value.replace(/\D/g, "").slice(0, 12);
    let formatted = "";
    if (digits.length > 0) formatted = digits.slice(0, 4);
    if (digits.length > 4) formatted += "-" + digits.slice(4, 8);
    if (digits.length > 8) formatted += "-" + digits.slice(8, 12);
    return formatted;
  };

  // Handle Aadhaar Input
  const handleAadhaarChange = (value) => {
    const formattedValue = formatAadhaar(value);
    setAadhaarNumber(formattedValue);

    const cleanAadhaar = formattedValue.replace(/-/g, "");
    const valid = cleanAadhaar.length === 12;
    setIsAadhaarValid(valid);

    // Reset OTP if invalid
    if (!valid) setOtp("");

    // Update parent formData
    updateFormData({
      aadhaar: formattedValue,
      isAadhaarVerified: isAadhaarValid,
      aadhaarOtp: otp,
    });
  };

  // Handle OTP Change
  const handleOtpChange = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 6);
    setOtp(cleaned);
    updateFormData({ aadhaarOtp: cleaned });
  };

  // Fake OTP Verification
  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setIsAadhaarValid(true);
      updateFormData({ isAadhaarVerified: true });
      alert("Aadhaar Verified Successfully!");
    } else {
      alert("Invalid OTP");
    }
  };

  // Handle Aadhaar File Upload
  const handleFileUpload = (file) => {
    setAadhaarFile(file);
    updateFormData({ aadhaarFile: file });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-xl shadow-sm bg-white space-y-4">
      <h2 className="text-xl font-semibold mb-4">Aadhaar Verification</h2>

      {/* Aadhaar Number */}
      <div>
        <label className="block mb-1 font-medium">
          Aadhaar Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="1234-5678-9123"
          maxLength={14}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={aadhaarNumber}
          onChange={(e) => handleAadhaarChange(e.target.value)}
        />
        {!isAadhaarValid && aadhaarNumber.length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            Aadhaar must be 12 digits (XXXX-XXXX-XXXX)
          </p>
        )}
      </div>

      {/* OTP Input */}
      {isAadhaarValid && !formData.isAadhaarVerified && (
        <div>
          <label className="block mb-1 font-medium">Enter OTP</label>
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={otp}
            onChange={(e) => handleOtpChange(e.target.value)}
          />
          <button
            type="button"
            onClick={handleVerifyOtp}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Verify OTP
          </button>
        </div>
      )}

      {/* Aadhaar Upload */}
      {formData.isAadhaarVerified && (
        <div>
          <label className="block mb-1 font-medium">
            Upload Aadhaar (PDF / Image)
          </label>
          <input
            type="file"
            accept=".pdf,image/*"
            onChange={(e) => handleFileUpload(e.target.files[0])}
            className="w-full"
          />
          {aadhaarFile && (
            <p className="mt-1 text-green-600">{aadhaarFile.name} selected</p>
          )}
        </div>
      )}

      {/* Aadhaar Verified Message */}
      {formData.isAadhaarVerified && (
        <div className="mt-4 p-2 border-l-4 border-green-600 bg-green-50 rounded">
          <p className="text-green-800 font-medium">
            Aadhaar Verified: {aadhaarNumber}
          </p>
        </div>
      )}
    </div>
  );
}
