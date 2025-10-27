import React, { useEffect, useMemo, useRef, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import eventsJson from "../../assets/events.json";
import "../../styles/HOARegistrationForm.css";
import PreviewModal from "./PreviewModal"; // adjust import path if needed
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { apiFetch } from "../../services/api/RegisterService";

// ---------- Types ----------
interface EventRow {
  gender: "Boys" | "Girls" | "Mixed";
  event: string;
}
interface CategoryRow {
  category: string;
  events: EventRow[];
}

interface AchievementFileState {
  districtFile?: File;
  stateFile?: File;
  nationalFile?: File;
  intlFile?: File;
  otherFile?: File;
}

interface Achievements {
  districtText: string;
  stateText: string;
  nationalText: string;
  intlText: string;
  otherAch: string;
}

interface FormState {
  filteredEvents: string[];
  firstName: string;
  middleName: string;
  lastName: string;
  fathersName: string;
  mothersName: string;
  dob: string;
  gender: "" | "Male" | "Female";
  permanentAddress: string;
  mobile: string;
  email: string;
  tempAddress: string;
  idMark: string;
  height: number;
  bloodGroup: string;
  events: string; // single-select
  sportCategory: string[]; // multi-select
  achievements: Achievements;
  qualification: string;
  college: string;
  collegeAddress: string;
  regCategory: "" | "Regular" | "Para Athlete";
  instagram: string;
  facebook: string;
  twitter: string;
  username: string;
  password: string;
  terms: boolean;
}

// ---------- Achievement Level Type ----------
interface AchievementLevel {
  name: string;
  textKey: keyof Achievements;
  fileKey: keyof AchievementFileState;
}

const HOARegistrationForm: React.FC = () => {
  const categoryList = useMemo(
    () => [
      "Archery",
      "Athletics",
      "Badminton",
      "Basketball",
      "Boxing",
      "Cycling (Track)",
      "Cycling (Road)",
      "Fencing",
      "Football",
      "Gatka",
      "Gymnastics",
      "Hockey",
      "Judo",
      "Kabaddi",
      "Kalarippayattu",
      "Kayaking & Canoeing",
      "Kho Kho",
      "Mallakhamb",
      "Rowing",
      "Shooting",
      "Swimming",
      "Table Tennis",
      "Tennis",
      "Thang Ta",
      "Volleyball",
      "Weightlifting",
      "Wrestling",
      "Yogasana",
      "Rugby",
      "Sepaktakraw",
    ],
    []
  );

  const achievementLevels: AchievementLevel[] = [
    {
      name: "District Level",
      textKey: "districtText",
      fileKey: "districtFile",
    },
    { name: "State Level", textKey: "stateText", fileKey: "stateFile" },
    {
      name: "National Level",
      textKey: "nationalText",
      fileKey: "nationalFile",
    },
    { name: "International Level", textKey: "intlText", fileKey: "intlFile" },
    { name: "Other Achievements", textKey: "otherAch", fileKey: "otherFile" },
  ];

  const [achievementFiles, setAchievementFiles] =
    useState<AchievementFileState>({});

  const [form, setForm] = useState<FormState>({
    filteredEvents: [],
    firstName: "",
    middleName: "",
    lastName: "",
    fathersName: "",
    mothersName: "",
    dob: "",
    gender: "",
    permanentAddress: "",
    mobile: "",
    email: "",
    tempAddress: "",
    idMark: "",
    height: 0,
    bloodGroup: "",
    events: "",
    sportCategory: [],
    achievements: {
      districtText: "",
      stateText: "",
      nationalText: "",
      intlText: "",
      otherAch: "",
    },
    qualification: "",
    college: "",
    collegeAddress: "",
    regCategory: "",
    instagram: "",
    facebook: "",
    twitter: "",
    username: "",
    password: "",
    terms: false,
  });

  // ---------- File Previews ----------
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [aadharFrontUrl, setAadharFrontUrl] = useState<string | null>(null);
  const [aadharBackUrl, setAadharBackUrl] = useState<string | null>(null);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const [aadharFrontName, setAadharFrontName] = useState("");
  const [aadharBackName, setAadharBackName] = useState("");
  const [signatureName, setSignatureName] = useState("");

  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);
  const signRef = useRef<HTMLInputElement>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ---------- react-select Options ----------
  const categoryOptions = categoryList.map((v) => ({ value: v, label: v }));
  const eventOptions = form.filteredEvents.map((e) => ({ value: e, label: e }));

  // ---------- Update Events based on Sport Category ----------
  useEffect(() => {
    if (form.sportCategory.length === 0) {
      setForm((prev) => ({ ...prev, filteredEvents: [], events: "" }));
      return;
    }

    const data = eventsJson as unknown as CategoryRow[];
    const allEvents: string[] = [];

    for (const category of form.sportCategory) {
      const match = data.find((e) => e.category === category);
      if (match)
        allEvents.push(
          ...match.events.map((ev) => `${match.category} - ${ev.event}`)
        );
    }

    allEvents.sort((a, b) => a.localeCompare(b));
    setForm((prev) => ({ ...prev, filteredEvents: allEvents }));
  }, [form.sportCategory]);

  // ---------- Build File Preview ----------
  const buildPreview = (
    file: File | undefined,
    prevUrl: string | null,
    setUrl: (v: string | null) => void
  ) => {
    if (prevUrl) URL.revokeObjectURL(prevUrl);
    const url = file ? URL.createObjectURL(file) : null;
    setUrl(url);
    return url;
  };

  // ---------- Cleanup ----------
  useEffect(() => {
    return () => {
      [photoUrl, aadharFrontUrl, aadharBackUrl, signatureUrl].forEach(
        (u) => u && URL.revokeObjectURL(u)
      );
    };
  }, [photoUrl, aadharFrontUrl, aadharBackUrl, signatureUrl]);

  // ---------- Handle Submit ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ---- Basic Required Fields ----
    const errors: string[] = [];

    if (!form.firstName.trim()) errors.push("First Name is required");
    // if (!form.lastName.trim()) errors.push("Last Name is required");
    if (!form.dob.trim()) errors.push("Date of Birth is required");
    if (!form.gender.trim()) errors.push("Gender is required");
    if (!form.mobile.trim()) errors.push("Mobile Number is required");
    if (!form.email.trim()) errors.push("Email is required");
    if (!form.sportCategory.length)
      errors.push("Please select at least one sport");
    if (!form.events || form.events === "") errors.push("Event is required");
    if (!form.username.trim()) errors.push("Username is required");
    if (!form.password.trim()) errors.push("Password is required");
    if (!form.terms) errors.push("Please accept Terms and Conditions");

    // Show all missing field errors
    if (errors.length > 0) {
      errors.forEach((err, index) => {
        setTimeout(() => toast.error(err), index * 300); // small delay so they stack neatly
      });
      return;
    }

    // ---- Mobile Number Validation ----
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(form.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ---- Email Validation (Any valid email) ----
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // ---- Date of Birth Validation ----
    const dob = new Date(form.dob);
    const today = new Date();
    const ageDiff = today.getFullYear() - dob.getFullYear();
    const hasBirthdayPassed =
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
    const age = hasBirthdayPassed ? ageDiff : ageDiff - 1;

    if (isNaN(dob.getTime())) {
      toast.error("Please enter a valid date of birth.");
      return;
    }

    if (age < 10) {
      toast.error("You must be at least 10 years old to register.");
      return;
    }

    setShowPreview(true);
  };

  const handleConfirmSubmit = async () => {
    setShowPreview(false);
    setLoading(true);

    try {
      const formData = new FormData();

      // ---------- Text Fields ----------
      formData.append("firstName", form.firstName);
      formData.append("middleName", form.middleName);
      formData.append("lastName", form.lastName);
      formData.append("fatherName", form.fathersName);
      formData.append("motherName", form.mothersName);
      formData.append("dob", form.dob);
      formData.append("gender", form.gender);
      formData.append("permAddr", form.permanentAddress);
      formData.append("tempAddr", form.tempAddress);
      formData.append("mobile", form.mobile);
      formData.append("email", form.email);
      formData.append("idMark", form.idMark);
      formData.append("height", Math.floor(form.height).toString());
      formData.append("bloodGroup", form.bloodGroup);
      const sportsPayload = form.sportCategory.map((s) => ({ value: s }));
      formData.append("sports", JSON.stringify(sportsPayload));
      formData.append("event", "1");
      formData.append("qualification", form.qualification);
      formData.append("college", form.college);
      formData.append("collegeAddr", form.collegeAddress);
      formData.append("regCategory", form.regCategory);
      formData.append("instagram", form.instagram);
      formData.append("facebook", form.facebook);
      formData.append("twitter", form.twitter);
      formData.append("username", form.username);
      formData.append("password", form.password);
      formData.append("terms", form.terms ? "1" : "0");

      // ---------- Achievements ----------
      achievementLevels.forEach((level) => {
        formData.append(level.textKey, form.achievements[level.textKey]);
        if (achievementFiles[level.fileKey])
          formData.append(level.fileKey, achievementFiles[level.fileKey]!);
      });

      // ---------- Other Files ----------
      if (photoUrl && frontRef.current?.files?.[0])
        formData.append("passport", frontRef.current.files[0]);
      if (aadharFrontUrl && frontRef.current?.files?.[0])
        formData.append("aadhar_front", frontRef.current.files[0]);
      if (aadharBackUrl && backRef.current?.files?.[0])
        formData.append("aadhar_back", backRef.current.files[0]);
      if (signRef.current?.files?.[0])
        formData.append("signature", signRef.current.files[0]);

      console.log("Submitting formData...");
      Array.from(formData.entries()).forEach(([k, v]) =>
        console.log(k, v instanceof File ? v.name : v)
      );

      // ---------- Submit to backend ----------
      const result = await apiFetch("athlete-register", formData);
      console.log("Backend response:", result);
      debugger;

      if (result.ok && result.data?.success) {
        await Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text:
            result.data.message || "Your form has been submitted successfully.",
          showConfirmButton: false,
          timer: 2000,
        });

        // ✅ RESET FORM AND FILES HERE
        setForm({
          filteredEvents: [],
          firstName: "",
          middleName: "",
          lastName: "",
          fathersName: "",
          mothersName: "",
          dob: "",
          gender: "",
          permanentAddress: "",
          mobile: "",
          email: "",
          tempAddress: "",
          idMark: "",
          height: 0,
          bloodGroup: "",
          events: "",
          sportCategory: [],
          achievements: {
            districtText: "",
            stateText: "",
            nationalText: "",
            intlText: "",
            otherAch: "",
          },
          qualification: "",
          college: "",
          collegeAddress: "",
          regCategory: "",
          instagram: "",
          facebook: "",
          twitter: "",
          username: "",
          password: "",
          terms: false,
        });

        setAchievementFiles({});
        setPhotoUrl(null);
        setAadharFrontUrl(null);
        setAadharBackUrl(null);
        setSignatureUrl(null);
        setAadharFrontName("");
        setAadharBackName("");
        setSignatureName("");

        if (frontRef.current) frontRef.current.value = "";
        if (backRef.current) backRef.current.value = "";
        if (signRef.current) signRef.current.value = "";

        navigate("/"); // ✅ Redirect to home
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text:
            result.data?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error: any) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text:
          error.message ||
          "Unable to reach the server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <img
        src="/images/logo.png"
        alt="HOA Olympic Logo"
        className="form-logo"
      />
      <h1>HOA Registration Form</h1>

      {/* Passport Photo Upload */}
      <div className="photo-upload-section">
        <div className="photo-preview">
          {photoUrl ? (
            <img src={photoUrl} alt="Passport" className="passport-photo" />
          ) : (
            <div className="photo-placeholder">Passport Size Photo</div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            buildPreview(e.target.files?.[0], photoUrl, setPhotoUrl)
          }
        />
      </div>

      <form onSubmit={handleSubmit}>
        {/* --- Name & Basics --- */}
        <label>
          Name <span style={{ color: "red" }}>*</span>{" "}
        </label>
        <div className="inline">
          <input
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            type="text"
            placeholder="First Name"
          />
          <input
            value={form.middleName}
            onChange={(e) => setForm({ ...form, middleName: e.target.value })}
            type="text"
            placeholder="Middle Name"
          />
          <input
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            type="text"
            placeholder="Last Name"
          />
        </div>

        <label>
          Father's Name
          <input
            value={form.fathersName}
            onChange={(e) => setForm({ ...form, fathersName: e.target.value })}
            type="text"
          />
        </label>
        <label>
          Mother's Name
          <input
            value={form.mothersName}
            onChange={(e) => setForm({ ...form, mothersName: e.target.value })}
            type="text"
          />
        </label>
        <label>
          Date of Birth <span style={{ color: "red" }}>*</span>{" "}
          <input
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
            type="date"
          />
        </label>

        <label>
          Gender <span style={{ color: "red" }}>*</span>{" "}
        </label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="Male"
              checked={form.gender === "Male"}
              onChange={(e) => setForm({ ...form, gender: "Male" })}
            />{" "}
            Male
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Female"
              checked={form.gender === "Female"}
              onChange={(e) => setForm({ ...form, gender: "Female" })}
            />{" "}
            Female
          </label>
        </div>

        {/* ---------- Aadhar ---------- */}
        <label>Aadhar Card</label>
        <div className="id-pair-row">
          {/* FRONT */}
          <div className="id-card">
            <div className="id-card-header">Front Side</div>
            <div className="id-preview">
              {aadharFrontUrl ? (
                <img src={aadharFrontUrl} alt="Front" />
              ) : (
                <img src="/images/aadhar-front.webp" alt="Placeholder" />
              )}
            </div>
            <input
              ref={frontRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                buildPreview(f, aadharFrontUrl, setAadharFrontUrl);
                setAadharFrontName(f?.name || "");
              }}
            />
            <div className="id-actions">
              <div
                className="id-file-name"
                title={aadharFrontName || "No file"}
              >
                {aadharFrontName || "Pas..."}
              </div>
              <button
                type="button"
                className="link"
                onClick={() => frontRef.current?.click()}
              >
                Change
              </button>
              <button
                type="button"
                className="link danger"
                onClick={() => {
                  if (aadharFrontUrl) URL.revokeObjectURL(aadharFrontUrl);
                  setAadharFrontUrl(null);
                  setAadharFrontName("");
                  if (frontRef.current) frontRef.current.value = "";
                }}
              >
                Remove
              </button>
            </div>
          </div>

          {/* BACK */}
          <div className="id-card">
            <div className="id-card-header">Back Side</div>
            <div className="id-preview">
              {aadharBackUrl ? (
                <img src={aadharBackUrl} alt="Back" />
              ) : (
                <img src="/images/aadhar-back.png" alt="Placeholder" />
              )}
            </div>
            <input
              ref={backRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                buildPreview(f, aadharBackUrl, setAadharBackUrl);
                setAadharBackName(f?.name || "");
              }}
            />
            <div className="id-actions">
              <div className="id-file-name" title={aadharBackName || "No file"}>
                {aadharBackName || "Pas..."}
              </div>
              <button
                type="button"
                className="link"
                onClick={() => backRef.current?.click()}
              >
                Change
              </button>
              <button
                type="button"
                className="link danger"
                onClick={() => {
                  if (aadharBackUrl) URL.revokeObjectURL(aadharBackUrl);
                  setAadharBackUrl(null);
                  setAadharBackName("");
                  if (backRef.current) backRef.current.value = "";
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Other Inputs (unchanged) ---------- */}
        <label>
          Permanent Address
          <textarea
            value={form.permanentAddress}
            onChange={(e) =>
              setForm({ ...form, permanentAddress: e.target.value })
            }
            rows={2}
          />
        </label>
        <div className="inline">
          <label>
            Mobile No. <span style={{ color: "red" }}>*</span>
            <input
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              type="text"
            />
          </label>
          <label>
            Email <span style={{ color: "red" }}>*</span>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
            />
          </label>
        </div>
        <label>
          Temporary Address
          <textarea
            value={form.tempAddress}
            onChange={(e) => setForm({ ...form, tempAddress: e.target.value })}
            rows={2}
          />
        </label>
        <label>
          Identification Mark
          <input
            value={form.idMark}
            onChange={(e) => setForm({ ...form, idMark: e.target.value })}
            type="text"
          />
        </label>
        <label>
          Height at time of registration
          <input
            type="number"
            value={form.height || ""} // <-- show empty string if 0
            placeholder="Enter your height in cm" // <-- placeholder text
            onChange={(e) =>
              setForm({ ...form, height: Number(e.target.value) })
            }
          />
        </label>

        <label>
          Blood Group
          <input
            value={form.bloodGroup}
            onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
            type="text"
          />
        </label>

        {/* Sport Category */}
        <label>
          Sport Category <span style={{ color: "red" }}>*</span>
        </label>
        <Select
          isMulti
          options={categoryOptions}
          placeholder="Select Sport Category"
          value={form.sportCategory.map((v) => ({ value: v, label: v }))}
          onChange={(vals: MultiValue<{ value: string; label: string }>) =>
            setForm((prev) => ({
              ...prev,
              sportCategory: vals.map((v) => v.value),
            }))
          }
          styles={{ container: (base) => ({ ...base, marginBottom: 16 }) }}
        />

        {/* Events */}
        <label>
          Events <span style={{ color: "red" }}>*</span>
        </label>
        <Select
          options={eventOptions}
          placeholder={
            !form.gender || form.sportCategory.length === 0
              ? "Select Gender and Sport Category first"
              : "Select Event"
          }
          isClearable
          isDisabled={form.sportCategory.length === 0}
          value={
            form.events ? { value: form.events, label: form.events } : null
          }
          onChange={(opt: SingleValue<{ value: string; label: string }>) =>
            setForm((prev) => ({ ...prev, events: opt?.value || "" }))
          }
        />

        {/* ---------- Achievements ---------- */}
        <label className="achievements-block">
          Upload Achievement Documents
        </label>
        {achievementLevels.map((level) => (
          <div key={level.fileKey} className="achievement-section">
            <label>{level.name}</label>
            <textarea
              placeholder="Mention achievements with dates and location"
              value={form.achievements[level.textKey]}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  achievements: {
                    ...prev.achievements,
                    [level.textKey]: e.target.value,
                  },
                }))
              }
            />
            <input
              type="file"
              onChange={(e) => {
                const f = e.target.files?.[0];
                setAchievementFiles((prev) => ({
                  ...prev,
                  [level.fileKey]: f,
                }));
              }}
            />
            {achievementFiles[level.fileKey] && (
              <div className="file-name">
                {achievementFiles[level.fileKey]?.name}
              </div>
            )}
          </div>
        ))}

        {/* Remaining Inputs */}
        <label>
          Qualification
          <input
            value={form.qualification}
            onChange={(e) =>
              setForm({ ...form, qualification: e.target.value })
            }
            type="text"
          />
        </label>
        <label>
          College Name / University Name
          <input
            value={form.college}
            onChange={(e) => setForm({ ...form, college: e.target.value })}
            type="text"
          />
        </label>
        <label>
          Address of College / University
          <textarea
            value={form.collegeAddress}
            onChange={(e) =>
              setForm({ ...form, collegeAddress: e.target.value })
            }
          />
        </label>

        {/* <label>Registration Category</label>
        <div className="radio-group">
          <label className="radio-label"><input type="radio" value="Regular" checked={form.regCategory==='Regular'} onChange={e=>setForm({...form,regCategory:'Regular'})}/> Regular</label>
          <label className="radio-label"><input type="radio" value="Para Athlete" checked={form.regCategory==='Para Athlete'} onChange={e=>setForm({...form,regCategory:'Para Athlete'})}/> Para Athlete</label>
        </div> */}

        <label>Registration Category</label>
        <div className="radio-group inline-radios">
          <label className="radio-label">
            <input
              type="radio"
              value="Regular"
              checked={form.regCategory === "Regular"}
              onChange={(e) => setForm({ ...form, regCategory: "Regular" })}
            />{" "}
            Regular
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Para Athlete"
              checked={form.regCategory === "Para Athlete"}
              onChange={(e) =>
                setForm({ ...form, regCategory: "Para Athlete" })
              }
            />{" "}
            Para Athlete
          </label>
        </div>

        <label>Social Media Accounts</label>
        <input
          value={form.instagram}
          onChange={(e) => setForm({ ...form, instagram: e.target.value })}
          type="text"
          placeholder="Instagram"
        />
        <input
          value={form.facebook}
          onChange={(e) => setForm({ ...form, facebook: e.target.value })}
          type="text"
          placeholder="Facebook"
        />
        <input
          value={form.twitter}
          onChange={(e) => setForm({ ...form, twitter: e.target.value })}
          type="text"
          placeholder="Twitter"
        />

        <label>
          Login Username <span style={{ color: "red" }}>*</span>{" "}
          <input
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            type="text"
          />
        </label>
        <label>
          Login Password <span style={{ color: "red" }}>*</span>{" "}
          <input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
          />
        </label>

        {/* ---------- Signature ---------- */}
        <label>Signature</label>
        <div className="signature-wrap">
          <div className="signature-preview">
            {signatureUrl ? (
              <img src={signatureUrl} alt="Signature" />
            ) : (
              <div className="photo-placeholder">Upload Signature</div>
            )}
          </div>
          <input
            ref={signRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              buildPreview(f, signatureUrl, setSignatureUrl);
              setSignatureName(f?.name || "");
            }}
          />
          <div className="id-actions" style={{ justifyContent: "center" }}>
            <div className="id-file-name" title={signatureName || "No file"}>
              {signatureName || "Pas..."}
            </div>
            <button
              type="button"
              className="link"
              onClick={() => signRef.current?.click()}
            >
              Change
            </button>
            <button
              type="button"
              className="link danger"
              onClick={() => {
                if (signatureUrl) URL.revokeObjectURL(signatureUrl);
                setSignatureUrl(null);
                setSignatureName("");
                if (signRef.current) signRef.current.value = "";
              }}
            >
              Remove
            </button>
          </div>
        </div>

        {/* ✅ Terms & Conditions */}
        <div className="terms-section flex ">
          <label className="terms-label flex ">
            <input
              type="checkbox"
              checked={form.terms}
              onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              className="ml-[-45px]"
            />
            <span className="text-sm ml-[-25px]">
              I agree to the{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline hover:text-red-700 "
              >
                Terms and Conditions
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>

        {showPreview && (
          <PreviewModal
            form={form}
            onConfirm={handleConfirmSubmit}
            onCancel={() => setShowPreview(false)}
          />
        )}
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default HOARegistrationForm;
