import React, { useState, useEffect } from "react";

// Singleton social media platforms
const SocialPlatforms = Object.freeze([
  "Instagram",
  "YouTube",
  "Facebook",
  "LinkedIn",
  "Twitter",
]);

export default function LoginSocialMediaForm({ formData, updateFormData }) {
  // Initialize social media URLs from parent or empty
  const [urls, setUrls] = useState(() => {
    return SocialPlatforms.map((p) => ({
      platform: p,
      url: formData.socialMedia?.[p]?.url || "",
    }));
  });

  // Validation errors
  const [errors, setErrors] = useState({
    social: {},
    password: "",
    confirmPassword: "",
  });

  // Initialize login/password from parent
  const [loginDetails, setLoginDetails] = useState(() => ({
    login: formData.login || "",
    password: formData.password || "",
    confirmPassword: formData.confirmPassword || "",
  }));

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [tooltip, setTooltip] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  // ===========================
  // SOCIAL MEDIA VALIDATION
  // ===========================
  const validateUrl = (platform, url) => {
    if (!url) return "";

    const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

    return regex.test(url) ? "" : `${platform} URL is invalid`;
  };

  const handleUrlChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index].url = value;
    setUrls(newUrls);

    // validate single field
    const platform = newUrls[index].platform;
    const errMsg = validateUrl(platform, value);

    setErrors((prev) => ({
      ...prev,
      social: { ...prev.social, [platform]: errMsg },
    }));
  };

  // Sync URLs with parent
  useEffect(() => {
    const socialData = {};
    urls.forEach((item) => {
      socialData[item.platform] = { url: item.url };
    });
    updateFormData({ socialMedia: socialData });
  }, [urls, updateFormData]);

  // ===========================
  // PASSWORD VALIDATION
  // ===========================
  const handleLoginChange = (field, value) => {
    const filteredValue = value.replace(
      /[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
      ""
    );

    let newLogin = { ...loginDetails, [field]: filteredValue };

    // Password Strength Tooltip
    if (field === "password") {
      setTooltip({
        uppercase: /[A-Z]/.test(filteredValue),
        lowercase: /[a-z]/.test(filteredValue),
        number: /[0-9]/.test(filteredValue),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(filteredValue),
      });
    }

    // Validate password match
    if (field === "password" || field === "confirmPassword") {
      if (
        newLogin.password &&
        newLogin.confirmPassword &&
        newLogin.password !== newLogin.confirmPassword
      ) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }

    setLoginDetails(newLogin);
  };

  // Sync login/password with parent
  useEffect(() => {
    updateFormData(loginDetails);
  }, [loginDetails, updateFormData]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* ------------------ Social Media URLs ------------------ */}
      <div className="border rounded-xl p-6 shadow-sm bg-white space-y-4">
        <h2 className="text-xl font-semibold mb-4">Social Media</h2>

        {urls.map((item, index) => (
          <div key={item.platform}>
            <label className="block mb-1 font-medium">
              {item.platform} URL
            </label>
            <input
              type="url"
              placeholder={`Enter ${item.platform} URL`}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={item.url}
              onChange={(e) => handleUrlChange(index, e.target.value)}
            />

            {/* URL ERROR */}
            {errors.social[item.platform] && (
              <p className="text-red-500 text-sm mt-1">
                {errors.social[item.platform]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ------------------ Login Details ------------------ */}
      <div className="border rounded-xl p-6 shadow-sm bg-white space-y-4">
        <h2 className="text-xl font-semibold mb-4">Login Details</h2>

        {/* Login / Username */}
        <div>
          <label className="block mb-1 font-medium">
            Login / Username<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 cursor-not-allowed bg-gray-100"
            value={formData.email}
            readOnly
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block mb-1 font-medium">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 pr-10"
            value={loginDetails.password}
            onChange={(e) => handleLoginChange("password", e.target.value)}
          />
          <button
            type="button"
            className="absolute top-[2.2rem] right-2 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>

          {/* Password Rules Tooltip */}
          <div className="text-sm mt-2 bg-gray-50 p-3 rounded-lg border space-y-1">
            <p className="flex items-center gap-2">
              <span
                className={
                  tooltip.uppercase ? "text-green-600" : "text-red-500"
                }
              >
                {tooltip.uppercase ? "✓" : "✗"}
              </span>
              Must contain at least one uppercase letter (A–Z)
            </p>

            <p className="flex items-center gap-2">
              <span
                className={
                  tooltip.lowercase ? "text-green-600" : "text-red-500"
                }
              >
                {tooltip.lowercase ? "✓" : "✗"}
              </span>
              Must contain at least one lowercase letter (a–z)
            </p>

            <p className="flex items-center gap-2">
              <span
                className={tooltip.number ? "text-green-600" : "text-red-500"}
              >
                {tooltip.number ? "✓" : "✗"}
              </span>
              Must contain at least one number (0–9)
            </p>

            <p className="flex items-center gap-2">
              <span
                className={tooltip.special ? "text-green-600" : "text-red-500"}
              >
                {tooltip.special ? "✓" : "✗"}
              </span>
              Must contain at least one special character (! @ # $ % etc.)
            </p>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block mb-1 font-medium">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 pr-10"
            value={loginDetails.confirmPassword}
            onChange={(e) =>
              handleLoginChange("confirmPassword", e.target.value)
            }
          />
          <button
            type="button"
            className="absolute top-[2.2rem] right-2 text-gray-600"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? "🙈" : "👁️"}
          </button>

          {/* PASSWORD MATCH ERROR */}
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
