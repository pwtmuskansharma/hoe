import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

// Step Components
import BasicDetails from "./BasicDetails";
import AddressForm from "./Address";
import AddharCardUpload from "./AddharCard";
import Education from "./Education";
import AchievementForm from "./Achivement";
import SocialMediaForm from "./SocialMedia";
import StepProgressBar from "./StepProgressBar";
import PreviewModal from "./PreviewModels";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState({});

  const totalSteps = 6;

  // Full Form Data
  const [formData, setFormData] = useState({
    // Basic Details
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    fatherContact: "",
    motherName: "",
    motherContact: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    isEmailVerified: false,
    emailOtp: "",
    idMark: "",
    height: "",
    bloodGroup: "",
    sportId: { id: null, name: "" }, // <-- never null
    categoryId: [],
    regCategory: "",
    passportPhoto: null,

    // Addresses
    tempAddress: {
      block: "",
      village: "",
      postOffice: "",
      area: "",
      district: "",
      city: "",
      zipcode: "",
    },
    permAddress: {
      block: "",
      village: "",
      postOffice: "",
      area: "",
      district: "",
      city: "",
      zipcode: "",
    },
    sameAddress: false,

    // Aadhaar
    aadhaar: "",
    isAadhaarVerified: false,
    aadhaarOtp: "",
    aadhaarFile: null,

    // Education
    education: [],

    // Achievements
    achievements: {
      District: [],
      State: [],
      National: [],
      International: [],
      Other: "",
    },

    // Social Media
    socialMedia: {
      Instagram: { url: "" },
      YouTube: { url: "" },
      Facebook: { url: "" },
      LinkedIn: { url: "" },
      Twitter: { url: "" },
    },

    // Login
    login: "",
    password: "",
    confirmPassword: "",
  });

  // Update function to merge new data into formData
  const updateFormData = React.useCallback((newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  }, []);

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Animation Variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
    }),
  };

  const handleSubmit = () => {
    let validationErrors = {};

    // BASIC DETAILS (STEP 1)
    if (!formData.firstName)
      validationErrors.firstName = "First Name is required";
    if (!formData.lastName) validationErrors.lastName = "Last Name is required";
    if (!formData.gender) validationErrors.gender = "Gender is required";
    if (!formData.dob) validationErrors.dob = "Date of Birth is required";
    if (!formData.mobile) validationErrors.mobile = "Mobile number is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.isEmailVerified)
      validationErrors.isEmailVerified = "Email verification is required";

    // SPORT & CATEGORY
    if (!formData.sportId?.id)
      validationErrors.sportId = "Sport selection is required";

    if (!formData.categoryId || formData.categoryId.length === 0)
      validationErrors.categoryId = "At least 1 category must be selected";

    // PASSPORT PHOTO
    if (!formData.passportPhoto)
      validationErrors.passportPhoto = "Passport photo is required";

    // ADDRESS CHECK (STEP 2)
    const addr = formData.tempAddress;
    if (!addr.block || !addr.village || !addr.zipcode) {
      validationErrors.address = "Temporary address is incomplete";
    }

    // AADHAAR (STEP 3)
    if (!formData.aadhaar) validationErrors.aadhaar = "Aadhaar is required";
    if (!formData.isAadhaarVerified)
      validationErrors.isAadhaarVerified = "Aadhaar verification is required";

    // EDUCATION (STEP 4)
    if (!formData.education || formData.education.length === 0) {
      validationErrors.education = "Education details are required";
    }

    // SAVE ERRORS TO STATE
    setErrors(validationErrors);

    // IF ERRORS → SHOW TOASTS + STOP
    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((msg) => toast.error(msg));
      return;
    }

    // NO ERROR → OPEN PREVIEW MODAL
    setShowPreview(true);
  };

  const handleApiSubmit = async () => {
    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        setShowPreview(false); // close modal
      } else {
        alert(result.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 border-2 mt-3 rounded-lg">
      <img
        src="/images/logo.png"
        alt="HOA Olympic Logo"
        className="form-logo mx-auto"
      />
      <h1 className="text-3xl font-bold text-center mb-5 mt-5">
        HOA Registration Form
      </h1>

      {/* Step Progress Bar */}
      <StepProgressBar step={step} totalSteps={totalSteps} />

      <AnimatePresence mode="wait" custom={direction}>
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <BasicDetails
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
            />
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="step2"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <AddressForm
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </motion.div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <AddharCardUpload
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </motion.div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <motion.div
            key="step4"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Education
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </motion.div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <motion.div
            key="step5"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <AchievementForm
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </motion.div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <motion.div
            key="step6"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <SocialMediaForm
              formData={formData}
              updateFormData={updateFormData}
              prevStep={prevStep}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            onClick={prevStep}
          >
            Previous
          </button>
        )}

        {step < totalSteps && (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-auto"
            onClick={nextStep}
          >
            Next
          </button>
        )}

        {step === totalSteps && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ml-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>

      <PreviewModal
        show={showPreview}
        onClose={() => setShowPreview(false)}
        data={formData}
        onSubmit={handleApiSubmit} // <- API submission handler
      />
      <ToastContainer position="top-right" autoClose={2000} />
      {/* Debug */}
      <pre className="bg-gray-100 p-4 rounded mt-6">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}
