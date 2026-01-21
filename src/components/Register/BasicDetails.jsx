import React, { useState, useEffect } from "react";
import SportsSelect from "./Sport";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SportCategorySelect from "./SportCategory";
const API_BASE = "https://hoa.premiercourses.in/api";

// Validation helpers
const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isMobile = (mobile) => /^[6-9]\d{4}-?\d{5}$/.test(mobile);

export default function BasicDetails({ formData, updateFormData }) {
  const [errors, setErrors] = useState({});
  const [showSendOtp, setShowSendOtp] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  // Mobile OTP states
  const [showMobileSendOtp, setShowMobileSendOtp] = useState(false);
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");
  const [mobileTimer, setMobileTimer] = useState(0);

  const [photoUrl, setPhotoUrl] = useState("");
  const [passportPhotoName, setPassportPhotoName] = useState("");

  const DUMMY_EMAIL_OTP = "123456";
  const DUMMY_MOBILE_OTP = "654321";

  const touch = (field, valid, message) => {
    setErrors((prev) => ({
      ...prev,
      [field]: valid ? "" : message,
    }));
  };

  // ----------------------------
  // Main update handler (object based)
  // ----------------------------
  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  // ----------------------------
  // File Upload
  // ----------------------------
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    updateFormData({ passportPhoto: file });
    setPassportPhotoName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => setPhotoUrl(reader.result);
    reader.readAsDataURL(file);
  };

  // ----------------------------
  // Email & OTP
  // ----------------------------
  const handleEmailChange = (e) => {
    const email = e.target.value;

    updateFormData({ email });
    updateFormData({ isEmailVerified: false });

    if (isEmail(email)) {
      setShowSendOtp(true);
      setErrors((prev) => ({ ...prev, email: "" }));
    } else {
      setShowSendOtp(false);
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    }
  };

  // const sendOtpToEmail = () => {
  //   if (!formData.email) return;

  //   alert(`OTP sent to ${formData.email}`);
  //   setShowSendOtp(false);
  //   setShowOtp(true);
  //   setTimer(60);
  // };

  // const handleVerifyOtp = () => {
  //   if (otp === DUMMY_EMAIL_OTP) {
  //     updateFormData({ isEmailVerified: true });
  //     setShowOtp(false);
  //     setOtp("");
  //     alert("Email verified successfully!");
  //   } else {
  //     alert("Invalid Email OTP");
  //   }
  // };

  const sendOtpToEmail = async () => {
    try {
      const res = await fetch(`${API_BASE}/resend-email-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await res.json();
      if (data.success) {
        setShowSendOtp(false);
        setShowOtp(true);
        setTimer(60);
        alert("OTP sent to email");
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch(`${API_BASE}/verify-email-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp,
        }),
      });

      const data = await res.json();
      if (data.success) {
        updateFormData({ isEmailVerified: true });
        setShowOtp(false);
        setOtp("");
        alert("Email verified successfully");
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleMobileChange = (e) => {
    let raw = e.target.value.replace(/\D/g, "");
    if (raw.length > 10) raw = raw.slice(0, 10);

    // format: 98765-11111
    let formatted = raw;
    if (raw.length > 5) {
      formatted = raw.slice(0, 5) + "-" + raw.slice(5);
    }

    updateFormData({ mobile: formatted });
    updateFormData({ isMobileVerified: false });

    if (isMobile(formatted)) {
      setShowMobileSendOtp(true);
      setErrors((prev) => ({ ...prev, mobile: "" }));
    } else {
      setShowMobileSendOtp(false);
      setErrors((prev) => ({ ...prev, mobile: "Invalid mobile number" }));
    }
  };

  const sendMobileOtp = async () => {
    try {
      const res = await fetch(`${API_BASE}/resend-phone-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.mobile.replace("-", "") }),
      });

      const data = await res.json();
      console.log("sdfdgf", data);
      debugger;
      if (data.success) {
        setShowMobileSendOtp(false);
        setShowMobileOtp(true);
        setMobileTimer(60);
        toast.success("Mobile verified successfully");
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch {
      toast.error("Server error");
    }
  };

  const verifyMobileOtp = async () => {
    try {
      const res = await fetch(`${API_BASE}/verify-phone-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.mobile.replace("-", ""),
          otp: mobileOtp,
        }),
      });

      const data = await res.json();
      if (data.success) {
        updateFormData({ isMobileVerified: true });
        setShowMobileOtp(false);
        setMobileOtp("");
        toast.success("Mobile verified successfully");
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    if (mobileTimer <= 0) return;
    const interval = setInterval(
      () => setMobileTimer((prev) => prev - 1),
      1000,
    );
    return () => clearInterval(interval);
  }, [mobileTimer]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-xl shadow-sm bg-white space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Basic Details</h2>

      {/* Passport Photo */}
      <div className="photo-upload-section flex flex-col items-start gap-2">
        <div className="photo-preview w-64 h-32 border border-gray-300 flex items-center justify-center rounded-md overflow-hidden">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Passport"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400 text-center text-sm">
              Passport Size Photo
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          className={`mt-2 ml-5 p-1 border rounded-md ${
            errors.passportPhoto ? "border-red-500" : "border-gray-300"
          }`}
          style={{ marginRight: "15rem" }}
          onChange={handleFileUpload}
        />

        {passportPhotoName && (
          <div className="text-gray-700 text-sm">{passportPhotoName}</div>
        )}

        {errors.passportPhoto && (
          <div className="text-red-500 text-sm">{errors.passportPhoto}</div>
        )}
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["firstName", "middleName", "lastName"].map((field, idx) => {
          const label =
            field === "firstName"
              ? "First Name"
              : field === "middleName"
                ? "Middle Name"
                : "Last Name";

          return (
            <div key={idx}>
              <label className="block mb-1 font-medium">
                {label}{" "}
                {field === "firstName" && (
                  <span className="text-red-500">*</span>
                )}
              </label>

              <input
                type="text"
                placeholder={label}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          );
        })}
      </div>

      {/* Parents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "fatherName", label: "Father's Name", required: true },
          {
            name: "fatherContact",
            label: "Father's Contact Number",
            numeric: true,
          },
          { name: "motherName", label: "Mother's Name", required: true },
          {
            name: "motherContact",
            label: "Mother's Contact Number",
            numeric: true,
          },
        ].map((item, idx) => (
          <div key={idx}>
            <label className="block mb-1 font-medium">
              {item.label}{" "}
              {item.required && <span className="text-red-500">*</span>}
            </label>

            <input
              type={item.numeric ? "tel" : "text"}
              placeholder={item.label}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={formData[item.name]}
              onChange={(e) =>
                handleChange(
                  item.name,
                  item.numeric
                    ? e.target.value.replace(/\D/g, "")
                    : e.target.value,
                )
              }
              maxLength={item.numeric ? 10 : undefined}
            />
          </div>
        ))}
      </div>

      {/* Gender & DOB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">
            Gender <span className="text-red-500">*</span>
          </label>

          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Date of Birth <span className="text-red-500">*</span>
          </label>

          <input
            type="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
          />
        </div>
      </div>

      {/* Mobile & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mobile */}
        <div>
          <label className="block mb-1 font-medium">
            Mobile No.<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            maxLength={11}
            placeholder="98765-11111"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
              errors.mobile
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            value={formData.mobile}
            onChange={handleMobileChange}
            onBlur={() =>
              touch(
                "mobile",
                isMobile(formData.mobile),
                "Enter valid 10-digit mobile number",
              )
            }
          />

          {showMobileSendOtp && !formData.isMobileVerified && (
            <button
              type="button"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={sendMobileOtp}
            >
              Send OTP
            </button>
          )}

          {showMobileOtp && (
            <div className="mt-3">
              <label className="block mb-1 font-medium">Enter OTP</label>

              <input
                type="text"
                value={mobileOtp}
                placeholder="Enter OTP"
                className="w-full p-2 border rounded"
                onChange={(e) =>
                  setMobileOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
              />

              <div className="mt-2 text-sm flex items-center gap-3">
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={verifyMobileOtp}
                >
                  Verify OTP
                </button>

                {mobileTimer > 0 ? (
                  <p className="text-gray-500">Resend OTP in {mobileTimer}s</p>
                ) : (
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={sendMobileOtp}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}

          {formData.isMobileVerified && (
            <div className="mt-2 p-2 border-l-4 border-green-600 bg-green-50 rounded">
              <p className="text-green-800 font-medium">
                Mobile Verified: {formData.mobile}
              </p>
            </div>
          )}
        </div>

        {/* Email + OTP */}
        <div>
          <label className="block mb-1 font-medium">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="e.g. abc@abc.com"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring"
            value={formData.email}
            onChange={handleEmailChange}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          {showSendOtp && !formData.isEmailVerified && (
            <button
              type="button"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={sendOtpToEmail}
            >
              Send OTP
            </button>
          )}

          {showOtp && (
            <div className="mt-3">
              <label className="block mb-1 font-medium">Enter OTP</label>

              <input
                type="text"
                value={otp}
                placeholder="Enter OTP"
                className="w-full p-2 border rounded"
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
              />

              <div className="mt-2 text-sm flex items-center gap-3">
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>

                {timer > 0 ? (
                  <p className="text-gray-500">Resend OTP in {timer}s</p>
                ) : (
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={sendOtpToEmail}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}

          {formData.isEmailVerified && (
            <div className="mt-2 p-2 border-l-4 border-green-600 bg-green-50 rounded">
              <p className="text-green-800 font-medium">
                Email Verified: {formData.email}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Identification Mark */}
      <div>
        <label className="block mb-1 font-medium">
          Identification Mark<span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter identification mark"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          value={formData.idMark}
          onChange={(e) => handleChange("idMark", e.target.value)}
        />
      </div>

      {/* Height & Blood Group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Height */}
        <div>
          <label className="block mb-1 font-medium">
            Height (cm)<span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            placeholder="121.92-213.75 cm"
            min={121.4}
            max={213}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            value={formData.height || ""}
            onChange={(e) => handleChange("height", Number(e.target.value))}
          />
        </div>

        {/* Blood Group */}
        <div>
          <label className="block mb-1 font-medium">
            Blood Group<span className="text-red-500">*</span>
          </label>

          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            value={formData.bloodGroup}
            onChange={(e) => handleChange("bloodGroup", e.target.value)}
          >
            <option value="">Select Blood Group</option>
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sports Select */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SportsSelect
          value={formData.sportId}
          onChange={(sport) => updateFormData({ sportId: sport })}
        />

        {formData.sportId?.id && (
          <SportCategorySelect
            sportId={formData.sportId.id}
            value={formData.categoryId}
            onChange={(categoryId) => updateFormData({ categoryId })}
          />
        )}
      </div>

      {/* Registration Category */}
      <div className="field mb-4">
        <label className="block font-medium mb-2">
          Registration Category <span className="text-red-500">*</span>
        </label>

        <div className="flex flex-col md:flex-row gap-4">
          {["Athlete", "Para Athlete"].map((cat) => (
            <label
              key={cat}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                value={cat}
                checked={formData.regCategory === cat}
                onChange={(e) =>
                  updateFormData({ regCategory: e.target.value })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700 font-medium">{cat}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
